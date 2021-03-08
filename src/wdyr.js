import React from "react";

const on = false;

if (process.env.NODE_ENV === "development" && on) {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true,
    exclude: [/^Icon/],
  });
}
