import { Optional } from "@nestjs/common";
import { Type } from "class-transformer";
import { IsPositive, Min } from "class-validator";

export class PaginationDto {

    @Optional()
    @IsPositive()
    @Type(() => Number)
    limit?: number;

    @Optional()
    @Type(() => Number)
    @Min(0)
    offset?: number;
}