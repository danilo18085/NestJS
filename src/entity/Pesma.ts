import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Pesma
{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    naziv!: string

    @Column()
    godina!: number
}