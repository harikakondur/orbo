import '@src/SidePanel.css';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import type { ComponentPropsWithoutRef } from 'react';

const SidePanel = () => {
  const theme = useStorage(exampleThemeStorage);
  const isLight = theme === 'light';
  const logo = isLight ? 'side-panel/logo_vertical.svg' : 'side-panel/logo_vertical_dark.svg';
  const goGithubSite = () =>
    chrome.tabs.create({ url: 'https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite' });

  return (
    <div className={`App ${isLight ? 'bg-slate-50' : 'bg-gray-800'}`}>
      <header className={`App-header ${isLight ? 'text-gray-900' : 'text-gray-100'}`}>
        {/* <button onClick={goGithubSite}>
          <img src={chrome.runtime.getURL(logo)} className="App-logo" alt="logo" />
        </button> */}
        <p>{/* Edit <code>pages/side-panel/src/SidePanel.tsx</code> */}</p>
        {/* <ToggleButton>Toggle theme</ToggleButton> */}
        <div>Hello, Welcome to xyz !</div>

        {/* Button to open the Typeform */}
        {/* <button
          onClick={openTypeform}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Get Started
        </button> */}

        {/* <iframe
          id="embed-preview-iframe"
          loading="eager"
          src="https://embed.pickaxeproject.com/axe?id=Personal_Finance_Buddy_OZZNS&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=228DD7&c_bt=000000&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=outline&s_t=1&s_to=1&s_r=2&title=hide"
          width="100%"
          height="500px"
          className="transition hover:translate-y-[-2px] hover:shadow-[0_6px_20px_0px_rgba(0,0,0,0.15)]"
          style={{
            border: '1px solid rgba(0, 0, 0, 1)',
            transition: '.3s',
            borderRadius: '4px',
            maxWidth: '700px'
          }}
        >
        </iframe> */}

        <iframe
          id="embed-preview-iframe"
          loading="eager"
          src="https://embed.pickaxeproject.com/axe?id=Financial_Advisor_Bot_K38T3&mode=embed_gold&host=beta&theme=light&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=888888&c_rb=FFFFFF&c_bb=228DD7&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=1&s_to=1&s_r=2"
          width="100%"
          height="500px"
          className="transition hover:translate-y-[-2px] hover:shadow-[0_6px_20px_0px_rgba(0,0,0,0.15)]"
          style={{
            border: '1px solid rgba(0, 0, 0, 1)',
            transition: '.3s',
            borderRadius: '4px',
            maxWidth: '700px',
          }}
          frameBorder="0"></iframe>
      </header>
    </div>
  );
};

const openTypeform = () => {
  chrome.tabs.create({ url: 'https://87d8egcj3gl.typeform.com/to/PdQsyi2f' });
};

const ToggleButton = (props: ComponentPropsWithoutRef<'button'>) => {
  const theme = useStorage(exampleThemeStorage);
  return (
    <button
      className={
        props.className +
        ' ' +
        'font-bold mt-4 py-1 px-4 rounded shadow hover:scale-105 ' +
        (theme === 'light' ? 'bg-white text-black' : 'bg-black text-white')
      }
      onClick={exampleThemeStorage.toggle}>
      {props.children}
    </button>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
