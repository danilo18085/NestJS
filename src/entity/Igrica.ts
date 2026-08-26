import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Igrica
{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    ime!: string

    @Column()
    zanr!: string

    @Column()
    godina!: number

    @Column('float')
    rating!: number

    @Column()
    popust!: number

    @Column('float')
    osnovna_cena!: number
}