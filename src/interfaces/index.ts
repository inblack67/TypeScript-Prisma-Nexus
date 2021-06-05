import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export interface MyContext {
  prisma: PrismaClient;
  req: Request;
  res: Response;
}
