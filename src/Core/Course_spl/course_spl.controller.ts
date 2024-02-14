import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { CourseSpecializationService } from './course_spl.service';
import { CourseSpecialization } from './course_spl.model';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('course-specializations')
export class CourseSpecializationController {
  constructor(
    private readonly courseSpecializationService: CourseSpecializationService,
  ) {}

  @Get()
  findCourse_spl(): Promise<CourseSpecialization[]> {
    return this.courseSpecializationService.findCOurse_spl();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<CourseSpecialization | null> {
    return this.courseSpecializationService.findById(id);
  }

  @Post()
  create(
    @Body() createSpecializationDto: Partial<CourseSpecialization>,
  ): Promise<CourseSpecialization> {
    return this.courseSpecializationService.create(createSpecializationDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateSpecializationDto: CourseSpecialization,
  ): Promise<CourseSpecialization> {
    return this.courseSpecializationService.update(id, updateSpecializationDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.courseSpecializationService.delete(id);
  }

  @Post(':id/add-category/:categoryId')
  addCategoryToSpecialization(
    @Param('id') id: string,
    @Param('categoryId') categoryId: string,
  ): Promise<CourseSpecialization | null> {
    return this.courseSpecializationService.addCategoryToSpecialization(
      id,
      categoryId,
    );
  }
  @Delete(':id/delete-category/:categoryId')
  async deleteCategoryFromSpecialization(
    @Param('id') specializationId: string,
    @Param('categoryId') categoryId: string,
  ): Promise<void> {
    await this.courseSpecializationService.deleteCategory(
      specializationId,
      categoryId,
    );
  }

  @Put(':id/update-category/:oldCategoryId/:newCategoryId')
  async updateCategoryInSpecialization(
    @Param('id') specializationId: string,
    @Param('oldCategoryId') oldCategoryId: string,
    @Param('newCategoryId') newCategoryId: string,
  ): Promise<void> {
    await this.courseSpecializationService.updateCategory(
      specializationId,
      oldCategoryId,
      newCategoryId,
    );
  }

  @Post('upload-course')
  @UseInterceptors(FilesInterceptor('courseFile'))
  courseAdd(@UploadedFiles() courseFile:Express.Multer.File):object{
    console.log(courseFile)
    return{
      message:"File uploaded sucessfully"
    }
  }
}
