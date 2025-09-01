import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/mainLayout/MainLayout";
import { useRouter } from "next/router";
import LoginPage from "./kata/login";
import { LanguageProvider } from "@/context/LanguageProvider";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import ThemeProvider from "@/context/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isLoginRoute = router.pathname.startsWith("/kata/login");

  const getLayout = (page: React.ReactNode) => {
    if (isLoginRoute) {
      return (
        <Provider store={store}>
          <ThemeProvider>
            <LanguageProvider>
            <ToastContainer 
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              style={{ zIndex: 999999 }}
              toastClassName="!bg-green-600 !text-white"
            />
              <LoginPage />
            </LanguageProvider>
          </ThemeProvider>
        </Provider>
      );
    }
    return (
      <Provider store={store}>
        <ThemeProvider>
          <LanguageProvider>
            <MainLayout>
              {page}
            </MainLayout>
          </LanguageProvider>
        </ThemeProvider>
      </Provider>
    );
  };

  return getLayout(<Component {...pageProps} />);
}

