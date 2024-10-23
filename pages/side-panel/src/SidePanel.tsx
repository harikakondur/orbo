import '@src/SidePanel.css';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import { useState } from 'react';

const SidePanel = () => {
  const theme = useStorage(exampleThemeStorage);

  // State to track which button was clicked
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  // Render the content based on the selected option
  const renderContent = () => {
    if (selectedOption === 'yes') {
      return (
        <div className="w-full max-w-md text-center">
          <h2 className="text-lg font-bold mb-4">Sustainable Alternatives Near You</h2>
          <iframe
            width="100%"
            height="250"
            style={{ border: 0 }}
            loading="lazy"
            // allowfullscreen
            src="https://www.google.com/maps/embed/v1/search?q=thrift+stores+in+boulder+&key=AIzaSyAzY7nlhEhIrQz8QrH7aKSGrgiXPaldO8s"></iframe>
          <p>Sustainability Score: 85%</p>
          <p>Average Lifetime of Product: 5 years</p>
          <p>
            Honey Recommendations: <a href="#">Find Deals</a>
          </p>
          {/* Add more relevant content */}
        </div>
      );
    } else if (selectedOption === 'no') {
      return (
        <div className="w-full max-w-md text-center">
          <h2 className="text-lg font-bold mb-4">Invest in Your Future</h2>
          <p>You just took one step closer to building a better future!</p>
          <p>
            Projected Growth Chart: <a href="#">View Your Chart</a>
          </p>
          <p>Choose Fund:</p>
          <ul>
            <li>Add to Savings Account</li>
            <li>Add to Investment Fund</li>
          </ul>
          {/* Add more investment-related options */}
        </div>
      );
    }
    return null; // Initial state, no button clicked
  };

  // Determine iframe height based on selection
  const iframeHeight = selectedOption ? '400px' : '700px';

  return (
    <div className="bg-slate-50">
      <header className="text-gray-900">
        <iframe
          id="embed-preview-iframe"
          loading="eager"
          src="https://embed.pickaxeproject.com/axe?id=Financial_Advisor_Bot_K38T3&mode=embed_gold&host=beta&theme=custom&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=FFFFFF&c_rb=FFFFFF&c_bb=649E6A&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=1&s_to=1&s_r=2"
          width="100%"
          height={iframeHeight}
          className="transition hover:translate-y-[-2px]]"
          style={{
            transition: '.3s',
            borderRadius: '4px',
            maxWidth: '700px',
          }}
          frameBorder="0"></iframe>

        <div className="mt-4 flex flex-col items-center w-full">
          <button
            onClick={() => setSelectedOption('yes')}
            className="bg-red-300 hover:bg-red-500 text-zinc font-bold py-2 px-4 rounded w-full max-w-md mb-2">
            Yes, I want to buy this
          </button>
          <button
            onClick={() => setSelectedOption('no')}
            className="bg-green-300 hover:bg-green-500 text-zinc font-bold py-2 px-4 rounded w-full max-w-md">
            No, invest
          </button>
        </div>

        {/* Conditional rendering based on user selection */}
        <div className="mt-6">{renderContent()}</div>
      </header>
    </div>
  );
};

const openTypeform = () => {
  chrome.tabs.create({ url: 'https://87d8egcj3gl.typeform.com/to/PdQsyi2f' });
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
