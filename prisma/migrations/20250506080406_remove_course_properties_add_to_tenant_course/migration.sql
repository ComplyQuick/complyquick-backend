/*
  Warnings:

  - You are about to drop the `CourseProperties` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "CourseProperties" DROP CONSTRAINT "CourseProperties_courseId_fkey";

-- AlterTable
ALTER TABLE "tenant_course" ADD COLUMN     "mandatory" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "retryType" "RetryType" NOT NULL DEFAULT 'SAME',
ADD COLUMN     "skippable" BOOLEAN NOT NULL DEFAULT false;

-- DropTable
DROP TABLE "CourseProperties";
