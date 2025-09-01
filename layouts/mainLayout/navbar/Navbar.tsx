// import Link from "next/link";
// import { useState, useEffect, useRef } from "react";
// import { Home, Login } from "@/assets/common/icons"
// import { useRouter } from "next/router";
// import Button from "@/lib/components/base/Button";

// const Navbar = () => {
//   const router = useRouter();
//   const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const profileMenuRef = useRef<HTMLDivElement>(null);

//   const toggleProfileMenu = () => {
//     setIsProfileMenuOpen(!isProfileMenuOpen);
//   };

//   // Check if accessToken exists in localStorage
//   useEffect(() => {
//     const token = localStorage.getItem("testAccessToken");
//     setIsLoggedIn(!!token);
//   }, []);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         profileMenuRef.current &&
//         !profileMenuRef.current.contains(event.target as Node)
//       ) {
//         setIsProfileMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem("testAccessToken");
//     setIsLoggedIn(false);
//     setIsProfileMenuOpen(false);
//     router.push('/oto/login')
//   };

//   return (
//     <nav className="sticky top-0 z-50 bg-gray-50 shadow-md p-4">
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Left Section */}
//         <div className="flex items-center space-x-6">
//           <Link
//             href="/"
//             className="flex items-center space-x-2 text-lg font-semibold text-gray-800 hover:text-gray-600"
//           >
//             <Home />
//             <span>Home</span>
//           </Link>
//         </div>

//         {/* Right Section: Profile */}
//         <div className="relative" ref={profileMenuRef}>
//           {isLoggedIn ? (
//             <>
//               <button
//                 onClick={toggleProfileMenu}
//                 className="flex items-center space-x-2 text-gray-800 hover:text-gray-600 focus:outline-none"
//               >
//                 <img
//                   src="/images/Kia-EV6.avif"
//                   alt="Profile"
//                   className="w-8 h-8 rounded-full"
//                 />
//                 <span>OTO</span>
//               </button>

//               {/* Profile Dropdown */}
//               {isProfileMenuOpen && (
//                 <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow-lg w-40 z-50">
//                   <div className="p-4 border-b border-gray-200">
//                     <p className="font-semibold">OTO</p>
//                     <p className="text-gray-500">oto@gmail.com</p>
//                   </div>
//                   <Button
//                     onClick={handleSignOut}
//                     text="Sign Out"
//                     className="w-full px-4 py-2 text-left hover:bg-gray-100"
//                   />
//                 </div>
//               )}
//             </>
//           ) : (
//             <Link
//               href="/oto/login"
//               className="text-gray-800 font-semibold hover:text-gray-600 flex gap-2"
//             >
//               <Login/>
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client";

import Link from "next/link";
import { useLang } from '@/context/LanguageProvider';

export default function Navbar() {
  const { lang, toggleLang } = useLang();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value as 'en' | 'fa';
    if (selectedLang !== lang) {
      toggleLang();
    }
  };

  return (
    <header className="relative w-full bg-[#025E4E] text-white">
      {/* گرادیانت محو سمت چپ */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#2A2A2A] to-transparent pointer-events-none"></div>
      {/* گرادیانت محو سمت راست */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#2A2A2A] to-transparent pointer-events-none"></div>

      <nav className="container mx-auto flex items-center justify-between px-6 py-3 relative z-10">
        {/* لوگو */}
        <div className="text-2xl font-bold">
          <span className="text-white">bet</span>
          <span className="text-[#FFD700]">365</span>
        </div>

        {/* لینک‌ها */}
        <div className="flex gap-6 text-sm font-semibold">
          <Link
            href="#"
            className="hover:text-[#FFD700] relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full"
          >
            All Sports
          </Link>
          <Link
            href="#"
            className="hover:text-[#FFD700] relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#FFD700] after:transition-all hover:after:w-full"
          >
            Live In Game
          </Link>
        </div>

        {/* دکمه‌ها */}
        <div className="flex items-center gap-3">
          <button className="px-4 py-1 rounded-full border border-gray-400 text-sm hover:bg-gray-400 hover:text-[#025E4E] transition">
            Log In
          </button>
          <select
            value={lang}
            onChange={handleChange}
            className="px-3 py-1 rounded-md border border-gray-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="en">English</option>
            <option value="fa">فارسی</option>
          </select>
        </div>
      </nav>
    </header>
  );
}
