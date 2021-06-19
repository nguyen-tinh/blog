class SignupController {
    // [GET] /signup
    index(req, res) {
        res.render('signup');
    }
}

module.exports = new SignupController();
