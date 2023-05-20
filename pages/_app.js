import "../styles/globals.css";
import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../src/store/index";
import Layout from "../src/components/Layout/Layout";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthGuard } from "../src/components/Auth/AuthGuard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta httpEquiv="Content-Security-Policy" script-src="unsafe-inline" />
        <meta name="theme-color" content="#000000" />
        <meta name="Keywords" content="online learning" />
        <meta
          name="description"
          content="With skilldizer, Get ready to learn anything systematically anywhere you want. Start your language, or skill learning journey from the top-notch tutors out there on Skilldizer now! Compare Profiles and Reviews. Book Instantly! User-friendly and great customer support team. 100% Positive Feedback. Native speakers, verified and professional tutors, Test Preparation to pass exams."
        />

        <title>
          Skilldizer- Dream big and shape your future with our 1:1 online
          tutoring services!
        </title>
      </Head>

      <AnimatePresence mode="wait">
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <Layout>
              <GoogleOAuthProvider clientId={process.env.GOOGLE_CLIENT_ID}>
                {Component.requireAuth ? (
                  <AuthGuard fromBecomeTutor={Component?.fromBecomeTutor}>
                    <Component {...pageProps} />
                  </AuthGuard>
                ) : (
                  <Component {...pageProps} />
                )}
              </GoogleOAuthProvider>
            </Layout>
          </PersistGate>
        </Provider>
      </AnimatePresence>
	  <ToastContainer />
    </>
  );
}

export default MyApp;
