exports.pageHomeGet = (req, res) => {
    res.render('index', {
        titulo: 'Este e o titulo da página',
    });
    return;
};

exports.pageHomePost = (req, res) => {
    res.send(req.body);
    return;
};