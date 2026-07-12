-- CreateTable
CREATE TABLE "location" (
    "id" UUID NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "code" VARCHAR(64) NOT NULL,
    "time_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time_modified" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "location_camera_bind" (
    "id" UUID NOT NULL,
    "location_id" UUID NOT NULL,
    "camera_id" VARCHAR(40) NOT NULL,
    "role" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "time_created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "time_modified" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "location_camera_bind_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "location_code_key" ON "location"("code");

-- CreateIndex
CREATE INDEX "location_camera_bind_location_id_idx" ON "location_camera_bind"("location_id");

-- CreateIndex
CREATE INDEX "location_camera_bind_camera_id_idx" ON "location_camera_bind"("camera_id");

-- AddForeignKey
ALTER TABLE "location_camera_bind" ADD CONSTRAINT "location_camera_bind_location_id_fkey" FOREIGN KEY ("location_id") REFERENCES "location"("id") ON DELETE CASCADE ON UPDATE CASCADE;
