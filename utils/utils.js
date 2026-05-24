export const animationCreate = () => {
  if (typeof window !== "undefined") {
    const WOW = require("wowjs");
    new WOW.WOW({ live: false }).init();
  }
};
