/*
  Warnings:

  - You are about to drop the column `nome` on the `contacts` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `contacts` table. All the data in the column will be lost.
  - Added the required column `name` to the `contacts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `contacts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_contacts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "contacts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_contacts" ("createdAt", "email", "id", "updatedAt", "userId") SELECT "createdAt", "email", "id", "updatedAt", "userId" FROM "contacts";
DROP TABLE "contacts";
ALTER TABLE "new_contacts" RENAME TO "contacts";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
