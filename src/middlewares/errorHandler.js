export const errorHandler = (err, req, res, next) => {
    console.error("ERROR:", err.message);
    res.status(500).send({error: "Internal Server Error"});

    next();
}