import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

import MyApolloProvider from "lib/apollo/ApolloProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <MyApolloProvider>
        <Component {...pageProps} />
      </MyApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
