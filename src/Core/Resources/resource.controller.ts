import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { Resource } from './resource.model';

@Controller('resources')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Get()
  async findAll(): Promise<Resource[]> {
    return this.resourceService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Resource> {
    const resource = await this.resourceService.findById(id);
    if (!resource) {
      throw new NotFoundException('Resource not found');
    }
    return resource;
  }

  @Post()
  async create(@Body() createResourceDto: Resource): Promise<Resource> {
    return this.resourceService.create(createResourceDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateResourceDto: Resource): Promise<Resource> {
    await this.findById(id); // Check if resource exists
    return this.resourceService.update(id, updateResourceDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.findById(id); // Check if resource exists
    await this.resourceService.delete(id);
  }
}
