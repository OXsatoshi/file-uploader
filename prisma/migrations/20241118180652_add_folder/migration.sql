-- CreateTable
CREATE TABLE "folder" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "folder_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "folder" ADD CONSTRAINT "folder_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
