import { TAudioManagerStatus } from '../../types/TAudioManagerStatus';

export default function getStatusConst(status: TAudioManagerStatus) {
  const isError = status === 'error',
    isPlayed = status === 'played',
    isPaused = status === 'paused',
    isLoading = status === 'loading';

  return {
    isError,
    isPlayed,
    isPaused,
    isLoading,
  };
}
