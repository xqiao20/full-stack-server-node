import * as tuitsDao from "../tuit/tuits-dao.js";

const createTuit = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await tuitsDao.createTuit(newTuit);
    res.json(insertedTuit);
}


const findAllTuits = async (req, res) => {
    const tuits = await tuitsDao.findAllTuits()
    res.json(tuits);
}

const updateTuit = async (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updatedTuit = req.body;
    const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
    res.send(status)
}

const deleteTuit = async (req, res) => {
    const tuitdIdToDelete = req.params.tid;
    const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
    res.send(status);
}


// const createTuitByUser = (req, res) => {
//     const userId = req.params['uid'];
//     let newTuit = req.body;
//     newTuit._id = (new Date()).getTime()+'';
//     newTuit.postedBy = userId;
//     tuits.push(newTuit);
//     res.json(newTuit);
// }
//
// const findTuitsByUser = (req, res) => {
//     const userId = req.params['uid'];
//     const tuitsByUser = tuits
//         .filter(tuit => tuit.postedBy === userId);
//     res.json(tuitsByUser);
// }

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findAllTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
    // app.post('/api/users/:uid/tuits', createTuitByUser)
    // app.get('/api/users/:uid/tuits', findTuitsByUser)
}
