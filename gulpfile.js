"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var server = require("browser-sync").create();
var webp = require("gulp-webp");
var pug = require('gulp-pug');
var htmlmin = require("gulp-htmlmin");
var uglify = require("gulp-uglifyjs");
var del = require("del");
var run = require("run-sequence");

gulp.task("style", function() {
  gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(postcss([
      autoprefixer({
        cascade: false
      })
    ]))
    // .pipe(gulp.dest("source/css"))
    // .pipe(minify())
    // .pipe(rename("style.min.css"))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("images", function() {
  gulp.src("source/img/**/*.{jpg,png,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"))
});

gulp.task('pug', function() {
  return gulp.src("source/pug/pages/*.pug")
      .pipe(pug({
        pretty: true
      }))
      .pipe(gulp.dest("source"))
      .pipe(server.stream());
});

gulp.task("webp", function() {
  gulp.src("source/img/**/*.{jpg,png}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"))
});

gulp.task("sprite", function() {
    gulp.src("source/img/sprite-svg/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("source/img"))
});

gulp.task("minifyhtml", function() {
  return gulp.src("source/*.html")
    .pipe(gulp.dest("build"));
});

gulp.task("uglify", function() {
  gulp.src("source/js/main.js")
    .pipe(uglify())
    .pipe(rename("main.min.js"))
    .pipe(gulp.dest("source/js"))
});

gulp.task("clean", function() {
  del("build");
});

gulp.task("copy", function() {
  gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/*.html"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("serve", ["style", "pug"], function() {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", ["style"]);
  gulp.watch("source/pug/pages/*.pug", ["pug"]);
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("build", function(done) {
  run(
    "clean",
    "copy",
    "style",
    "sprite",
    "uglify",
    done
  );
});
