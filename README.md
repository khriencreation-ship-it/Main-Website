# Khrien | Creative Excellence & Business Solutions

Where Business Owners Build Smarter solutions. Scaling excellence through design, strategy, and technology.

This repository contains the source code for the Khrien landing page and core business website.

## Tech Stack

This project is built using the following technologies:

-   **Framework:** Next.js (App Router)
-   **Language:** TypeScript
-   **Styling:** Tailwind CSS v4
-   **Animation:** Motion (Framer Motion), GSAP (via Lenis for Smooth Scroll)
-   **Forms:** React Hook Form + Yup
-   **Email:** Resend
-   **Icons:** Lucide React, React Icons
-   **Linting:** ESLint + Prettier

## Getting Started

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/khriencreation-ship-it/Main-Website.git
    cd Main-Website
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root directory and add the following variables:
    ```env
    NEXT_PUBLIC_LAUNCH_DATE=
    OWNER_SECRET=
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

-   `dev`: Starts the development server.
-   `build`: Builds the application for production.
-   `start`: Starts the production server.
-   `lint`: Runs linting checks.
-   `format`: Formats the code using Prettier.
