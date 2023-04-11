import NextAuth from "next-auth"
import CognitoProvider from "next-auth/providers/cognito";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CognitoProvider({
        clientId: process.env.COGNITO_CLIENT_ID,
        clientSecret: process.env.COGNITO_CLIENT_SECRET,
        issuer: process.env.COGNITO_ISSUER,
    })
    // ...add more providers here
  ],
  callbacks: {
    session: async function ({ session, token }) {
      return {
        ...session,
        bearerToken: token.bearerToken ?? session.bearerToken,
      };
    },
    async jwt({ token, account }) {
      token.bearerToken = account?.id_token ?? token.bearerToken;
      return token;
    },
  },
}

export default NextAuth(authOptions)