/*
  Warnings:

  - You are about to drop the `PromoSlide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `PromoSlide`;

-- CreateTable
CREATE TABLE `MonthlyDeal` (
    `id` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `content` VARCHAR(191) NOT NULL,
    `customer` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `darkImage` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
