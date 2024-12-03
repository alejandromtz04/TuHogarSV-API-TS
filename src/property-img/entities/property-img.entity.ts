
import { Property } from 'src/properties/entities/property.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class PropertyImg {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    URLImg: string;

    @ManyToOne( () => Property, (property) => property.propertyImg)
    property: Property
    
    @Column({ default: true })
    State: boolean;
}
