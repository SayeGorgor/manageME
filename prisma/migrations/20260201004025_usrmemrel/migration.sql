-- CreateIndex
CREATE INDEX "Memberships_org_id_idx" ON "Memberships"("org_id");

-- CreateIndex
CREATE INDEX "Memberships_user_id_idx" ON "Memberships"("user_id");

-- AddForeignKey
ALTER TABLE "Memberships" ADD CONSTRAINT "Memberships_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Memberships" ADD CONSTRAINT "Memberships_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
