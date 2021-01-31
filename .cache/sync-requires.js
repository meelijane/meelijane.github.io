const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("/Users/millyschmidt/website/new-website.io/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/millyschmidt/website/new-website.io/src/pages/about.js"))),
  "component---src-pages-career-js": hot(preferDefault(require("/Users/millyschmidt/website/new-website.io/src/pages/career.js"))),
  "component---src-pages-community-js": hot(preferDefault(require("/Users/millyschmidt/website/new-website.io/src/pages/community.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/millyschmidt/website/new-website.io/src/pages/index.js"))),
  "component---src-pages-testimonials-js": hot(preferDefault(require("/Users/millyschmidt/website/new-website.io/src/pages/testimonials.js")))
}

