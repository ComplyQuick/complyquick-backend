/*
  Warnings:

  - You are about to drop the column `created_at` on the `course` table. All the data in the column will be lost.
  - You are about to drop the `course_slideshow` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[domain]` on the table `tenant_details` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `materialUrl` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admin_email` to the `tenant_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admin_password` to the `tenant_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domain` to the `tenant_details` table without a default value. This is not possible if the table is not empty.
  - Added the required column `organization_name` to the `tenant_details` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "course_slideshow" DROP CONSTRAINT "course_slideshow_course_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_tenant_id_fkey";

-- AlterTable
ALTER TABLE "course" DROP COLUMN "created_at",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "learningObjectives" TEXT[],
ADD COLUMN     "materialUrl" TEXT NOT NULL,
ADD COLUMN     "slides" JSONB[],
ADD COLUMN     "tags" TEXT[],
ADD COLUMN     "targetAudience" TEXT[],
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "tenant_details" ADD COLUMN     "admin_email" TEXT NOT NULL,
ADD COLUMN     "admin_password" TEXT NOT NULL,
ADD COLUMN     "domain" TEXT NOT NULL,
ADD COLUMN     "organization_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "password" TEXT,
ALTER COLUMN "tenant_id" DROP NOT NULL;

-- DropTable
DROP TABLE "course_slideshow";

-- CreateTable
CREATE TABLE "mcqs" (
    "id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "options" TEXT[],
    "correctAnswer" TEXT NOT NULL,
    "explanation" TEXT,
    "courseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "mcqs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_mcq_answers" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "mcqId" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "isCorrect" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_mcq_answers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tenant_details_domain_key" ON "tenant_details"("domain");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_tenant_id_fkey" FOREIGN KEY ("tenant_id") REFERENCES "tenant"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "mcqs" ADD CONSTRAINT "mcqs_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_mcq_answers" ADD CONSTRAINT "user_mcq_answers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_mcq_answers" ADD CONSTRAINT "user_mcq_answers_mcqId_fkey" FOREIGN KEY ("mcqId") REFERENCES "mcqs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
