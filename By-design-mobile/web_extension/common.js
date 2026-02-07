// Polyfill for Chrome
// https://bugs.chromium.org/p/chromium/issues/detail?id=798169
if (typeof globalThis.browser === "undefined") {
    globalThis.browser = globalThis.chrome;
  }
  
  /**
   * @typedef {{
   *   focusMode: boolean,
   * }} Options
   */
  
  /** @type {Options} */
  const defaultOptions = {
    focusMode: false,
  }
  
  /**
   * @returns {Promise<Options>}
   */
  const loadOptions = async () => {
    const options = (await new Promise((resolve) => {
      browser.storage.local.get(defaultOptions, resolve);
    }));
  
    return { ...defaultOptions, ...options }
  }