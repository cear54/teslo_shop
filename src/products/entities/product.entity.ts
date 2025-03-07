import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProductImagen } from "./product_imagen_entity";

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

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
        type: 'simple-array',
        //array: true,
    })
    sizes: string[];

    @Column({ type: 'varchar' })
    genero: string;

    @Column({
        type: 'varchar',
    })
    tags: string[];

    // imagenes
    @OneToMany(
        () => ProductImagen,
        productoImagen => productoImagen.producto,
        { cascade: true, eager: true }
    )
    imagenes?: ProductImagen[];



    @BeforeInsert()
    checkSlugBeforeInsert() {
        if (!this.slug) this.slug = this.titulo;

        this.slug = this.slug
            .toLowerCase()
            .replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?/\s/]/g, '_');
    }

    @BeforeUpdate()
    checkSlugUpdate() {
        this.slug = this.slug
            .toLowerCase()
            .replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?/\s/]/g, '_');
    }
}




