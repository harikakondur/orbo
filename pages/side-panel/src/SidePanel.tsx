import '@src/SidePanel.css';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import { useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SidePanel = () => {
  const theme = useStorage(exampleThemeStorage);

  // State to track which button was clicked
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const data = [
    { year: '2024', saveGrowth: 50, investGrowth: 100, spentToday: 50 },
    { year: '2025', saveGrowth: 200, investGrowth: 400, spentToday: 50 },
    { year: '2026', saveGrowth: 400, investGrowth: 700, spentToday: 50 },
    { year: '2027', saveGrowth: 600, investGrowth: 1000, spentToday: 50 },
    { year: '2028', saveGrowth: 900, investGrowth: 1500, spentToday: 50 },
    { year: '2029', saveGrowth: 1200, investGrowth: 2000, spentToday: 50 },
    { year: '2030', saveGrowth: 1400, investGrowth: 2500, spentToday: 50 },
    { year: '2031', saveGrowth: 1600, investGrowth: 3000, spentToday: 50 },
    { year: '2032', saveGrowth: 1800, investGrowth: 3500, spentToday: 50 },
    { year: '2033', saveGrowth: 2000, investGrowth: 4000, spentToday: 50 },
    { year: '2034', saveGrowth: 2200, investGrowth: 4500, spentToday: 50 },
  ];

  // Render the content based on the selected option
  const renderContent = () => {
    if (selectedOption === 'yes') {
      return (
        <div className="w-full max-w-md text-center">
          <div className="flex justify-center items-center mb-4 space-x-4">
            {' '}
            {/* Adds space between columns */}
            {/* Circular Progress Bar for Sustainability Score */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold">Sustainability Score</span> {/* Metric Title */}
              <p className="text-lg font-bold">3.9/5</p> {/* Figure */}
            </div>
            {/* Other Information 1 */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold">Carbon Footprint</span> {/* Metric Title */}
              <p className="text-lg font-bold">20kg</p> {/* Figure */}
            </div>
            {/* Other Information 2 */}
            <div className="flex flex-col items-center">
              <span className="text-xs font-semibold">Regret Rate</span> {/* Metric Title */}
              <p className="text-lg font-bold">66%</p> {/* Figure */}
            </div>
          </div>

          {/* alternatives */}

          <h2 className="text-md font-semibold mb-4">Sustainable Alternatives Near You</h2>

          <iframe
            width="100%"
            height="200"
            style={{ border: 0 }}
            className="rounded-lg"
            loading="lazy"
            // allowfullscreen
            src="https://www.google.com/maps/embed/v1/search?q=thrift+stores+in+boulder+&key=AIzaSyAzY7nlhEhIrQz8QrH7aKSGrgiXPaldO8s"></iframe>
        </div>
      );
    } else if (selectedOption === 'no') {
      return (
        <div className="w-full max-w-md text-center">
          <h2 className="text-lg font-bold">Invest in Your Future</h2>
          <p className="text xs italic pb-2">One step closer to building a better future!</p>
          <div style={{ width: '90%', height: '200px' }} className="py-2 ml-4 pb-4">
            <ResponsiveContainer>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="4 4" />
                <XAxis dataKey="year" />
                <YAxis label={{ value: 'Growth ($)', angle: -90, position: 'insideLeft' }} />
                <Legend />
                {/* Line for saving growth */}
                <Line type="monotone" dataKey="saveGrowth" stroke="#0000FF" name="Save Growth" />
                {/* Line for investing growth */}
                <Line type="monotone" dataKey="investGrowth" stroke="#34D399" name="Invest Growth" />
                {/* Straight line for spending today */}
                <Line type="monotone" dataKey="spentToday" stroke="#EF4444" name="Spent Today" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Investment options  */}
          <div className="flex justify-center space-x-2">
            <button className="bg-zinc-900 hover:bg-blue-700 text-white text-xs p-2 rounded-lg">
              Add to Savings Account
            </button>
            <button className="bg-zinc-900 hover:bg-green-700 text-white  text-xs p-2 rounded-lg">
              Add to Investment Fund
            </button>
          </div>
        </div>
      );
    }
    return null; // Initial state, no button clicked
  };

  // Determine iframe height based on selection
  const iframeHeight = selectedOption ? '350px' : '700px';

  return (
    <div className="bg-slate-50">
      <header className="text-gray-900">
        <iframe
          id="embed-preview-iframe"
          loading="eager"
          src="https://embed.pickaxeproject.com/axe?id=Financial_Advisor_Bot_K38T3&mode=embed_gold&host=beta&theme=custom&opacity=100&font_header=Real+Head+Pro&size_header=30&font_body=Real+Head+Pro&size_body=16&font_labels=Real+Head+Pro&size_labels=14&font_button=Real+Head+Pro&size_button=16&c_fb=FFFFFF&c_ff=FFFFFF&c_fbd=FFFFFF&c_rb=FFFFFF&c_bb=649E6A&c_bt=FFFFFF&c_t=000000&s_ffo=100&s_rbo=100&s_bbo=100&s_f=minimalist&s_b=filled&s_t=1&s_to=1&s_r=2"
          width="100%"
          height={iframeHeight}
          className="border-2  rounded-md transition hover:translate-y-[-2px]]"
          style={{
            transition: '.3s',
            borderRadius: '4px',
            maxWidth: '700px',
          }}
          frameBorder=""></iframe>

        <div className="mt-4 flex flex-col items-center w-full">
          <button
            onClick={() => setSelectedOption('yes')}
            className="bg-red-700 text-white font-bold py-2 px-4 rounded-xl w-full max-w-md mb-2">
            Yes, I want to buy this
          </button>
          <button
            onClick={() => setSelectedOption('no')}
            className="bg-green-600  text-white font-bold py-2 px-4 rounded-xl w-full max-w-md">
            No, invest
          </button>
        </div>

        {/* Conditional rendering based on user selection */}
        <div className="mt-6">{renderContent()}</div>
      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
