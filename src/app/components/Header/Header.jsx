"use client";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import {IoMenu} from "react-icons/io5";
import {useUserContext} from "../../../context/AuthProvider";
import userImg from "../../../assets/user.jpeg";

const Header = () => {
    const {user, setToken} = useUserContext();

    return (
        <header className="dark:bg-[#001d30] bg-gray-100 sticky top-0 z-[99999]">
            <div className="container">
                <div className="flex justify-between items-center py-6">
                    <Link
                        href={"/"}
                        className="flex items-center justify-between">
                        <Image src={logo} height={100} width={110} alt="logo" />
                    </Link>

                    <div className="hidden md:block">
                        <ul className="flex items-center justify-center space-x-8">
                            <li>
                                <Link
                                    className="text-primary dark:text-darkText hover:text-blue text-base dark:hover:text-blue duration-300 "
                                    href={"/"}>
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-primary dark:text-darkText hover:text-blue text-base dark:hover:text-blue duration-300 "
                                    href={"/jobs"}>
                                    Jobs
                                </Link>
                            </li>

                            {user?.email && (
                                <li>
                                    <Link
                                        className="text-primary dark:text-darkText hover:text-blue text-base dark:hover:text-blue duration-300 "
                                        href={"/chat"}>
                                        Message
                                    </Link>
                                </li>
                            )}

                            <div className="mt-3">
                                <ThemeSwitcher />
                            </div>

                            {user?.email && (
                                <li>
                                    <Link
                                        className="text-primary dark:text-darkText hover:text-blue text-base dark:hover:text-blue duration-300 mt-3"
                                        href={"/profile"}>
                                        <Image
                                            alt="user image"
                                            src={userImg}
                                            className="h-6 w-6 rounded-full"
                                        />
                                    </Link>
                                </li>
                            )}

                            {!user?.email ? (
                                <li>
                                    <Link
                                        className="btn-primary text-gray-800"
                                        href={"/login"}>
                                        Login
                                    </Link>
                                </li>
                            ) : (
                                <div>
                                    <button
                                        onClick={() => {
                                            setToken("");
                                            localStorage.removeItem(
                                                "accessToken"
                                            );
                                        }}
                                        className="btn-primary text-gray-800">
                                        Logout
                                    </button>
                                </div>
                            )}
                        </ul>
                    </div>
                    <div className="md:hidden block">
                        <IoMenu size={28} className="mr-2" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
