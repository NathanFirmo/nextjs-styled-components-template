import { PrismaClient } from '@prisma/client'

declare global {
  var Prisma: PrismaClient | undefined
}

export const Prisma =
  global.prisma ||
  new PrismaClient()

if (process.env.NODE_ENV !== 'production') global.prisma = Prisma