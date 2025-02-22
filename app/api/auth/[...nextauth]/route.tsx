import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
//import GithubProvider from "next-auth/providers/github";
import axios from "axios";
import { connect } from "@/lib/mongodb"
import { User } from "../../../../models/UserModel"

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
  ],
  callbacks: {
  async signIn({ user, account }) {
    if(account.provider === "google"){
      const { name, email } = user;
      await connect()
      const userExists = await User.findOne({email})
      if(!userExists){
        await axios.post("http://localhost:3000/api/users", { name, email });
        return user;
      }
      return user;
    }
  }
}
};

const handler = NextAuth(authOptions);

export { handler as POST, handler as GET };