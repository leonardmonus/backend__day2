export const requestLogger = (req, _res, next) => {
    console.log(`${req.method} ${req.path}`, {
        query: Object.fromEntries(Object.entries(req.query)),
        params: req.params || {},
        body: req.body || {},
        time: new Date().toISOString()
    });
    next();
};