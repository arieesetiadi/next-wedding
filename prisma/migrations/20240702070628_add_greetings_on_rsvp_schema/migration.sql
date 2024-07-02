/*
  Warnings:

  - Added the required column `greetings` to the `rsvps` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_rsvps" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "phone" TEXT NOT NULL,
    "isAttend" BOOLEAN NOT NULL,
    "greetings" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "invitationId" INTEGER NOT NULL,
    CONSTRAINT "rsvps_invitationId_fkey" FOREIGN KEY ("invitationId") REFERENCES "invitations" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_rsvps" ("createdAt", "id", "invitationId", "isAttend", "phone", "updatedAt") SELECT "createdAt", "id", "invitationId", "isAttend", "phone", "updatedAt" FROM "rsvps";
DROP TABLE "rsvps";
ALTER TABLE "new_rsvps" RENAME TO "rsvps";
CREATE UNIQUE INDEX "rsvps_phone_key" ON "rsvps"("phone");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
