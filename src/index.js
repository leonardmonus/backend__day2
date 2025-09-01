import express from "express";
import HelloRoutes from "./routes/hello.routes.js";
import UsersRoutes from "./routes/users.routes.js";
import {requestLogger} from "./middlewares/logger.js";
import {errorHandler} from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json()); // body parser for JSON

// Use logger as the first middleware
app.use(requestLogger);

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).send({status: "ok", uptime: process.uptime()});
});

app.use(HelloRoutes);
app.use(UsersRoutes)

// Error handling middleware (should be the last one)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});