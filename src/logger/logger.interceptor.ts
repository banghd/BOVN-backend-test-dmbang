import { FastifyReply, FastifyRequest } from 'fastify'
import * as morgan from 'morgan'
import * as os from 'os'
import { Observable } from 'rxjs'

import {
  CallHandler, ExecutionContext, Injectable, NestInterceptor,
} from '@nestjs/common'

morgan.token('actor-role', (req) => {
  const roles = req.session?.roles || []
  return Array.isArray(roles) ? roles.join(',') : roles
})
morgan.token('actor-id', (req) => (req.session?.sub || ''))
morgan.token('validity', (req) => (req.session ? (req.session.exp - Math.round(+new Date() / 1000)).toString() : ''))
morgan.token('hostname', () => os.hostname())
morgan.token('pid', () => process.pid.toString())
morgan.token('body', (req) => req.body)
morgan.token('user-ip', (req) => req.ip)
morgan.token('x-client-version', (req) => req.headers['x-client-version'])
morgan.token('x-client-variants', (req) => req.headers['x-client-variants'])
morgan.token('accept-language', (req) => req.headers['accept-language'])

const jsonFormat = (tokens, request, response) => {
  const req = request.httpRequest
  const res = response.httpResponse
  const body = tokens.body(req, res)
  if (body && body.password) {
    delete body.password
  }
  return JSON.stringify({
    remoteAddress: tokens['remote-addr'](request, response),
    time: tokens.date(req, res, 'iso'),
    method: tokens.method(req, res),
    url: tokens.url(req, res),
    httpVersion: tokens['http-version'](request, response),
    statusCode: tokens.status(request, response),
    contentLength: tokens.res(request, response, 'content-length'),
    responseTime: tokens['response-time'](request, response),
    referrer: tokens.referrer(request, response),
    userAgent: tokens['user-agent'](req, res),
    hostname: tokens.hostname(req, res),
    pid: tokens.pid(req, res),
    actorRole: tokens['actor-role'](req, res),
    actorId: tokens['actor-id'](req, res),
    validity: tokens.validity(req, res),
    userIp: tokens['user-ip'](req, res),
    clientVersion: tokens['x-client-version'](req, res),
    clientVariants: tokens['x-client-variants'](req, res),
    language: tokens['accept-language'](req, res),
    body,
  })
}

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<FastifyRequest>()
    const req: any = request.raw
    req.httpRequest = request

    const response = context.switchToHttp().getResponse<FastifyReply>()
    const res: any = response.raw
    res.httpResponse = response

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    morgan(jsonFormat)(req, res, () => {})

    return next.handle()
  }
}
