import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsNumber, MinLength, Min, IsDefined } from 'class-validator'
import {ApiModelProperty} from "@nestjs/swagger/dist/decorators/api-model-property.decorator";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;
    @ApiModelProperty()
    @Column()
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength(2, { always: true })
    name: string;

    @Column()
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength(3, { always: true })
    @ApiModelProperty()
    sku: string;

    @Column()
    @IsNumber()
    @Min(0, { always: true })
    @ApiModelProperty()
    price: number;
}
