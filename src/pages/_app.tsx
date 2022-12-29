import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/userContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Component {...pageProps} />
    </UserContextProvider>
  );
}
