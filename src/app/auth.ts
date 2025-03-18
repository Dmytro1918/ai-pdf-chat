import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import LinkedInProvider from "next-auth/providers/linkedin"

import type { AuthOptions } from "next-auth";

export const authConfig: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
    GitHubProvider({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string
    }),
    LinkedInProvider({
      clientId: process.env.AUTH_LINKEDIN_ID as string,
      clientSecret: process.env.AUTH_LINKEDIN as string
    })
  ],
};

export default  NextAuth(authConfig);
