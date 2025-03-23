const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API com JWT',
      version: '1.0.0',
      description: 'API com autenticação JWT e Swagger'
    }
  },
  apis: ['routes.js']
};

module.exports = swaggerJsDoc(swaggerOptions);