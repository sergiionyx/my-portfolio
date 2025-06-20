# Resend Email Setup Guide

## 1. Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## 2. Get Your API Key

1. In your Resend dashboard, go to "API Keys"
2. Click "Create API Key"
3. Give it a name like "Portfolio Contact Form"
4. Copy the API key (it starts with `re_`)

## 3. Set Up Environment Variables

Create a file named `.env.local` in your project root directory with the following content:

```
RESEND_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with the actual API key from Resend.

## 4. Configure Your Email Settings

In the file `src/app/api/contact/route.ts`, update these settings:

1. **From Email**: Change `noreply@yourdomain.com` to:

   - If you have a verified domain: `noreply@yourdomain.com`
   - For testing: `onboarding@resend.dev` (Resend's test domain)

2. **To Email**: Change `your-email@example.com` to your actual email address

## 5. Domain Verification (Optional but Recommended)

For production use:

1. In Resend dashboard, go to "Domains"
2. Add your domain (e.g., `yourdomain.com`)
3. Follow the DNS setup instructions
4. Update the `from` email to use your verified domain

## 6. Test the Contact Form

1. Start your development server: `npm run dev`
2. Go to your contact form
3. Fill out and submit the form
4. Check your email for the message

## Security Notes

- Never commit your `.env.local` file to version control
- The `.env.local` file is already ignored by default in Next.js projects
- Use different API keys for development and production

## Resend Free Tier Limits

- 100 emails per day
- 3,000 emails per month
- Perfect for portfolio contact forms

## Troubleshooting

If emails aren't sending:

1. Check your API key is correct
2. Make sure `.env.local` is in the project root
3. Restart your development server after adding environment variables
4. Check the browser console and terminal for error messages
