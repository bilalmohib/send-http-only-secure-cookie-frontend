This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, create a `.env.local` file in the root directory with the following content:

```
# Backend URL for API requests
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001

# Frontend URL for CORS (used by backend)
NEXT_PUBLIC_FRONTEND_URL=http://localhost:3000
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## HTTP-Only Cookie Authentication

This application demonstrates secure authentication using HTTP-only cookies:

1. The login form sends credentials to the backend
2. The backend sets an HTTP-only, secure cookie
3. All subsequent requests include this cookie automatically
4. The cookie is never accessible to JavaScript, preventing XSS attacks

### Security Measures

- HTTP-only cookies prevent JavaScript access
- Secure attribute ensures cookies are only sent over HTTPS (in production)
- SameSite attribute controls when cookies are sent with cross-site requests
- CORS is properly configured to allow credential sharing between frontend and backend

### API Utilities

The `src/utils/api.ts` file contains all the network request functions with the proper credential configurations.
