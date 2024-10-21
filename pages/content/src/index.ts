import { toggleTheme } from '@src/toggleTheme';

console.log('content script loaded');
function isCartPage(): boolean {
  const url = window.location.href;
  return url.includes('cart') || url.includes('checkout') || url.includes('basket');
}

if (isCartPage()) {
  console.log('You are on a cart, checkout, or basket page!');
  showSidePanel();
} else {
  console.log('You are not on a relevant page.');
}

function showSidePanel(): void {
  console.log('in show side panel');
  // Send a message to the background script to enable the side panel
  chrome.runtime.sendMessage({ action: 'showSidePanel' });
}
void toggleTheme();
