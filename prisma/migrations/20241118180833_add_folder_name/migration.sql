/*
  Warnings:

  - Added the required column `name` to the `folder` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "folder" ADD COLUMN     "name" TEXT NOT NULL;
