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
        <style>
          :root {
            color-scheme: light dark;
          }
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: transparent;
            color: white;
          }
          @media (prefers-color-scheme: light) {
            body {
              color: black;
            }
            a {
              color: black;
            }
          }
          .container {
            width: 100%;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px 0;
            background: none;
          }
          .content {
            width: 100%;
            max-width: 600px;
            background: rgba(255, 255, 255, 0.1);
            padding: 32px;
            text-align: center;
            border-radius: 12px;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
          }
          .title {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 12px;
          }
          .message {
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 24px;
          }
          .button {
            display: inline-block;
            padding: 14px 32px;
            margin-top: 10px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
            border-radius: 12px;
            backdrop-filter: blur(15px);
            transition: 0.3s;
          }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.2);
            font-size: 14px;
          }
          .footer a {
            color: inherit;
            text-decoration: none;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <h1 class="title">🎉 Welcome to Nexiloop!</h1>
            <p class="message">
              Hey <strong>Nexiloop</strong>, we’re excited to have you on board! Your email (<strong>${email}</strong>) has been added to our exclusive waitlist. 🚀
            </p>
            <p class="message">
              Something **amazing** is coming soon. Stay tuned!
            </p>
            <a href="https://nexiloop.com" class="button">🚀 Enter Nexiloop</a>
            <div class="footer">
              <p>Need help? <a href="mailto:support@nexiloop.com">Contact Us</a></p>
              <p>&copy; 2024 Nexiloop. All rights reserved.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
