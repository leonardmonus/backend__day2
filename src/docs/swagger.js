import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
        description: 'API documentation for My API',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Development server',
        },
    ],
}

const apis = ['src/index.js']

export const swaggerSpec = swaggerJSDoc({
    definition: swaggerDefinition,
    apis
})