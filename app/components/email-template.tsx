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
      <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: none ; color: white;">
        <div style="width: 100%; height: 100vh; display: flex; align-items: center; justify-content: center; padding: 40px 0; background: none;">
          <div style="width: 100%; max-width: 600px; background: rgba(255, 255, 255, 0.1); padding: 32px; text-align: center; border-radius: 12px; backdrop-filter: blur(10px); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);">
            
            <!-- Welcome Header -->
            <h1 style="color: #f9fafb; font-size: 28px; font-weight: bold; margin-bottom: 12px;">🎉 Welcome to Nexiloop!</h1>

            <!-- Message -->
            <p style="color: #d1d5db; font-size: 18px; line-height: 1.6; margin-bottom: 24px;">
              Hey <strong>Nexiloop</strong>, we’re excited to have you on board! Your email (<strong>${email}</strong>) has been added to our exclusive waitlist. 🚀
            </p>
            <p style="color: #d1d5db; font-size: 18px; line-height: 1.6; margin-bottom: 24px;">
              Something **amazing** is coming soon. Stay tuned!
            </p>

            <!-- Call to Action Button -->
            <a href="https://nexiloop.com" style="display: inline-block; padding: 14px 32px; margin-top: 10px; background: rgba(255, 255, 255, 0.2); color: white; text-decoration: none; font-size: 16px; font-weight: bold; border-radius: 12px; backdrop-filter: blur(15px); transition: 0.3s;">
              🚀 Enter Nexiloop
            </a>

            <!-- Footer with Social Links -->
            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid rgba(255, 255, 255, 0.2);">

              <p style="margin-top: 20px; color: #6b7280; font-size: 14px;">Need help? <a href="mailto:support@nexiloop.com" style="color: #9ca3af; text-decoration: none;">Contact Us</a></p>
              <p style="color: #9ca3af; font-size: 14px; margin-top: 8px;">&copy; 2024 Nexiloop. All rights reserved.</p>
            </div>

          </div>
        </div>
      </body>
    </html>
  `;
}
