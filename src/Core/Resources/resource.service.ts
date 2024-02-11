import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Resource } from './resource.model';

@Injectable()
export class ResourceService {
  constructor(
    @InjectModel(Resource)
    private readonly resourceModel: typeof Resource,
  ) {}

  async findAll(): Promise<Resource[]> {
    return this.resourceModel.findAll();
  }

  async findById(id: string): Promise<Resource | null> {
    return this.resourceModel.findByPk(id);
  }

  async create(createResourceDto:Partial <Resource>): Promise<Resource> {
    return this.resourceModel.create(createResourceDto);
  }

  async update(id: string, updateResourceDto: Resource): Promise<Resource> {
    await this.resourceModel.update(updateResourceDto, {
      where: { id },
    });
    return this.findById(id);
  }

  async delete(id: string): Promise<void> {
    await this.resourceModel.destroy({
      where: { id },
    });
  }
}
