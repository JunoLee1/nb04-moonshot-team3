import { PrismaClient } from '@prisma/client'
import { PrismaClientRustPanicError } from '@prisma/client/runtime/library';

 const prisma = new PrismaClient();
 
 export default prisma