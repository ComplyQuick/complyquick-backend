/*
  Warnings:

  - You are about to drop the column `explanations` on the `course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "course" DROP COLUMN "explanations";

-- AlterTable
ALTER TABLE "tenant_course" ADD COLUMN     "explanations" JSONB;
