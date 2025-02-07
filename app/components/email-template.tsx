interface EmailTemplateProps {
  email: string;
}

export function EmailTemplate({ email }: EmailTemplateProps) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to Nindoe's Waitlist!</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4; padding: 40px;">
        <div style="max-width: 600px; margin: auto; background: white; border-radius: 8px; padding: 24px; text-align: center; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #1a1a1a; font-size: 24px; margin-bottom: 16px;">Welcome to Nindoe!</h1>
          <p style="color: #555; font-size: 16px;">
            Hey there! We're thrilled to have you on board. We've received your email (<strong>${email}</strong>), and you're now part of our exclusive waitlist.
          </p>
          <p style="color: #555; font-size: 16px;">
            Exciting things are coming soon, and we can't wait to share them with you. Stay tuned!
          </p>
          <a href="https://nindoe.com" style="display: inline-block; padding: 12px 24px; margin-top: 16px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
            Visit Our Website
          </a>
          <p style="margin-top: 24px; color: #777; font-size: 14px;">
            If you have any questions, feel free to reach out to us anytime.
          </p>
          <p style="color: #1a1a1a; font-weight: bold; margin-top: 16px;">The Nindoe Team</p>
        </div>
      </body>
    </html>
  `;
}
