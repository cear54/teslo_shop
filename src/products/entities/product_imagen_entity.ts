import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./product.entity";

@Entity()
export class ProductImagen {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        nullable: false
    })
    url: string;

    @ManyToOne(
        () => Product,
        (producto) => producto.imagenes,
        { onDelete: 'CASCADE' }
    )
    producto: Product
}