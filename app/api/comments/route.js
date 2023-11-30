import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
    const body = await request.json();
    const addComment = await prisma.comment.create({
        data: {
            content: body.body,
            post: {
                connect: {
                    id: body.post_id,
                }
            },
            user: {
                connect: {
                    name: body.id
                }
            }
        },

    })

    const comment = await prisma.comment.findFirst({
        where: {
            id: addComment.id
        },
        select: {
            id: true,
            content: true,
            user: {
                select: {
                    name: true
                }
            }
        }
    })

    return Response.json(comment)
}


export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('id')

    let where = {}

    if (username) {
        where = {
            post: {
                id: username
            }
        }
    }

    const allComments = await prisma.comment.findMany({
        where,
        select: {
            id: true,
            content: true,
            user: {
                select: {
                    name: true
                }
            }
        }
    });

    return Response.json(allComments)
}