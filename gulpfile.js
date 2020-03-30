var gulp = require('gulp');
//var sass = require('gulp-sass'); //Sassコンパイル
//var sassGlob = require('gulp-sass-glob'); //@importの記述を簡潔にする
//var sourcemaps = require('gulp-sourcemaps');
//var plumber = require('gulp-plumber'); //エラー時の強制終了を防止
//var notify = require('gulp-notify'); //エラー発生時にデスクトップ通知する
//var ssi = require('browsersync-ssi');
//var postcss = require('gulp-postcss'); //autoprefixerとセット
//var autoprefixer = require('autoprefixer'); //ベンダープレフィックス付与
var browserSync = require('browser-sync'); //ブラウザ反映
//var cssdeclsort = require('css-declaration-sorter'); //css並べ替え
//var imagemin = require('gulp-imagemin');
//var ejs = require("gulp-ejs");
//var rename = require("gulp-rename"); //.ejsの拡張子を変更

//scssのコンパイル
//gulp.task('sass', function () {
//	return gulp.src('./*scss', {
//		base: './'
//	})
//		.pipe(sourcemaps.init({
//			loadMaps: true
//		}))
//		.pipe(plumber({
//			errorHandler: notify.onError("Error: <%= error.message %>")
//		})) //エラーチェック
//		//.pipe(sassGlob()) //importの読み込みを簡潔にする
//		.pipe(sass({
//			outputStyle: 'expanded' //expanded, nested, campact, compressedから選択
//		}))
//		.pipe(postcss([cssdeclsort({
//			order: 'smacss'
//		})])) //プロパティをソートし直す(SMACSS)
//		.pipe(postcss([autoprefixer({
////				browsers: ["last 2 versions", "ie >= 11", "Android >= 4"],
//				cascade: false,
//				grid:true
//			})]))
//		.pipe(sourcemaps.write('./mapFiles'))
//		.pipe(gulp.dest('./'))
//});

//保存時のリロード
gulp.task('browser-sync', function () {
	browserSync.init({
		proxy: "192.168.10.103/"
	});
});

gulp.task('bs-reload', function (done) {
	browserSync.reload();
	done();
});

// 監視
gulp.task('watch', function (done) {
	//gulp.watch('./*.scss', gulp.task('sass')); //sassが更新されたらgulp sassを実行
	gulp.watch('./*.css', gulp.task('bs-reload')); //sassが更新されたらbs-reloadを実行
	gulp.watch('./js/*.js', gulp.task('bs-reload')); //jsが更新されたらbs-relaodを実行
	gulp.watch('./*.html', gulp.task('bs-reload'));
	gulp.watch('./*.php', gulp.task('bs-reload'));
});

// default
gulp.task('default', gulp.series(gulp.parallel('browser-sync', 'watch')));
