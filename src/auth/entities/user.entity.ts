import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text', { unique: true })
    email: string;

    @Column('text', { select: false })
    password: string;

    @Column('text')
    fulName: string;

    @Column('bool', { default: true })
    isActive: boolean;

    @Column('text', { default: 'user' })
    roles: string[];

}
