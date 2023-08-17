const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglyfy = require("gulp-uglify");
const imagemin = require("gulp-imagemin");

function comprimeImage() {
  console.log("hello");
  return gulp
    .src("./source/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./build/images"));
}

function comprimeJavaScript() {
  return gulp
    .src("./source/scripts/*.js")
    .pipe(uglyfy())
    .pipe(gulp.dest("./build/scripts"));
}

function compileSass() {
  return gulp
    .src("./source/styles/main.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .pipe(sourcemaps.write("./maps"))
    .pipe(gulp.dest("./build/styles"));
}

exports.default = function () {
  gulp.watch(
    "./source/styles/main.scss",
    { ignoreInitial: false },
    gulp.series(compileSass)
  );
  gulp.watch(
    "./source/scripts/*.js",
    { ignoreInitial: false },
    gulp.series(comprimeJavaScript)
  );
  gulp.watch(
    "./source/images/*",
    { ignoreInitial: false },
    gulp.series(comprimeImage)
  );
};
