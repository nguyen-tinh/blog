const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
const loginRouter = require('./login');
const signupRouter = require('./signup');

function route(app) {
    app.use('/login', loginRouter);

    app.use('/signup', signupRouter);

    app.use('/news', newsRouter);

    app.use('/me', meRouter);

    app.use('/courses', coursesRouter);

    app.use('/', siteRouter);

}

module.exports = route;
