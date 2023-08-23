/*
  Warnings:

  - You are about to drop the `Quotes_Themes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Themes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Quotes_Themes" DROP CONSTRAINT "Quotes_Themes_quotesId_fkey";

-- DropForeignKey
ALTER TABLE "Quotes_Themes" DROP CONSTRAINT "Quotes_Themes_themesId_fkey";

-- DropTable
DROP TABLE "Quotes_Themes";

-- DropTable
DROP TABLE "Themes";
