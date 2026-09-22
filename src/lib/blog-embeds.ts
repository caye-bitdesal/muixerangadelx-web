export function youtubeEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname === 'youtu.be') {
      const id = parsed.pathname.slice(1).split('/')[0];
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : null;
    }

    if (!parsed.hostname.includes('youtube.com')) {
      return null;
    }

    const fromQuery = parsed.searchParams.get('v');
    if (fromQuery) {
      return `https://www.youtube-nocookie.com/embed/${fromQuery}`;
    }

    const segments = parsed.pathname.split('/').filter(Boolean);
    const [kind, id] = segments;

    if ((kind === 'embed' || kind === 'shorts' || kind === 'live') && id) {
      return `https://www.youtube-nocookie.com/embed/${id}`;
    }
  } catch {
    return null;
  }

  return null;
}

export function instagramPermalink(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (!parsed.hostname.includes('instagram.com')) {
      return null;
    }

    const match = parsed.pathname.match(/^\/(p|reel|tv)\/([^/]+)/);
    if (!match) {
      return null;
    }

    return `https://www.instagram.com/${match[1]}/${match[2]}/`;
  } catch {
    return null;
  }
}
