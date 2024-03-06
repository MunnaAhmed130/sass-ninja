const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("./*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./css"));
}

function buildWatch() {
  watch(["./*.scss"], buildStyles);
}

exports.default = series(buildStyles, buildWatch);
// exports.buildStyles = buildStyles;
// exports.buildWatch = buildWatch;
