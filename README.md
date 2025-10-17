# Tsumbedzo Matloga's Personal Portfolio

This is a modern, responsive, and interactive personal portfolio website for Tsumbedzo Matloga, a full-stack software developer. It is built with Next.js, TypeScript, and styled with Tailwind CSS and ShadCN UI.

## Features

- **Responsive Design**: Looks great on all devices, from mobile phones to desktops.
- **Interactive Hero Section**: An engaging welcome area with animations.
- **Dynamic Sections**: Includes sections for "About Me," "Skills," and "Projects."
- **Active Navigation**: The navigation bar highlights the section currently in view as you scroll.
- **Functional Contact Form**: Allows visitors to send messages directly to your email using **Resend**.
- **Modern UI Components**: Built with the sleek and accessible [ShadCN UI](https://ui.shadcn.com/) library.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Email Service**: [Resend](https://resend.com/) for the contact form.
- **Icons**: [Lucide React](https://lucide.dev/guide/packages/lucide-react)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or later)
- npm or pnpm

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/your-portfolio-repo.git
    cd your-portfolio-repo
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Application

To run the development server, execute:
```sh
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Configuration

To make the contact form fully operational, you need to set up an email sending service. This project is pre-configured to use **Resend**.

1.  **Sign up for Resend**:
    - Go to [resend.com](https://resend.com/) and create a free account.
    - Create and copy a new **API Key** from your Resend dashboard.

2.  **Set up Environment Variables**:
    - Create a new file in the root of your project named `.env.local`.
    - Add your Resend API key to this file:
      ```
      RESEND_API_KEY=your_api_key_goes_here
      ```

3.  **Update Email Address**:
    - Open `src/app/actions.ts`.
    - In the `submitContactForm` function, find the `to:` field and replace the placeholder email with the address where you want to receive messages.

4.  **Restart the Server**:
    - Stop your development server (if it's running) and restart it to load the new environment variables.
      ```sh
      npm run dev
      ```

Your contact form should now be fully functional.
