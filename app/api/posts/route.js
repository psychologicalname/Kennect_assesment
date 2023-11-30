import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
    const body = await request.json();
    const addPost = await prisma.post.create({
        data: {
            content: body.body,
            user: {
                connect: {
                    name: body.id
                }
            }
        },

    })

    const post = await prisma.post.findFirst({
        where: {
            id: addPost.id
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

    return Response.json(post)
}


export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('userId')
    const search = searchParams.get('search')

    let where = {}

    if (username) {
        where = {
            user: {
                name: username
            }
        }
    }

    if (search) {
        where = {
            content: {
                contains: search,
                mode: 'insensitive'
            }
        }
    }

    const allPosts = await prisma.post.findMany({
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

    return Response.json(allPosts)
}