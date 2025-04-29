/*
  Warnings:

  - You are about to alter the column `progress` on the `enrollment` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(5,2)`.

*/
-- AlterTable
ALTER TABLE "enrollment" ALTER COLUMN "progress" SET DEFAULT 0,
ALTER COLUMN "progress" SET DATA TYPE DECIMAL(5,2);
