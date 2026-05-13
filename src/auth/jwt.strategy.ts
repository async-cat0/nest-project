import { Injectable, Request } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: (req: Request) => req?.cookie?.access_token,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  //payload - расскодированный jwt
  validate(payload: { sub: number; email: string }) {
    return { userId: payload.sub, email: payload.email };
  }
}
