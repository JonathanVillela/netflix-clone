import { PrismaClient } from "@prisma/client";

//save Prisma in global file
const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV == 'production') global.prismadb = client;

export default client;