const getUser = (req, res) => {
    let user = {name: 'Marcela', lastName: 'Barajas', status: 'Active'};
    res.send(user);
};

module.exports = { getUser };