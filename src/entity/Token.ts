import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity()
export class Token
{
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    username_admina!: string

    @Column()
    vrednost_tokena!: string

    @Column({ type: 'timestamp' })
    vreme_isteka!: Date

}