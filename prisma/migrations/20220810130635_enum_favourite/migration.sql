/*
  Warnings:

  - You are about to alter the column `type` on the `ServicesCard` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum("ServicesCard_type")`.

*/
-- AlterTable
ALTER TABLE `ServicesCard` MODIFY `type` ENUM('PROMOTION', 'SERVICESCARD') NOT NULL;
