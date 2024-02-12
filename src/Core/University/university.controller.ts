import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException } from '@nestjs/common';
import { UniversityService } from './university.service';
import { University } from './university.model';

@Controller('universities')
export class UniversityController {
  constructor(private readonly universityService: UniversityService) {}

  @Get()
  async findAll(): Promise<University[]> {
    return this.universityService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<University> {
    const university = await this.universityService.findById(id);
    if (!university) {
      throw new NotFoundException('University not found');
    }
    return university;
  }

  @Post()
  async create(@Body() createUniversityDto: University): Promise<University> {
    return this.universityService.create(createUniversityDto);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUniversityDto: University): Promise<University> {
    await this.findById(id); // Check if university exists
    return this.universityService.update(id, updateUniversityDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.findById(id); // Check if university exists
    await this.universityService.delete(id);
  }
}
