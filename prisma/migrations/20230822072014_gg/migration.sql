-- CreateTable
CREATE TABLE "Categories" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quotes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "quote" TEXT NOT NULL,
    "author" TEXT,
    "categoriesId" UUID NOT NULL,

    CONSTRAINT "Quotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Themes" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "createdAt" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Themes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Quotes_Themes" (
    "quotesId" UUID NOT NULL,
    "themesId" UUID NOT NULL,

    CONSTRAINT "Quotes_Themes_pkey" PRIMARY KEY ("quotesId","themesId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Categories_title_key" ON "Categories"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Quotes_quote_key" ON "Quotes"("quote");

-- CreateIndex
CREATE UNIQUE INDEX "Themes_title_key" ON "Themes"("title");

-- AddForeignKey
ALTER TABLE "Quotes" ADD CONSTRAINT "Quotes_categoriesId_fkey" FOREIGN KEY ("categoriesId") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quotes_Themes" ADD CONSTRAINT "Quotes_Themes_quotesId_fkey" FOREIGN KEY ("quotesId") REFERENCES "Quotes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Quotes_Themes" ADD CONSTRAINT "Quotes_Themes_themesId_fkey" FOREIGN KEY ("themesId") REFERENCES "Themes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
