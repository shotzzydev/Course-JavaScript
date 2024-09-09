exports.middlewareGlobal = (req, res, next) => {
    res.locals.varialLocal = 'Valor da variável local.',
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};