import prisma from "@/prisma/client";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from 'bcrypt'



export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
    providers: [
      Credentials({
        credentials: {
          email: { label: "Email", type:'email', placeholder: 'Email' },
          password: { label: "Password", type: "password", placeholder: 'Password' },
        },
        async authorize({ credentials }) {
          // const response = await fetch(request)
          // return (await response.json()) ?? null
          if(!credentials?.email || !credentials.password)  return null

          const user = await prisma.user.findUnique({
            where: { email: credentials.email },
          });

          if (!user || !(await bcrypt.compare(credentials.password, user.hashedPassword!))) {
            return null;
          }

          return user

        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!
      })
    ],
  session: {
    strategy: 'jwt'
  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

