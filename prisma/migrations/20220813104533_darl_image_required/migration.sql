/*
  Warnings:

  - Made the column `darkImage` on table `PromoSlide` required. This step will fail if there are existing NULL values in that column.
  - Made the column `darkImage` on table `Promotion` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `PromoSlide` MODIFY `darkImage` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `Promotion` MODIFY `darkImage` BOOLEAN NOT NULL;
