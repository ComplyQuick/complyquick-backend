-- CreateTable
CREATE TABLE "tenant_course_details" (
    "id" TEXT NOT NULL,
    "tenantCourseId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "tenant_course_details_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tenant_course_details" ADD CONSTRAINT "tenant_course_details_tenantCourseId_fkey" FOREIGN KEY ("tenantCourseId") REFERENCES "tenant_course"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
