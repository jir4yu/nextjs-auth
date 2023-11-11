import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "./prisma";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: { 
          label: "Password", 
          type: "password" 
        },
      },
      async authorize(credentials) {
        // validate credentials
        if (!credentials?.email || !credentials.password) {
          return null
        }
        // find user 
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          }
        })
        // if user not found and password mismatch 
        if (!user || !(await compare(credentials.password, user.password) )) {
          return null
        }
        // return user
        return Object.assign(user, { randomKey: 'You Cool!' })
      },
    }),
  ],
  callbacks: {
    session: ({session, token}) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }
      return token;
    },
  },
};