import express from "express";

const router = express.Router();

//http://localhost:3000/hello
// VS
//http://localhost:3000/hello?name=Earth
router.get("/hello", (req, res) => {
    const {name = "World"} = req.query;

    res.status(200).send({message: `Hello, ${name}!`});
});


export default router;