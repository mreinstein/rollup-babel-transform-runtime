# rollup-babel-transform-runtime

bare minimum rollup/babel boilerplate for supporting async/await in ie11


The babel configuration is a bit involved:
* need a `browserslist` entry in `package.json`
* numerous babel plugins are needed
* unintuitive/odd config to get it all working


This repo has a fully working example that takes `main.js` as input. You run `npm run build` to generate `bundle.js` which produces works in all browsers compatible with `>= ie11` (this is configured via the `browserslist` field.)
