-- CreateIndex
CREATE INDEX "Tasks_user_id_idx" ON "Tasks"("user_id");

-- CreateIndex
CREATE INDEX "Tasks_org_id_idx" ON "Tasks"("org_id");

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tasks" ADD CONSTRAINT "Tasks_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
