module.exports = µFactory();

function µFactory() {
    return { send, render };
}

function send(cb) {
    return async (req, res) => {
        try {
            const value = await cb(req, res);
            res.send(value);
        } catch (error) {
            console.error(error);
            res.send(error);
        }
    };
}


function render({ title = "MyVIE", message = "" }) {
    return (_, res) => { res.render('index', { title, message }); }
}