import { IsNumber, IsOptional, IsPositive, Min } from "class-validator";

export class PaginationDto {
  @IsNumber()
  @IsOptional()
  @IsPositive()
  offset?: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  @Min(1)
  limit?: number;

}