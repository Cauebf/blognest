# BlogNest ✍️🚀

## 📌 Table of Contents

- [BlogNest ✍️🚀](#blognest-️)
  - [📌 Table of Contents](#-table-of-contents)
  - [🌐 Overview](#-overview)
  - [⚙️ Features](#️-features)
  - [💻 Technologies Used](#-technologies-used)
  - [🗝️ Key Takeaways](#️-key-takeaways)
  - [🚀 How to Run the Project](#-how-to-run-the-project)
  - [🤝 Contributing](#-contributing)
  - [💬 Contact](#-contact)

## 🌐 Overview

**BlogNest** is a modern full-stack application where authenticated users can create, view, and interact with blog posts. With a responsive design and smooth user experience, the project integrates Kinde authentication, Tailwind CSS for styling, and Next.js 15 for optimized rendering. The backend is handled with Prisma ORM and a SQL database.

## ⚙️ Features

- 📝 **Post CRUD** – Authenticated users can create blog posts with a title, content, and image.
- 🔐 **Authentication with Kinde** – Secure login, register, and logout flows.
- 🧠 **SSR + Suspense** – Optimized data loading using React Suspense and skeleton components.
- 💡 **Skeleton Loader** – Visual feedback while data is loading.
- 🎨 **Modern Responsive UI** – Styled with Tailwind CSS and ShadCN UI.
- 📅 **Formatted Dates** – Posts show readable publication dates.
- 🌍 **Dynamic Routing** – Each post has a dedicated detail page.

## 💻 Technologies Used

- [Next.js 15](https://nextjs.org/) – React framework for hybrid rendering.
- [React 19](https://react.dev/) – Core library for building UIs.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework.
- [ShadCN UI](https://ui.shadcn.dev/) – Pre-built components using Tailwind.
- [Prisma](https://www.prisma.io/) – ORM for database access.
- [Kinde Auth](https://kinde.com/) – Authentication and user management.
- [Lucide Icons](https://lucide.dev/) – Beautiful and lightweight icon set.
- [TypeScript](https://www.typescriptlang.org/) – Strongly-typed JavaScript.

## 🗝️ Key Takeaways

1. **Complete Full-Stack Integration** – Seamless connection between front-end and back-end using App Router.
2. **Secure Authentication** – Kinde provides production-ready login flows.
3. **Database Management** – Structured and scalable data with Prisma ORM.
4. **Professional UI** – Clean design with ShadCN + Tailwind.
5. **SSR & Performance** – Server-side rendering for speed and SEO.

## 🚀 How to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Cauebf/blognest.git
   cd blognest
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory and add the following variables:

    ```env
    # Prisma database URL
    DATABASE_URL=your_database_connection_string_here

    # Kinde Auth configuration
    KINDE_CLIENT_ID=your_kinde_client_id
    KINDE_CLIENT_SECRET=your_kinde_client_secret
    KINDE_ISSUER_URL=your_kinde_issuer_url
    KINDE_SITE_URL=http://localhost:3000
    KINDE_POST_LOGOUT_REDIRECT_URL=http://localhost:3000
    KINDE_POST_LOGIN_REDIRECT_URL=http://localhost:3000/dashboard

4. **Set up Prisma and the database**:

   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

5. **Start the development server**:

   ```bash
   npm run dev
   ```

6. **Build the app for production**:

   ```bash
   npm run build
   npm start
   ```

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or pull requests for any improvements or bug fixes.

## 💬 Contact

For any inquiries or collaboration opportunities, feel free to reach out via:

[![Gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:cauebrolesef@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/cauebrolesef/)
[![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/cauebf_/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Cauebf)

<p align="right">(<a href="#product-store-">back to top</a>)</p>
