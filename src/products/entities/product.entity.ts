import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: String;

    @Column('varchar', { unique: true })
    titulo: string

    // @Column('numeric(10,0)', { default: 0 })
    // precio: number

    @Column({ type: 'float', precision: 10, scale: 2, default: 0.00 })
    precio: number;

    @Column({
        type: 'varchar',
        nullable: true
    })
    descripcion: string;

    @Column({
        type: "varchar",
        unique: true,
    })
    slug: string;

    @Column({ type: 'int', default: 0 })
    stock: number;

    @Column({
        type: 'varchar',
        //array: true,
    })
    sizes: string[];

    @Column({ type: 'varchar' })
    genero: string;

    // tags
    // imagenes

    @BeforeInsert()
    checkSlugBeforeInsert() {
        if (!this.slug) this.slug = this.titulo;

        this.slug = this.slug
            .toLowerCase()
            .replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?/\s/]/g, '_');
    }

    // BeforUpdate()


}
