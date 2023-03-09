import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: "874701516658-9vno7l7h24j96qlif78bkqae32p84ii9.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    // ...add more providers here
  ],

  pages:{
    signin: "/auth/siginin"
  }
}

export default NextAuth(authOptions)