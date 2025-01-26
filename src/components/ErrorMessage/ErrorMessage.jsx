import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function ErrorMessage({ isError }) {
  useEffect(() => {
    if (!isError) return;
    toast.error('This didnt work.');
  }, [isError]);

  return (
    <>
      <Toaster />
    </>
  );
}
