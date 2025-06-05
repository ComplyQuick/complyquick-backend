import { Request, Response } from 'express';
import { prisma } from '../index';
import { uploadToGoogleDrive } from '../services/google-drive.service';

// Delete a tenant
export const deleteTenant = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Delete all related records first
    await prisma.$transaction([
      // Delete all users associated with the tenant
      prisma.user.deleteMany({
        where: { tenantId: id }
      }),
      // Delete all courses associated with the tenant
      prisma.tenantCourse.deleteMany({
        where: { tenantId: id }
      }),
      // Delete tenant details
      prisma.tenantDetails.deleteMany({
        where: { tenantId: id }
      }),
      // Finally delete the tenant
      prisma.tenant.delete({
        where: { id }
      })
    ]);

    res.json({ message: 'Tenant and all associated data deleted successfully' });
  } catch (error) {
    console.error('Error deleting tenant:', error);
    res.status(500).json({ 
      error: 'Failed to delete tenant',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Delete a course
export const deleteCourse = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    // Delete all related records first
    await prisma.$transaction([
      // Delete all enrollments
      prisma.enrollment.deleteMany({
        where: { courseId: id }
      }),
      // Delete all tenant course assignments
      prisma.tenantCourse.deleteMany({
        where: { courseId: id }
      }),
      // Delete all MCQs
      prisma.mCQ.deleteMany({
        where: { courseId: id }
      }),
      // Delete all slide explanations
      prisma.slideExplanation.deleteMany({
        where: { courseId: id }
      }),
      // Finally delete the course
      prisma.course.delete({
        where: { id }
      })
    ]);

    res.json({ message: 'Course and all associated data deleted successfully' });
  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({ error: 'Failed to delete course' });
  }
};

// Update a course
export const updateCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    title,
    description,
    tags,
    learningObjectives
  } = req.body;

  try {
    // Get existing course to check if it exists
    const existingCourse = await prisma.course.findUnique({
      where: { id }
    });

    if (!existingCourse) {
      res.status(404).json({
        error: 'Course not found',
        details: `No course found with id: ${id}`
      });
      return;
    }

    // If there's a new course material file, upload it
    let materialUrl;
    if (req.file) {
      try {
        materialUrl = await uploadToGoogleDrive(
          req.file.buffer,
          `${title || existingCourse.title}-${req.file.originalname}`
        );
      } catch (uploadError) {
        console.error('Error uploading file:', uploadError);
        res.status(500).json({
          error: 'Failed to upload course material',
          details: uploadError instanceof Error ? uploadError.message : 'Unknown error'
        });
        return;
      }
    }

    // Update course with new data
    const updatedCourse = await prisma.course.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(description && { description }),
        ...(tags && { tags }),
        ...(learningObjectives && { learningObjectives }),
        ...(materialUrl && { materialUrl }),
        updatedAt: new Date()
      }
    });

    res.json({
      message: 'Course updated successfully',
      course: updatedCourse
    });
  } catch (error) {
    console.error('Error updating course:', error);
    res.status(500).json({ 
      error: 'Failed to update course',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}; 