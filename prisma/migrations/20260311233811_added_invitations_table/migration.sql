-- CreateTable
CREATE TABLE "Invitations" (
    "id" UUID NOT NULL,
    "org_id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'MEMBER',
    "token" UUID NOT NULL,
    "accepted_at" TIMESTAMP(3),
    "expires_at" TIMESTAMP(3) NOT NULL,
    "invited_by" UUID NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Invitations_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Invitations_id_key" ON "Invitations"("id");

-- AddForeignKey
ALTER TABLE "Invitations" ADD CONSTRAINT "Invitations_invited_by_fkey" FOREIGN KEY ("invited_by") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invitations" ADD CONSTRAINT "Invitations_org_id_fkey" FOREIGN KEY ("org_id") REFERENCES "Organizations"("id") ON DELETE CASCADE ON UPDATE CASCADE;
