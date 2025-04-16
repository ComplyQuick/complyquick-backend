/*
  Warnings:

  - You are about to drop the column `admin_email` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `admin_password` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `domain` on the `tenant_details` table. All the data in the column will be lost.
  - You are about to drop the column `organization_name` on the `tenant_details` table. All the data in the column will be lost.
  - Added the required column `admin_email` to the `tenant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `admin_password` to the `tenant` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "tenant_details_domain_key";

-- Add the new columns to tenant table first
ALTER TABLE "tenant" ADD COLUMN "admin_email" TEXT;
ALTER TABLE "tenant" ADD COLUMN "admin_password" TEXT;

-- Copy admin details from tenant_details to tenant
UPDATE tenant t
SET admin_email = td.admin_email,
    admin_password = td.admin_password
FROM tenant_details td
WHERE t.id = td.tenant_id;

-- Set default values for any remaining tenants without admin details
UPDATE tenant
SET admin_email = domain,
    admin_password = 'changeme'
WHERE admin_email IS NULL;

-- Make the columns required after adding data
ALTER TABLE "tenant" ALTER COLUMN "admin_email" SET NOT NULL;
ALTER TABLE "tenant" ALTER COLUMN "admin_password" SET NOT NULL;

-- Remove columns from tenant_details
ALTER TABLE "tenant_details" DROP COLUMN IF EXISTS "organization_name";
ALTER TABLE "tenant_details" DROP COLUMN IF EXISTS "domain";
ALTER TABLE "tenant_details" DROP COLUMN IF EXISTS "admin_email";
ALTER TABLE "tenant_details" DROP COLUMN IF EXISTS "admin_password";
