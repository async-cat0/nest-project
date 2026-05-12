import { Body, Controller,Post,Req, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto, RegisterDto } from "./dto";
import type { Request, Response } from "express";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }
}