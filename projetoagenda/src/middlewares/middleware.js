exports.middlewareGlobal = (req, res, next) => {
    res.locals.varialLocal = 'Valor da variável local.',
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};

exports.checkCsrfErro = (err, req, res, next) => {
    if(err && 'EBADCSRFTOKEN' === err.code) {
        return res.render('404');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}