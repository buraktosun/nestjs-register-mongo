import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { UserDetails } from './user-details.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @UseGuards(JwtGuard)
    @Get(':id')
    getUser(@Param('id') email : string):Promise<UserDetails | null>{
        return this.userService.findById(email);
    }
    
}
