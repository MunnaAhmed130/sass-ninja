const { src, dest, watch, series } = require("gulp");
const cleanCSS = require("gulp-clean-css"); // minify css
const purgecss = require("gulp-purgecss");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./shinobi/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(purgecss({ content: ["*.html"] }))
    .pipe(cleanCSS())
    .pipe(dest("./css"));
}

function buildWatch() {
  watch(["./shinobi/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, buildWatch);

// exports.buildStyles = buildStyles;
// exports.buildWatch = buildWatch;
