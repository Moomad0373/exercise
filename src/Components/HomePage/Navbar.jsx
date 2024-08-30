import React from "react";

const Navbar = () => {
    return (
        <header className="bg-gray-200 flex container mt-5 py-2 h-20 text-zinc-700">
            <div className="flex flex-1 ps-10 items-center">
                <img src="https://next.aglietech.wowtheme7.com/assets/img/logo.png" alt="logo" />
            </div>
            <nav className="flex invisible md:visible md:flex-[2] lg:flex-[3] justify-end items-center pe-20 font-semibold">
                <ul className="flex gap-x-11 child-hover:text-blue-700 transition-all">
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">service</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>
                    <li>
                        <a href="">Mega Menu</a>
                    </li>
                    <li>
                        <a href="">Contact Us</a>
                    </li>
                    <li>
                        <a href="">About Us</a>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-1 items-center gap-x-4 bg-blue-600 text-white ps-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                </svg>

                <div className="flex flex-col">
                    <span>Need help?</span>
                    <span>(808) 555-0111</span>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
