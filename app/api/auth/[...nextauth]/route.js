import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const authOptions = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = await prisma.user.findFirst({
                    where: {
                        name: credentials.username,
                        password: credentials.password
                    },
                    select: {
                        id: true,
                        name: true
                    }
                });
                if (user) {
                    return { id: user.id, name: user.name }
                } else {
                    const userExists = await prisma.user.findFirst({
                        where: {
                            name: credentials.username,
                        },
                        select: {
                            id: true,
                            name: true
                        }
                    });
                    // If you return null then an error will be displayed advising the user to check their details.
                    if (userExists) {
                        return null
                    }
                    else {
                        const addUser = await prisma.user.create({
                            data: {
                                name: credentials.username,
                                password: credentials.password
                            }
                        })
                        return { id: addUser.id, name: addUser.name }
                    }

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }