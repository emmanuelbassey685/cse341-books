import { writeFileSync } from 'node:fs';

import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Books API',
      version: '1.0.0',
      description: 'A simple API for working with books'
    },
    servers: [
      {
        url: '/',
        description: 'Current server'
      }
    ],
    components: {
      schemas: {
        Book: {
          type: 'object',
          required: [
            'id',
            'authorId',
            'title',
            'publicationDate'
          ],
          properties: {
            id: {
              type: 'string',
              example: 'b1'
            },
            authorId: {
              type: 'string',
              example: 'a1'
            },
            title: {
              type: 'string',
              example: 'Patterns of Light'
            },
            publicationDate: {
              type: 'string',
              example: '2021-08-17'
            }
          }
        }
      }
    }
  },
  apis: ['./src/router.js', './app.js']
};

const swaggerSpec = swaggerJsdoc(options);

writeFileSync('./swagger.json', JSON.stringify(swaggerSpec, null, 2));

console.log('Swagger documentation generated.');