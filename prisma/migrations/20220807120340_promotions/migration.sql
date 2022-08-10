/*
  Warnings:

  - Added the required column `content` to the `Promotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `customer` to the `Promotion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Promotion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Promotion` ADD COLUMN `content` VARCHAR(191) NOT NULL,
    ADD COLUMN `customer` VARCHAR(191) NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
