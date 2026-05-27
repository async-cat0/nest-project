import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import type { Request } from 'express';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    // const jwtSecret = process.env.JWT_SECRET;
    // console.log(jwtSecret);
    // if (!jwtSecret) {
    //   throw new Error('JWT_SECRET is not defined');
    // }

    super({
      jwtFromRequest: (req: Request): string | null => {
        return req?.cookie?.access_token ?? null;
      },
      ignoreExpiration: false,
      secretOrKey: 'artyomsacha',
    });
  }

  //payload - расскодированный jwt
  validate(payload: { sub: number; email: string }) {
    return { userId: payload.sub, email: payload.email };
  }
}
