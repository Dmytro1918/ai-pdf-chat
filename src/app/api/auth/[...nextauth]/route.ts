import { authConfig } from '@/app/auth' // Referring to the auth.ts we just created
import NextAuth from 'next-auth'

const handler = NextAuth(authConfig)
console.log(handler)

export  { handler as GET, handler as POST } 