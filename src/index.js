import express from "express";
import HelloRoutes from "./routes/hello.routes.js";
import UsersRoutes from "./routes/users.routes.js";
import {requestLogger} from "./middlewares/logger.js";
import {errorHandler} from "./middlewares/errorHandler.js";
import swaggerUi from "swagger-ui-express";
import {swaggerSpec} from "./docs/swagger.js";

const app = express();
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use(express.json()); // body parser for JSON

// Use logger as the first middleware
app.use(requestLogger);

// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).send({status: "ok", uptime: process.uptime()});
});


/**
 * @openapi
 * /ping:
 *   get:
 *     summary: Simple liveness endpoint
 *     tags:
 *       - Health
 *     responses:
 *       200:
 *         description: Pong response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 pong:
 *                   type: boolean
 *                   example: true
 */
app.get("/ping", (req, res) => {
    res.status(200).json({
        pong: true
    })
})

app.use(HelloRoutes);
app.use(UsersRoutes)

// Error handling middleware (should be the last one)
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API running at http://localhost:${PORT}`);
});