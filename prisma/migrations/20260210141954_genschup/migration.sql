-- AlterTable
ALTER TABLE "Notes" ALTER COLUMN "org_id" DROP NOT NULL;

-- CreateIndex
CREATE INDEX "Events_org_id_idx" ON "Events"("org_id");

-- CreateIndex
CREATE INDEX "Notes_user_id_idx" ON "Notes"("user_id");

-- CreateIndex
CREATE INDEX "Organizations_id_idx" ON "Organizations"("id");

-- CreateIndex
CREATE INDEX "Users_email_idx" ON "Users"("email");

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notes" ADD CONSTRAINT "Notes_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Events" ADD CONSTRAINT "Events_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
