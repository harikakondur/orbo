import '@src/SidePanel.css';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import type { ComponentPropsWithoutRef } from 'react';

const SidePanel = () => {
  const theme = useStorage(exampleThemeStorage);
  const isLight = theme === 'light';

  return (
    <div className="bg-slate-50">
      <header className="text-gray-900">
        {/* Button to open the Typeform */}
        {/* <button
          onClick={openTypeform}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </button> */}

        <iframe
          id="embed-preview-iframe"
          loading="eager"
          src="https://embed.pickaxeproject.com/axe?id=Financial_Advisor_Bot_K38T3&mode=embed_gold&host=beta&theme=custom&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=FFFFFF&c_rb=FFFFFF&c_bb=649E6A&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=1&s_to=1&s_r=2"
          width="100%"
          height="700px"
          className="transition hover:translate-y-[-2px]]"
          style={{
            transition: '.3s',
            borderRadius: '4px',
            maxWidth: '700px',
          }}
          frameBorder="0"></iframe>

        <div className="mt-4 flex flex-col items-center w-full">
          <button className="bg-red-300 hover:bg-red-500 text-zinc font-bold py-2 px-4 rounded w-full max-w-md mb-2">
            Yes, I want to buy this
          </button>
          <button className="bg-green-300 hover:bg-green-500 text-zinc font-bold py-2 px-4 rounded w-full max-w-md">
            No, invest
          </button>
        </div>
      </header>
    </div>
  );
};

const openTypeform = () => {
  chrome.tabs.create({ url: 'https://87d8egcj3gl.typeform.com/to/PdQsyi2f' });
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
