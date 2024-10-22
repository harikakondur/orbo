import 'webextension-polyfill';
import { exampleThemeStorage } from '@extension/storage';

exampleThemeStorage.get().then(theme => {
  console.log('theme', theme);
});

let windowId;
chrome.tabs.onActivated.addListener(function (activeInfo) {
  windowId = activeInfo.windowId;
});

// to receive messages from popup script
chrome.runtime.onMessage.addListener((message, sender) => {
  (async () => {
    if (message.action === 'open_side_panel') {
      console.log('recieved message');
      chrome.sidePanel.open({ windowId: windowId });
    }
  })();
});

console.log('background loaded');
console.log("Edit 'chrome-extension/src/background/index.ts' and save to reload.");
