import { IsEnum, IsOptional } from "class-validator";
import { PaginationDto } from "src/common";
import { OrderStatusList } from "../enum/order.enum";
import { OrderStatus } from "@prisma/client";

export class OrderPaginationDto extends PaginationDto {
    @IsEnum(OrderStatusList, {
        message: `Invalid Order Status, only valid: ${ OrderStatusList }`
    })
    @IsOptional()
    status: OrderStatus;
}