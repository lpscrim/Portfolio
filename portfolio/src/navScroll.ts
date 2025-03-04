const nav = document.querySelector("header");
const supportPageOffset = window.scrollX !== undefined;
const isCSS1Compat = (document.compatMode || "") === "CSS1Compat";

let previousScrollPosition = 0;

const isScrollingDown = () => {
  let scrolledPosition = supportPageOffset
    ? window.scrollY
    : isCSS1Compat
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
  let isScrollDown;

  if (scrolledPosition > previousScrollPosition) {
    isScrollDown = true;
  } else {
    isScrollDown = false;
  }
  previousScrollPosition = scrolledPosition;
  return isScrollDown;
};

const handleNavScroll = () => {
  const aboutSection = document.getElementById("about");
  const aboutSectionTop = aboutSection?.offsetTop || 0;

  if (isScrollingDown() && !nav?.contains(document.activeElement)) {
    nav?.classList.add("scroll-down");
    nav?.classList.remove("scroll-up");
  } else {
    nav?.classList.add("scroll-up");
    nav?.classList.remove("scroll-down");
  }

  if (window.scrollY < aboutSectionTop) {
    nav?.classList.add("scroll-down");
    nav?.classList.remove("scroll-up");
  }
  
};

let throttleTimer: boolean;

const throttle = (callback: () => void, time: number) => {
  if (throttleTimer) return;

  throttleTimer = true;
  setTimeout(() => {
    callback();
    throttleTimer = false;
  }, time);
};

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

window.addEventListener("scroll", () => {
  if (mediaQuery && !mediaQuery.matches) {
    throttle(handleNavScroll, 250);
  }
});
