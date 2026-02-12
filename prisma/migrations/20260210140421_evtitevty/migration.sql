/*
  Warnings:

  - You are about to drop the column `user_id` on the `Events` table. All the data in the column will be lost.
  - Added the required column `name` to the `Events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Events" DROP COLUMN "user_id",
ADD COLUMN     "event_type" "Role" NOT NULL DEFAULT 'MEMBER',
ADD COLUMN     "name" TEXT NOT NULL;
