import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { NextSeo } from "next-seo";
import projectTheme from "../theme";
import { CounterProvider } from "../components/context/CounterProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={projectTheme}>
      <NextSeo title="Virtual Wallet" description="Virtual Wallet" />
      <CounterProvider>
        <Component {...pageProps} />
      </CounterProvider>
    </NextUIProvider>
  );
}

export default MyApp;
