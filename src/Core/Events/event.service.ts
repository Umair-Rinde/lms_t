import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Events } from './event.model';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Events)
    private readonly eventsModel: typeof Events,
  ) {}

  async findAll(): Promise<Events[]> {
    return this.eventsModel.findAll();
  }

  async findByPk(id: string): Promise<Events | null> {
    return this.eventsModel.findByPk(id);
  }

  async create(eventData: Partial<Events>): Promise<Events> {
    return this.eventsModel.create(eventData);
  }
  async update(id: string, eventData: Partial<Events>): Promise<number> {
    const [affectedCount] = await this.eventsModel.update(eventData, {
      where: { id },
    });
    if (affectedCount === 0) {
      throw new NotFoundException('Event not found');
    }
    return affectedCount;
  }

  async delete(id: string): Promise<number> {
    return this.eventsModel.destroy({
      where: { id },
    });
  }
}
