import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, createTheme } from "@mantine/core";
import "@mantine/core/styles.css";

const theme = createTheme({});

export const metadata: Metadata = {
  title: "Slide All",
  description: "これでいいスライドツール",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} withGlobalClasses>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
