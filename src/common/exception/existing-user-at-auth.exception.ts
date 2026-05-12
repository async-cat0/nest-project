import { HttpException, HttpStatus } from '@nestjs/common';

export class ExistingUserAtAuthException extends HttpException {
    constructor() {
        super('User already exists', HttpStatus.CONFLICT);  
    }
}