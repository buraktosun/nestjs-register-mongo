import { Body, Controller, Post } from '@nestjs/common';
import { userInfo } from 'os';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){

    }
    
    @Post('register')
    register(@Body() user: NewUserDTO):Promise<UserDetails | null>{
        return this.authService.register(user);
    } 

}