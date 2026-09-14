import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Tiket
{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    kupac!: string

    @Column()
    broj_igrica!: number

    @Column()
    email_adresa!: string

    @Column()
    nacin_placanja!: string

    @Column()
    adresa_isporuke!: string

    @Column('float')
    ukupna_cena!: number

}