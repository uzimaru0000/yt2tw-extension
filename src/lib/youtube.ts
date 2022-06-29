export const isYouTube = (url: URL | undefined) => {
  if (!url) {
    return undefined;
  }

  return url.host === 'www.youtube.com' && url.pathname === '/watch';
};

export const getVideoId = (url: URL | undefined) => {
  if (!url) {
    return undefined;
  }

  return url.searchParams.get('v') ?? undefined;
};
