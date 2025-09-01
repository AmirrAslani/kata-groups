import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useLang } from '@/context/LanguageProvider';
import { NavbarInfo } from "@/i18n/layouts/navbar.i18n";
import { useTranslation } from '@/helper/translate';
import Button from "@/lib/components/base/Button";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "@/redux/store";
import { toggleDarkMode } from "@/redux/slices/themeSlice";

export default function Navbar() {
  const dispatch = useAppDispatch();
  const darkMode = useSelector((state: RootState) => state.theme.darkMode);

  const { lang, toggleLang } = useLang();
  const { t } = useTranslation();
  const router = useRouter();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Check if accessToken exists in localStorage
  useEffect(() => {
    const token = localStorage.getItem("testAccessToken");
    setIsLoggedIn(!!token);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("testAccessToken");
    setIsLoggedIn(false);
    setIsProfileMenuOpen(false);
    router.push('/kata/login')
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value as 'en' | 'fa';
    if (selectedLang !== lang) {
      toggleLang();
    }
  };

  return (
    <header className="relative w-full bg-[#025E4E] text-white">
      <div className="absolute left-0 top-0 h-full w-50 bg-gradient-to-r from-[#2A2A2A] to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 h-full w-50 bg-gradient-to-l from-[#2A2A2A] to-transparent pointer-events-none"></div>

      <nav className="container mx-auto flex items-center justify-between px-6 py-5 relative z-10">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div>
            <span className="text-white text-2xl font-bold">bet</span>
            <span className="text-[#FFD700] text-2xl font-bold">365</span>
          </div>
          <Button text={darkMode ? "🌙 Dark" : "☀️ Light"}
            onClick={() => dispatch(toggleDarkMode())}
            className="px-2 py-1 rounded border border-gray-400 transition-colors cursor-pointer" />

        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 text-sm font-semibold">
          <Link
            href="/"
            className="hover:text-[#FFD700] relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full"
          >
            {t(NavbarInfo.allSports)}
          </Link>
          <Link
            href="/"
            className="hover:text-[#FFD700] relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full"
          >
            {t(NavbarInfo.liveInGame)}
          </Link>
        </div>

        {/* Desktop Right Section */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Selector */}
          <select
            value={lang}
            onChange={handleChange}
            className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
          </select>

          {/* Profile/Login Section */}
          <div className="relative" ref={profileMenuRef}>
            {isLoggedIn ? (
              <>
                <button
                  onClick={toggleProfileMenu}
                  className="flex items-center space-x-2 text-white hover:text-[#FFD700] focus:outline-none"
                >
                  <img
                    src="/images/user.png"
                    alt="Profile"
                    className="w-8 h-8 rounded-full cursor-pointer"
                  />
                  <span>Kata</span>
                </button>

                {/* Profile Dropdown */}
                {isProfileMenuOpen && (
                  <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-40 z-50">
                    <div className="p-4 border-b border-gray-200">
                      <p className="font-semibold">kata</p>
                      <p className="text-gray-500">kata@gmail.com</p>
                    </div>
                    <Button
                      onClick={handleSignOut}
                      text={t(NavbarInfo.signOut)}
                      className="w-full px-4 py-2 hover:bg-gray-100"
                    />
                  </div>
                )}
              </>
            ) : (
              <Link
                href="/kata/login"
                className="px-4 py-1 rounded-full border border-gray-400 text-sm hover:bg-gray-200 hover:text-[#025E4E] transition"
              >

                {t(NavbarInfo.login)}
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          {/* Language Selector for Mobile */}
          <select
            value={lang}
            onChange={handleChange}
            className="px-2 py-1 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-xs"
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
          </select>

          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-[#FFD700] focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="md:hidden bg-[#025E4E] border-t border-[#014736] absolute w-full z-50"
        >
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Navigation Links */}
            <Link
              href="/"
              className="text-white hover:text-[#FFD700] block py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(NavbarInfo.allSports)}
            </Link>
            <Link
              href="/"
              className="text-white hover:text-[#FFD700] block py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t(NavbarInfo.liveInGame)}
            </Link>

            {/* Mobile Profile/Login Section */}
            <div className="pt-4 border-t border-[#014736]">
              {isLoggedIn ? (
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-white">
                    <img
                      src="/images/user.png"
                      alt="Profile"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="font-semibold">kata</span>
                  </div>
                  <div>
                    <span className="text-gray-300 text-sm">kata@gmail.com</span>
                  </div>
                  <Button
                    onClick={handleSignOut}
                    text={t(NavbarInfo.signOut)}
                    className="w-full px-4 py-2 hover:bg-[#014736] cursor-pointer"
                  />
                </div>
              ) : (
                <Link
                  href="/kata/login"
                  className="text-white font-semibold hover:text-[#FFD700] flex gap-2 items-center py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >

                  {t(NavbarInfo.login)}
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
