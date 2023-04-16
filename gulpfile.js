// gulpプラグインの読み込み
const gulp = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require('sass'));
// style.scssタスクを作成する
gulp.task("default", function() {
  // style.scssファイルを取得
  return (
    gulp
      .src("common.scss")
      // Sassファイルのコンパイルを実行
      .pipe(sass())
      // cssファイル以下に保存
      .pipe(gulp.dest("css"))
); });