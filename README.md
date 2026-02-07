# Mbum Calendar 🗓️

A modern, responsive calendar web application built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**, and deployed as a **static website on AWS S3** with optional **CI/CD via GitHub Actions**.

---

## ✨ Features

- 📅 Dynamic monthly calendar view
- ⏮️⏭️ Navigate between months
- 🔎 Jump to a specific month using date input
- 🎨 Clean, responsive UI with Tailwind CSS
- ⚡ Fast build and load times with Vite
- ☁️ Serverless hosting on AWS S3 (low cost, highly available)

---

## 🧱 Tech Stack

- **Frontend**: React 18, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: lucide-react
- **Hosting**: AWS S3 (Static Website Hosting)
- **CI/CD (optional)**: GitHub Actions

---

## 📂 Project Structure

```text
mbun_calendar/
├── src/
│   ├── components/
│   │   ├── ui/               # Reusable UI components (button, input, card)
│   │   └── CalendarCard.tsx
│   ├── lib/
│   │   └── utils.ts          # Utility helpers (cn)
│   ├── utils/
│   │   └── calendarGenerator.ts
│   ├── App.tsx
│   └── main.tsx
│
├── public/
│   └── manifest.json
│
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── .github/workflows/
│   └── deploy.yml            # CI/CD workflow (optional)
└── README.md

=======================================
🚀 Local Development
1) Install dependencies
npm install

2) Run the dev server
npm run dev


Open:

http://localhost:5173

🏗️ Build for Production
npm run build


This generates a dist/ folder containing static assets ready for deployment.

Preview the production build locally:

npm run preview

☁️ Deploy to AWS S3 (Manual)
1) Create the bucket
aws s3 mb s3://mbum-calendar

2) Upload the build output
aws s3 sync dist s3://mbum-calendar --delete

3) Enable static website hosting
aws s3 website s3://mbum-calendar --index-document index.html --error-document index.html

aws s3api put-public-access-block --bucket mbum-calendar --public-access-block-configuration BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false

🔁 CI/CD Deployment (GitHub Actions)

This project supports automatic deployment to S3 on every push to main.

CI/CD flow:

Push code to GitHub

GitHub Actions:

installs dependencies

builds the app

syncs dist/ to S3

Website updates automatically

The workflow file lives here:

.github/workflows/deploy.yml


AWS authentication is handled securely using OIDC (recommended) or GitHub Secrets.

🔐 Environment & Security Notes

Do NOT commit:

dist/

node_modules/

.env or AWS credentials

Use .gitignore to protect secrets

For production, consider adding CloudFront for HTTPS and caching

🌍 Live Website

Once deployed, the site is available at:

http://mbum-calendar.s3-website-<region>.amazonaws.com


(Replace <region> with your AWS region, e.g. us-east-1)

📈 Future Improvements

Add event creation and persistence

Integrate backend (API / database)

User authentication

Multi-language support

CloudFront + custom domain

👤 Author

Dr Fabian Ebong
Cloud / DevOps / AWS Architect

📄 License

This project is open for community and educational use.
Add a license file if you plan to open-source it publicly.


