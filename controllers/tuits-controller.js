import posts from "./tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    tuits.push(newTuit);
    res.json(newTuit);
}

const findAllTuits = (req, res) =>
    res.json(tuits);

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    tuits = tuits.map(t => t._id === tuitdIdToUpdate ? updatedTuit : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    tuits = tuits.filter(t => t._id !== tuitdIdToDelete);
    res.sendStatus(200);
}

const createTuitByUser = (req, res) => {
    const userId = req.params['uid'];
    let newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.postedBy = userId;
    tuits.push(newTuit);
    res.json(newTuit);
}

const findTuitsByUser = (req, res) => {
    const userId = req.params['uid'];
    const tuitsByUser = tuits
        .filter(tuit => tuit.postedBy === userId);
    res.json(tuitsByUser);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    app.post('/api/users/:uid/tuits', createTuitByUser)
    app.get('/api/users/:uid/tuits', findTuitsByUser)
}
