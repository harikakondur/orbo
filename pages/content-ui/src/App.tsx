import { useEffect } from 'react';
import { Button } from '@extension/ui';
import { useStorage } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';

export default function App() {
  const theme = useStorage(exampleThemeStorage);

  const handleOpenSidePanel = async () => {
    chrome.runtime.sendMessage({ action: 'open_side_panel' });
  };

  useEffect(() => {
    console.log('content ui loaded');
  }, []);

  return (
    <>
      {isCartPage() && (
        <div className="w-screen h-screen fixed bg-green-500/20 left-0 top-0 z-[1000] grid place-items-center">
          <button
            className="px-8 py-2 font-bold bg-green-600 border text-xl rounded-lg z-[1001] relative"
            onClick={handleOpenSidePanel}>
            Wait! Lets think about this.
          </button>
        </div>
      )}
    </>
  );
}

function isCartPage(): boolean {
  const url = window.location.href;
  return url.includes('cart') || url.includes('checkout') || url.includes('basket');
}
