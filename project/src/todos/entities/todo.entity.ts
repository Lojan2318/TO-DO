import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Schedule')
export class Todo {
  @PrimaryGeneratedColumn() id: number;
  @Column() Description: string;
  @Column() Deadline: string;
  @Column() Status: string;
}
