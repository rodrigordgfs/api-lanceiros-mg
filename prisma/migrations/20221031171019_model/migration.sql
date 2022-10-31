/*
  Warnings:

  - You are about to drop the `graduacoes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nome]` on the table `cargos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[nome]` on the table `sedes` will be added. If there are existing duplicate values, this will fail.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "graduacoes";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "membros" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sedeId" TEXT NOT NULL,
    "cargoId" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "apelido" TEXT,
    "telefone_contato" TEXT NOT NULL,
    "telefone_emergencia" TEXT NOT NULL,
    "data_nascimento" DATETIME NOT NULL,
    "cep" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "logradouro" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT,
    "profissao" TEXT NOT NULL,
    "estado_civil" TEXT NOT NULL,
    "data_entrada" DATETIME NOT NULL,
    "data_saida" DATETIME,
    "observacoes" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "membros_sedeId_fkey" FOREIGN KEY ("sedeId") REFERENCES "sedes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "membros_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "cargos" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "membros_cpf_key" ON "membros"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "cargos_nome_key" ON "cargos"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "sedes_nome_key" ON "sedes"("nome");
