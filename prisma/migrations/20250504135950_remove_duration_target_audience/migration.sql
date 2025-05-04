/*
  Warnings:

  - You are about to drop the column `duration` on the `course` table. All the data in the column will be lost.
  - You are about to drop the column `targetAudience` on the `course` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "course" DROP COLUMN "duration",
DROP COLUMN "targetAudience";
