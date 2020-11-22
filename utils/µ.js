module.exports = µFactory();

function µFactory() {
    return { send };
}

function send(cb) {
    return async (req, res) => {
        try {
            const value = await cb(req, res);
            res.send(value);
        } catch (error) {
            res.send(error);
        }
    };
}
