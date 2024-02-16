import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Events } from "./event.model";
import { EventsController } from "./event.controller";
import { EventsService } from "./event.service";

@Module({
    imports:[SequelizeModule.forFeature([Events])],
    controllers:[EventsController],
    providers:[EventsService]
})
export class EventModule{}