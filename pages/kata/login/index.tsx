import Login from '@/lib/components/kata/login/Login';
import { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';
export default function LoginPage() {
  return (
    <>
      <Login />
    </>
  );
}

LoginPage.getLayout = function PageLayout(page: ReactElement) {
  return (
    <>
      <ToastContainer/>
      {page}
    </>
  )
}