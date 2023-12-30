"use client"

// SessionProvider use React context internally is not available for 
// server components.
// export from client component
export { SessionProvider as default } from "next-auth/react";