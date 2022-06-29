import { useEffect, useState } from 'react';

export const useURL = () => {
  const [url, setUrl] = useState<URL | undefined>(undefined);

  useEffect(() => {
    const handler = async () => {
      const [tab] = await chrome.tabs.query({ active: true });
      if (!tab || !tab.url) {
        return;
      }

      setUrl(new URL(tab.url));
    };

    handler();
  }, []);

  return url;
};
