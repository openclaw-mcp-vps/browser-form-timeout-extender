import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormGuard – Prevent Form Timeouts from Killing Your Work",
  description:
    "Browser extension that detects form timeouts, auto-refreshes sessions, and preserves your form data across page reloads. Never lose work again."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="d637ca7b-2c39-4467-a5fb-23097eafe8ce"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
