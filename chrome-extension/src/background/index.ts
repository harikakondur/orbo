import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log('Received message:', message);
  if (message.action === 'showSidePanel' && sender.tab) {
    chrome.sidePanel.setOptions({
      tabId: sender.tab.id,
      path: '../../pages/side-panel/index.html',
      enabled: true,
    });
  }
});
console.log('background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");
