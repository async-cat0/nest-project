import { Response } from 'express';

export interface RequestWithCookies extends Response {
  cookies: {
    access_token?: string;
  };
}
