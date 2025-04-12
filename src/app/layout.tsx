import type { Metadata } from "next";
import { Poppins } from "next/font/google";  // Impor font Poppins dari Google Fonts
import "./globals.css";
import { AuthProvider } from "@/providers/userContext";

// Menggunakan font Poppins dari Google Fonts
const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],  // Array berat font yang didukung
  subsets: ["latin"],  // Menentukan subset yang diinginkan (misalnya latin)
});

export const metadata: Metadata = {
  title: "BPMP Provinsi Kepulauan Riau",
  description: "BPMP Provinsi Kepulauan Riau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`} // Gunakan className dari font Poppins
      > 
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>

    </html>
  );
}
