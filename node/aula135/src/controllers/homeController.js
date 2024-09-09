exports.pageHomeGet = (req, res) => {
    res.render('index');
};

exports.pageHomePost = (req, res) => {
    res.send('Ei sou sua nova rota de POST.');
};