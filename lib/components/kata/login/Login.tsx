import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ILoginState } from "@/interface/component/kata.interface";
import Button from "../../base/Button";
import Input from "../../base/Input";
import { LoginInfo } from "@/i18n/components/kata/login.i18n";
import { useTranslation } from '@/helper/translate';

const Login = () => {
    const router = useRouter();
    const { t } = useTranslation();

    //login details
    const correctUsername = "kata";
    const correctPassword = "kata123";

    const [state, setState] = useState<ILoginState>({
        username: "",
        password: "",
        error: "",
    });

    // check auth details and get access
    const handleLogin = () => {
        if (state.username === correctUsername && state.password === correctPassword) {
            localStorage.setItem("testAccessToken", "randomAccessToken12345");
            router.push("/");
        } else {
            setState((prev) => ({ ...prev, error: t(LoginInfo.error)}));
        }
    };

    // check localStorage and navigate to home
    useEffect(() => {
        const token = localStorage.getItem("testAccessToken");
        if (token) {
            router.push("/");
        }
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center text-gray-800">{t(LoginInfo.login)}</h2>

                {/* error message */}
                {state.error && (
                    <div className="bg-red-100 text-red-700 p-2 rounded mt-4 text-sm">
                        {state.error}
                    </div>
                )}

                {/* usename input */}
                <div className="mt-6">
                    <Input
                        type="text"
                        label={t(LoginInfo.username)}
                        className="w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
                        value={state.username}
                        onChange={(e) =>
                            setState((prev) => ({ ...prev, username: e.target.value }))
                        }
                        placeholder={t(LoginInfo.enterUsername)}
                    />
                </div>

                {/* password input */}
                <div className="mt-4">
                    <Input
                        label={t(LoginInfo.password)}
                        type="password"
                        className="w-full rounded focus:outline-none focus:ring focus:ring-blue-300"
                        value={state.password}
                        onChange={(e) =>
                            setState((prev) => ({ ...prev, password: e.target.value }))
                        }
                        placeholder={t(LoginInfo.enterPassword)}
                    />
                </div>

                {/* submit button */}
                <Button
                    text={t(LoginInfo.login)}
                    className="w-full bg-blue-500 text-white mt-6 py-2 rounded hover:bg-blue-600 transition duration-200"
                    onClick={handleLogin}
                />
            </div>
        </div>
    );
};

export default Login;
