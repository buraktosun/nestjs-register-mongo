import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
export type UserDocument = User & Document;


@Schema() 
export class User{
    @Prop({require : true})
    name:String;
    @Prop({require : true, unique : true})
    email:String;
    @Prop({require : true})
    password:String;
    static _id: string;
    static _name: string;
    static _email: string;
    static _password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);