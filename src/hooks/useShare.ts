import { useMemo } from 'react';
import { getVideoId, isYouTube } from '../lib/youtube';
import { useURL } from './useURL';

export const useShare = () => {
  const url = useURL();
  const id = useMemo(() => {
    if (!isYouTube(url)) {
      return undefined;
    }

    return getVideoId(url);
  }, [url]);
  const shareURL = useMemo(() => {
    if (!id) {
      return undefined;
    }

    const u = new URL('https://www.yt2tw.app/tweet');
    u.searchParams.set('id', id);
    return u.href;
  }, [id]);

  return shareURL;
};
