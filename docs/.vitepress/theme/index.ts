// https://vitepress.dev/guide/custom-theme
import 'uno.css';
import Theme from 'vitepress/theme';
import './style.css';

export default {
    ...Theme,
};

if (typeof window !== 'undefined') {
    // detect browser, add to class for conditional styling
    const browser = navigator.userAgent.toLowerCase();
    if (browser.includes('chrome')) document.documentElement.classList.add('browser-chrome');
    else if (browser.includes('firefox')) document.documentElement.classList.add('browser-firefox');
    else if (browser.includes('safari')) document.documentElement.classList.add('browser-safari');
}
