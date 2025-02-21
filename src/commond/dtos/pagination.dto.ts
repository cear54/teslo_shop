import { Optional } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsPositive, Min } from "class-validator";

export class PaginationDto {


    @IsPositive()
    @Type(() => Number)
    @Optional()
    limit?: number;

    @IsPositive()
    //@Min(0)
    @Type(() => Number)
    @Optional()
    offset?: number;
}