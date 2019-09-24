import gulp from "gulp"
import themes from "./gulp-tasks/themes"
import schemes from "./gulp-tasks/schemes"
import icons from "./gulp-tasks/icons"

gulp.task("themes", () => {
    themes()
})

gulp.task("schemes", () => {
    schemes()
})

gulp.task("icons", () => {
    icons()
})

gulp.task("default", () => {
    themes()
    schemes()
    icons()
})
