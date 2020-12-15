import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import {IsEmail} from 'class-validator'

@Entity('users')
export default class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  password : string
}