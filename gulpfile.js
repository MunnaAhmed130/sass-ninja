const { src, dest, watch, series } = require("gulp");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return (
    src("./shinobi/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      // .pipe(cleanCSS())
      .pipe(dest("./css"))
  );
}

function buildWatch() {
  watch(["./shinobi/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, buildWatch);

// exports.buildStyles = buildStyles;
// exports.buildWatch = buildWatch;
