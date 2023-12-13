import React from "react";

export default function Footer() {
    return (
        <div className="mt-10 h-24 bg-gray-800 p-8 pb-10">
            <footer className="mx-auto flex max-w-4xl flex-row">
                <ul className="flex items-center mx-auto flex-wrap mb-6 md:mb-0">
                    <li><p className="md:text-xs lg:text-lg font-normal text-white hover:underline mr-4 md:mr-6">Copyright © 2022-2023 Victor Zarzar. | All rights reserved.</p></li>
                </ul>
            </footer>
        </div>
    )
}
