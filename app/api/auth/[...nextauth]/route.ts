//For NextAuth

import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import { env } from "@/lib/env";
import { PrismaClient } from "@prisma/client";
import { prisma } from "@/lib/db/prisma";
import { mergeAnonymCartToUserCart } from "@/lib/db/cart";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma as PrismaClient) as Adapter,
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    session({ session, user }) {
      session.user.id = user.id;

      return session;
    },
  },
  events: {
    async signIn({ user }) {
      await mergeAnonymCartToUserCart(user.id);
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
