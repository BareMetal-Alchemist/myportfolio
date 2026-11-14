// jest-dom adds custom jest matchers for asserting on DOM nodes.
import "@testing-library/jest-dom";

// jsdom lacks matchMedia and IntersectionObserver; the site degrades
// gracefully without them, but the hooks expect the APIs to exist.
if (typeof window !== "undefined") {
  if (typeof window.matchMedia !== "function") {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false,
    });
  }
  if (typeof window.IntersectionObserver !== "function") {
    window.IntersectionObserver = class {
      constructor(cb) {
        this.cb = cb;
      }
      observe(el) {
        this.cb([{ isIntersecting: true, target: el }]);
      }
      unobserve() {}
      disconnect() {}
    };
  }
  if (typeof window.HTMLElement.prototype.scrollIntoView !== "function") {
    window.HTMLElement.prototype.scrollIntoView = () => {};
  }
}
