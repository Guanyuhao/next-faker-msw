import type { Metadata } from 'next'
import fontsConfig from '@/font/index';
import { useParams } from 'next/navigation';


import "@arco-design/web-react/dist/css/arco.css";
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { LANG = "en-us" } = useParams();
  const className = fontsConfig[LANG as keyof typeof fontsConfig];
  return (
    <html className={className}>
      <body>{children}</body>
    </html>
  );
}
