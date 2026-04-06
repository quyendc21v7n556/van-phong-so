import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Tài khoản nội bộ",
      credentials: {
        username: { label: "Tên đăng nhập", type: "text" },
        password: { label: "Mật khẩu", type: "password" }
      },
      async authorize(credentials) {
        // Kiểm tra đúng tài khoản admin/123456
        if (credentials?.username === "admin" && credentials?.password === "123456") {
          return { 
            id: "1", 
            name: "Quản trị viên", 
            email: "admin@vanphongso.com" 
          };
        }
        return null;
      }
    })
  ],
  // THÊM PHẦN NÀY ĐỂ QUẢN LÝ SESSION TỐT HƠN
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.id = token.id;
      return session;
    }
  },
  pages: {
    signIn: '/login', 
  },
  // Nhớ thêm Secret (có thể để bất kỳ chuỗi nào trong lúc dev)
  secret: process.env.NEXTAUTH_SECRET || "chuoi-bi-mat-cua-quyen",
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };