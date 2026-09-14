import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Token
{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    id_admina!: number

    @Column()
    vrednost_tokena!: string

    @Column({ type: 'timestamp' })
    vreme_isteka!: Date

}