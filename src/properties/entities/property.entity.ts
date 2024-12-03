import { ContactHour } from "src/contact-hour/entities/contact-hour.entity";
import { ContractType } from "src/contract-type/entities/contract-type.entity";
import { PropertiesType } from "src/properties-type/entities/properties-type.entity";
import { PropertyImg } from "src/property-img/entities/property-img.entity";
import { UserProfile } from "src/user-profile/entities/user-profile.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Property {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    address: string;

    @Column()
    price: number;

    @Column()
    description: string;

    @OneToOne(() => ContractType, (contractType) => contractType.property)
    contractType: ContractType;

    @OneToOne(() => PropertiesType, (propertiesType) => propertiesType.properties)
    propertiesType: PropertiesType

    @OneToOne( () => ContactHour, (contactHour) => contactHour.property)
    contactHour: ContactHour;

    @OneToMany( () => PropertyImg, (propertyImg) => propertyImg.property)
    propertyImg: PropertyImg;

    @ManyToOne( () => UserProfile, (userProfile) => userProfile.property)
    userProfile: UserProfile;

    @Column({ default : true })
    state: boolean

}
