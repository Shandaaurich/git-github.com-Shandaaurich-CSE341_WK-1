const shandaRoute = (req, res) => {
    res.send('Shanda Aurich');
};

const calypsoRoute = (req, res) => {
    res.send('Calypso');
};

module.exports = {
    shandaRoute,
    calypsoRoute
};