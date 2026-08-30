#!/usr/bin/env bash
set -euo pipefail

if [[ $# -lt 2 ]]; then
  echo "Usage: npm run docs:thumbnail -- <pdf-path> <output-name>"
  echo "Example: npm run docs:thumbnail -- public/documents/foo.pdf foo"
  exit 1
fi

PDF="$1"
OUT="$2"
DIR="public/images/documents"

if [[ ! -f "$PDF" ]]; then
  echo "PDF not found: $PDF" >&2
  exit 1
fi

mkdir -p "$DIR"
pdftoppm -jpeg -f 1 -l 1 -scale-to 640 -singlefile "$PDF" "$DIR/$OUT"
echo "Created $DIR/${OUT}.jpg"
