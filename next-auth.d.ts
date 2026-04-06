import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Mở rộng interface Session để có thêm thuộc tính id
   */
  interface Session {
    user: {
      id: string;
    } & DefaultSession["user"];
  }

  /**
   * Mở rộng interface User (dữ liệu trả về từ authorize)
   */
  interface User {
    id: string;
  }
}

declare module "next-auth/jwt" {
  /**
   * Mở rộng interface JWT để lưu trữ id
   */
  interface JWT {
    id: string;
  }
}