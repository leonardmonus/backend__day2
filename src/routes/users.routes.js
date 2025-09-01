import express from "express";

const router = express.Router();

// Path params: /users/123
router.get("/users/:id", (req, res) => {
    const {id} = req.params;
    res.status(200).send({id, info: `User #${id}`});
});

// Query params: /users?age=20&city=Berlin
router.get("/users", (req, res) => {
    const {age, city} = req.query;
    res.status(200).send({filter: {age, city}, data: []});
});

export default router;