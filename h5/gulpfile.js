const gulp = require("gulp");
const server = require("gulp-webserver");
gulp.task("webser", () => {
    return gulp.src("./src/")
        .pipe(server({
            host: "169.254.19.145",
            port: 8086,
            open: true,
            livereload: true,
            proxies: [
                { source: "/getincome", target: "http://localhost:3000/getincome" }, //查询come
                { source: "/addcome", target: "http://localhost:3000/addcome" },
                { source: "/del", target: "http://localhost:3000/del" },
                { source: "/addpay", target: "http://localhost:3000/addpay" },
                { source: "/getpay", target: "http://localhost:3000/getpay" }, //查询pay
                { source: "/dels", target: "http://localhost:3000/dels" }
            ]
        }))
})