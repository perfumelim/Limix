import { FastifyPluginAsync } from 'fastify'
import fp from 'fastify-plugin'
import jwt from 'jsonwebtoken'
import { AccessTokenPayload, validateToken } from '../lib/tokens'

const { JsonWebTokenError } = jwt

const authPluginAsync: FastifyPluginAsync = async (fastify) => {
  fastify.decorateRequest('user', {
    id: 1,
    username: 'perfume',
  })
  fastify.addHook('preHandler', async (request) => {
    const { authorization } = request.headers
    if (!authorization || !authorization?.includes('Bearer')) {
      return
    }
    const token = authorization.split('Bearer ')[1]
    try {
      const decoded = await validateToken<AccessTokenPayload>(token)
      console.log(decoded)
    } catch (e: any) {
      if (e instanceof JsonWebTokenError) {
        if (e.name === 'TokenExpiredError') {
          console.log('handle token expired')
        }
      }
      console.log(e)
    }
  })
}

export const authPlugin = fp(authPluginAsync, {
  name: 'authPlugin',
})

declare module 'fastify' {
  interface FastifyRequest {
    user: {
      id: number
      username: string
    } | null
  }
}
