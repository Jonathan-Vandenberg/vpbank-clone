/*
  Warnings:

  - Made the column `type` on table `Promotion` required. This step will fail if there are existing NULL values in that column.
  - Made the column `type` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Promotion` MODIFY `type` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ServicesCard` MODIFY `type` VARCHAR(191) NOT NULL;
