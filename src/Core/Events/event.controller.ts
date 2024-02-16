import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { Events } from './event.model';
import { EventsService } from './event.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  async findAll(): Promise<Events[]> {
    return this.eventsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Events> {
    const event = await this.eventsService.findByPk(id);
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  @Post()
  async create(@Body() eventData: Partial<Events>): Promise<Events> {
    return this.eventsService.create(eventData);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() eventData: Partial<Events>): Promise<void> {
    const affectedCount = await this.eventsService.update(id, eventData);
    if (affectedCount === 0) {
      throw new NotFoundException('Event not found');
    }
  }


  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    const rowsAffected = await this.eventsService.delete(id);
    if (rowsAffected === 0) {
      throw new NotFoundException('Event not found');
    }
  }
}
