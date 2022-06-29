import { useShare } from './hooks/useShare';

export const Popup = () => {
  const shareURL = useShare();

  if (shareURL) {
    return (
      <div>
        <a href={shareURL} target="_brank" rel="noopener">
          Share
        </a>
      </div>
    );
  }

  return <div>No YouTube!!</div>;
};
