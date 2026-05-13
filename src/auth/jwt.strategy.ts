import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { RequestWithCookies } from '../common/types/RequestWithCookies';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error('JWT_SECRET is not defined');
    }

    super({
      jwtFromRequest: (req: RequestWithCookies): string | null => {
        return req.cookies.access_token ?? null;
      },
      ignoreExpiration: false,
      secretOrKey: jwtSecret,
    });
  }

  //payload - расскодированный jwt
  validate(payload: { sub: number; email: string }) {
    return { userId: payload.sub, email: payload.email };
  }
}
