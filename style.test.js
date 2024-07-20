/**
 * @jest-environment jsdom
 */

// style.test.js
const fs = require('fs');
const path = require('path');

// Helper function to load the CSS file
const loadCSS = () => {
    const cssPath = path.join(__dirname, 'style.css');
    return fs.readFileSync(cssPath, 'utf8');
};

// Helper function to apply the CSS to the document
const applyCSS = (css) => {
    const style = document.createElement('style');
    style.innerHTML = css;
    document.head.appendChild(style);
};

describe('CSS Class Tests', () => {
    let css;

    beforeAll(() => {
        css = loadCSS();
        applyCSS(css);
    });

    beforeEach(() => {
        document.body.innerHTML = ''; // Reset the body content before each test
    });

    test('Header should have the correct styles', () => {
        document.body.innerHTML = '<header></header>';
        const header = document.querySelector('header');

        const styles = getComputedStyle(header);
        expect(styles.backgroundColor).toBe('rgb(52, 152, 219)');
        expect(styles.color).toBe('rgb(255, 255, 255)');
        expect(styles.padding).toBe('1rem 0px');
    });

    test('Dark mode toggle should have the correct styles', () => {
        document.body.innerHTML = '<button class="dark-mode-toggle"></button>';
        const button = document.querySelector('.dark-mode-toggle');

        const styles = getComputedStyle(button);
        expect(styles.position).toBe('fixed');
        expect(styles.top).toBe('20px');
        expect(styles.right).toBe('20px');
        expect(styles.backgroundColor).toBe('rgb(51, 51, 51)');
        expect(styles.color).toBe('rgb(255, 255, 255)');
    });

    test('Update section should have the correct styles', () => {
        document.body.innerHTML = '<div class="update-section"></div>';
        const updateSection = document.querySelector('.update-section');

        const styles = getComputedStyle(updateSection);
        expect(styles.maxWidth).toBe('800px');
        expect(styles.margin).toBe('0px auto 2rem');
        expect(styles.backgroundColor).toBe('rgb(255, 255, 255)');
        expect(styles.padding).toBe('2rem');
    });

    test('Body should have dark mode styles applied', () => {
        document.body.classList.add('dark-mode');

        const styles = getComputedStyle(document.body);
        expect(styles.backgroundColor).toBe('rgb(26, 26, 26)');
        expect(styles.color).toBe('rgb(240, 240, 240)');
    });
});
