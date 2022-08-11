/*
  Warnings:

  - Made the column `annualFees` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `cardProtectionWith3DSecureText` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `creditLimit` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `fourtyFiveDaysMaximumInterestFree` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `freeAnnualFees` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `freeCashWithdrawal` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `freeFlightTickets` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `generalConditions` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `globalPayments` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `income` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `installmentPlanWithInterestOf1Percent` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `interestRate` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `mobiphone` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `refund` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `rewardPoints` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `seperateOffer` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `transactionLimit` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `upTo50PercentOff` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `withdrawMoneyUpTo85Percent` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pureCardImage` on table `ServicesCard` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `ServicesCard` MODIFY `annualFees` VARCHAR(191) NOT NULL,
    MODIFY `cardProtectionWith3DSecureText` BOOLEAN NOT NULL,
    MODIFY `creditLimit` VARCHAR(191) NOT NULL,
    MODIFY `fourtyFiveDaysMaximumInterestFree` BOOLEAN NOT NULL,
    MODIFY `freeAnnualFees` VARCHAR(191) NOT NULL,
    MODIFY `freeCashWithdrawal` BOOLEAN NOT NULL,
    MODIFY `freeFlightTickets` BOOLEAN NOT NULL,
    MODIFY `generalConditions` VARCHAR(191) NOT NULL,
    MODIFY `globalPayments` BOOLEAN NOT NULL,
    MODIFY `income` VARCHAR(191) NOT NULL,
    MODIFY `installmentPlanWithInterestOf1Percent` BOOLEAN NOT NULL,
    MODIFY `interestRate` VARCHAR(191) NOT NULL,
    MODIFY `mobiphone` BOOLEAN NOT NULL,
    MODIFY `refund` VARCHAR(191) NOT NULL,
    MODIFY `rewardPoints` BOOLEAN NOT NULL,
    MODIFY `seperateOffer` VARCHAR(191) NOT NULL,
    MODIFY `transactionLimit` VARCHAR(191) NOT NULL,
    MODIFY `upTo50PercentOff` BOOLEAN NOT NULL,
    MODIFY `withdrawMoneyUpTo85Percent` BOOLEAN NOT NULL,
    MODIFY `pureCardImage` VARCHAR(191) NOT NULL;
