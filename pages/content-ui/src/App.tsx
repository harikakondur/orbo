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
      <div className="flex items-center justify-between gap-2 rounded bg-blue-100 px-2 py-1">
        <div className="flex gap-1 text-blue-500">
          Edit <strong className="text-blue-700">pages/content-ui/src/app.tsx</strong> and save to reload.
        </div>
        <Button theme={theme} onClick={exampleThemeStorage.toggle}>
          Toggle Theme
        </Button>
      </div>
      {isCartPage() && (
        <div className="w-screen h-screen fixed bg-red-500/10 left-0 top-0 z-[1000] grid place-items-center">
          <button className="px-4 py-2 font-bold bg-white border" onClick={handleOpenSidePanel}>
            Open Sidepanel
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
