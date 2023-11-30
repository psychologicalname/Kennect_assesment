import { PrismaClient } from '@prisma/client';
import { getServerSession } from "next-auth/next"
import { authOptions } from '../auth/[...nextauth]/route';

const prisma = new PrismaClient();

export async function GET(request, res) {
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true
        }
    });

    return Response.json(users)
}