"""Serve the Astro static site on Gandi Python (WSGI) hosting.

Gandi routes all non-/static|/media requests through this `application`
callable. A plain redirect to index.html would loop or 404; instead we
map URL paths to files produced by `astro build`.
"""

from __future__ import annotations

import mimetypes
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parent


def _candidates(path_info: str) -> list[Path]:
    rel = unquote(path_info or "/").lstrip("/")
    if not rel or rel.endswith("/"):
        return [ROOT / rel / "index.html"]
    return [
        ROOT / rel,
        ROOT / f"{rel}.html",
        ROOT / rel / "index.html",
    ]


def application(environ, start_response):
    method = environ.get("REQUEST_METHOD", "GET").upper()
    if method not in ("GET", "HEAD"):
        start_response(
            "405 Method Not Allowed",
            [("Content-Type", "text/plain; charset=utf-8")],
        )
        return [b"Method Not Allowed"]

    file_path = None
    for candidate in _candidates(environ.get("PATH_INFO", "/")):
        try:
            resolved = candidate.resolve(strict=False)
            resolved.relative_to(ROOT)
        except (OSError, ValueError):
            continue
        if resolved.is_file() and resolved.name != "wsgi.py":
            file_path = resolved
            break

    if file_path is None:
        start_response(
            "404 Not Found",
            [("Content-Type", "text/plain; charset=utf-8")],
        )
        return [b"Not Found"]

    content_type, _ = mimetypes.guess_type(str(file_path))
    if not content_type:
        content_type = "application/octet-stream"
    elif content_type.startswith("text/") or content_type in (
        "application/javascript",
        "application/json",
        "image/svg+xml",
    ):
        content_type = f"{content_type}; charset=utf-8"

    size = file_path.stat().st_size
    start_response(
        "200 OK",
        [
            ("Content-Type", content_type),
            ("Content-Length", str(size)),
        ],
    )
    if method == "HEAD":
        return []
    return [file_path.read_bytes()]
