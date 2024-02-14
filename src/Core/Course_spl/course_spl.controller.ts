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

  @Post(':id/add-categories')
  async addCategoriesToSpecialization(
    @Param('id') specializationId: string,
    @Body() body: { categoryIds: string[] },
  ) {
    const { categoryIds } = body;
    const specialization = await this.courseSpecializationService.addCategoryToSpecialization(specializationId, categoryIds);
    if (!specialization) {
      return { message: 'Failed to add categories to specialization' };
    }
    return { specialization };
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

  @Put(':id/update-category/updateCategory')
async updateCategoryInSpecialization(
  @Param('id') specializationId: string,
  @Body() body: { newCategoryId: string[] },
): Promise<void> {
  const { newCategoryId } = body;
  await this.courseSpecializationService.addCategoryToSpecialization(
    specializationId,
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
