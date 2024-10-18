"use client";

import Headers from "@/components/Headers";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <div className="flex min-h-screen w-full flex-col">
        <Headers />
        {children}
      </div>
    </Provider>
  );
}
