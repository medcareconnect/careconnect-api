import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Patient {

    @PrimaryGeneratedColumn()
    id: string; 

    @Column()
    name: string;

    @Column()
    state: string;
}