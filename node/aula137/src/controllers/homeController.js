exports.pageHomeGet = (req, res) => {
    res.render('index');
    return;
};

exports.pageHomePost = (req, res) => {
    res.send(req.body);
    return;
};