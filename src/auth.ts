import CredentialsProvider from "next-auth/providers/credentials";
import {
  FailedLoginInterface,
  SuccessLoginInterface,
} from "@/interfaces/AuthInterfaces";
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Route",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const response = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            headers: { "Content-Type": "application/json" },
            method: "POST",
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          },
        );
        const payload = (await response.json()) as
          | SuccessLoginInterface
          | FailedLoginInterface;
        if (payload.message == "success") {
          const success = payload as SuccessLoginInterface;
          return {
            id: success.user.email,
            user: success.user,
            token: success.token,
          };
        } else {
          throw new Error(payload.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async jwt({ token, user: userResponse }) {
      if (userResponse) {
        token.user = userResponse.user;
        token.token = userResponse.token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = token.user;
        session.token = token.token;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
