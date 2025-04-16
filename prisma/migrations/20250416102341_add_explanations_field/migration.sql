-- AlterTable
ALTER TABLE "course" ADD COLUMN     "explanations" JSONB;

-- CreateTable
CREATE TABLE "slide_explanation" (
    "id" TEXT NOT NULL,
    "courseId" TEXT NOT NULL,
    "slideNumber" INTEGER NOT NULL,
    "explanation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "slide_explanation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "slide_explanation" ADD CONSTRAINT "slide_explanation_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
