import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import {MaxLength, MinLength} from 'class-validator'

@Entity('contents')
export default class Users {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  @MinLength(2,{
    message : 'the title must be greater than or equal to 5 characters or less than 50 characters'
  })
  @MaxLength(50,{
    message : 'the title must be greater than or equal to 5 characters or less than 50 characters'
  })
  title: string;

  @Column() 
  link: string;

}