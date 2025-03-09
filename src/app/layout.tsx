import type { Metadata } from "next";
import "ct.frontend/styles/Index.scss";
import {inter} from "ct.frontend/helpers/Font";
import {ReactNode} from "react";
import Header from "ct.frontend/components/Header/Header";

export const metadata: Metadata = {
  title: "Calculator Test",
  description: "Renaissance Software Developer Technical Test",
};

type LayoutProps = Readonly<{ children: ReactNode; }>;

function RootLayout({
  children
}: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <main className={"flex__col flex__grow h__max g__16"}>
          <Header />
          {children}
      </main>
      </body>
    </html>
  );
}

export default RootLayout;