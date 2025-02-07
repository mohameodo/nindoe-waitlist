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
        <title>Welcome to Nexiloop!</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f3f4f6;">
        <div style="width: 100%; padding: 40px 0; background-color: #f3f4f6;">
          <div style="max-width: 600px; margin: auto; background: white; padding: 32px; text-align: center; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            
            <!-- Logo -->
            <img src="https://nexiloop.com/logo.png" alt="Nexiloop Logo" style="width: 140px; margin-bottom: 20px;">

            <!-- Welcome Header -->
            <h1 style="color: #1f2937; font-size: 26px; font-weight: bold; margin-bottom: 12px;">🎉 Welcome to Nexiloop!</h1>

            <!-- Message -->
            <p style="color: #4b5563; font-size: 18px; line-height: 1.6; margin-bottom: 24px;">
              Hey there! We’re thrilled to have you on board. Your email (<strong>${email}</strong>) has been added to our exclusive waitlist. 🚀
            </p>
            <p style="color: #4b5563; font-size: 18px; line-height: 1.6; margin-bottom: 24px;">
              Something **amazing** is coming your way soon. Stay tuned!
            </p>

            <!-- Call to Action Button -->
            <a href="https://nexiloop.com" style="display: inline-block; padding: 14px 32px; margin-top: 10px; background-color: #3b82f6; color: white; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 8px; transition: 0.3s;">
              🚀 Visit Nexiloop
            </a>

            <!-- Footer -->
            <p style="margin-top: 32px; color: #6b7280; font-size: 14px;">
              Need help? <a href="mailto:support@nexiloop.com" style="color: #3b82f6; text-decoration: none;">Contact Us</a>
            </p>
            <p style="color: #1f2937; font-weight: bold; margin-top: 12px;">The Nexiloop Team</p>
          </div>
        </div>
      </body>
    </html>
  `;
}
