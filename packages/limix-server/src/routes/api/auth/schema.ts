import { FastifySchema } from 'fastify'

export const registerSchema: FastifySchema = {
  body: {
    type: 'object',
    properties: {
      username: { type: 'string' },
      password: { type: 'string' },
    },
  },
  response: {
    200: {
      type: 'object',
      properties: {
        token: { type: 'string' },
      },
      example: {
        token: 'Splatoon3',
      },
    },
  },
}

export const loginSchema = {
  body: {
    type: 'object',
    properties: {
      username: { type: 'string' },
      password: { type: 'string' },
    },
  },
}
