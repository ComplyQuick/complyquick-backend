-- DropForeignKey
ALTER TABLE "CourseProperties" DROP CONSTRAINT "CourseProperties_courseId_fkey";

-- AddForeignKey
ALTER TABLE "CourseProperties" ADD CONSTRAINT "CourseProperties_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE CASCADE;
