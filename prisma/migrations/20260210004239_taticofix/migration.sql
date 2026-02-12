/*
  Warnings:

  - Made the column `title` on table `Tasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tasks" ALTER COLUMN "content" DROP NOT NULL,
ALTER COLUMN "title" SET NOT NULL;
