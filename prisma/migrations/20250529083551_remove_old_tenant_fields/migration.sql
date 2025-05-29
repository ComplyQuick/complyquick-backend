/*
  Warnings:

  - You are about to drop the column `cco_contact` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `cco_email` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `cro_contact` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `cro_email` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `cro_name` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `legal_officer_contact` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `legal_officer_email` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `legal_officer_name` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `posh_committee_email` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `presiding_officer_email` on the `tenant_details` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "tenant_details" DROP COLUMN "cco_contact",
DROP COLUMN "cco_email",
DROP COLUMN "cro_contact",
DROP COLUMN "cro_email",
DROP COLUMN "cro_name",
DROP COLUMN "legal_officer_contact",
DROP COLUMN "legal_officer_email",
DROP COLUMN "legal_officer_name",
DROP COLUMN "posh_committee_email",
DROP COLUMN "presiding_officer_email";
