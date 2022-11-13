import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { NewUserDTO } from 'src/user/dtos/new-user.dto';
import { UserDetails } from 'src/user/user-details.interface';
@Injectable()
export class AuthService {
    constructor(private userService : UserService){

    }
    async hashPassword(password : string): Promise<string>{
        return bcrypt.hash(password,12);
    }
    async register(user:Readonly<NewUserDTO>):Promise<UserDetails | any>{
        const {name , email, password} = user;

        const ExistingUser = await this.userService.findByEmail(email);

        if(ExistingUser) return 'Email Taken!';

        const hassedPassword = await this.hashPassword(password);
        const newUser = await this.userService.create(name,email,hassedPassword);
        return this.userService._getUserDetails(newUser); 
    }
}
