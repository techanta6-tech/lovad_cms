-- CreateTable
CREATE TABLE "meeting" (
    "id" UUID NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "location_id" UUID NOT NULL,
    "group_ids" TEXT[],
    "time_start" VARCHAR(5) NOT NULL,
    "time_end" VARCHAR(5) NOT NULL,
    "date_organize" DATE NOT NULL,
    "time_before_begin" INTEGER NOT NULL DEFAULT 30,
    "time_after_end" INTEGER NOT NULL DEFAULT 30,
    "time_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time_modified" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "meeting_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "meeting_location_id_idx" ON "meeting"("location_id");

-- CreateIndex
CREATE INDEX "meeting_date_organize_idx" ON "meeting"("date_organize");

-- AddForeignKey
ALTER TABLE "meeting" ADD CONSTRAINT "meeting_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
