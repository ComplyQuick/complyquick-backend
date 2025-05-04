-- CreateEnum
CREATE TYPE "RetryType" AS ENUM ('SAME', 'DIFFERENT');

-- CreateTable
CREATE TABLE "CourseProperties" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "skippable" BOOLEAN NOT NULL DEFAULT false,
    "mandatory" BOOLEAN NOT NULL DEFAULT false,
    "retryType" "RetryType" NOT NULL DEFAULT 'SAME',

    CONSTRAINT "CourseProperties_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CourseProperties_courseId_key" ON "CourseProperties"("courseId");

-- AddForeignKey
ALTER TABLE "CourseProperties" ADD CONSTRAINT "CourseProperties_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
