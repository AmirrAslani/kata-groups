import "@/styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import type { AppProps } from "next/app";
import MainLayout from "@/layouts/mainLayout/MainLayout";
import { useRouter } from "next/router";
import LoginPage from "./kata/login";
import { LanguageProvider } from "@/context/LanguageProvider";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isLoginRoute = router.pathname.startsWith("/kata/login");

  const getLayout = (page: React.ReactNode) => {
    if (isLoginRoute) {
      return (
        <LanguageProvider>
          <LoginPage />
        </LanguageProvider>
      );
    }
    return (
      <LanguageProvider>
      <MainLayout>
        <ToastContainer rtl className="z-9999" />
        {page}
      </MainLayout>
      </LanguageProvider>
    );
  };

  return getLayout(<Component {...pageProps} />);
}

