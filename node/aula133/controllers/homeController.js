exports.pageHomeGet = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome"><br>
        Outro Campo: <input type="text" name="aquioutrocampo">
        <button>Olá mundo</button>
        </form>
    `);
};

exports.pageHomePost = (req, res) => {
    res.send('Ei sou sua nova rota de POST.');
};