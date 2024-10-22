import React from 'react';
import ReactDOM from 'react-dom';
import { toggleTheme } from '@src/toggleTheme';

console.log('content script loaded');

function isCartPage(): boolean {
  const url = window.location.href;
  return url.includes('cart') || url.includes('checkout') || url.includes('basket');
}

if (isCartPage()) {
  console.log('You are on a cart, checkout, or basket page!');
  showWaitMessage();
} else {
  console.log('You are not on a relevant page.');
}

function showWaitMessage(): void {
  // Add a red filter to the page
  // const overlay = document.createElement("div")
  // overlay.className = "fixed w-screen h-screen left-0 top-0 bg-red-500/10"
  // document.body.appendChild(overlay)
  // console.log(overlay)
}

void toggleTheme();
