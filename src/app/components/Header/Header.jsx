"use client";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import logo from "../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import {IoMenu} from "react-icons/io5";
import {useUserContext} from "../../../context/AuthProvider";
import userImg from "../../../assets/user.jpeg";

import {CgProfile} from "react-icons/cg";
import {FiLogIn} from "react-icons/fi";
import {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {BsChat} from "react-icons/bs";

const manuItem = [
    {
        link: "/profile",
        name: "Profile",
        icon: <CgProfile className="mr-2 h-5 w-5" aria-hidden="true" />,
    },

    {
        link: "/chat",
        name: "Chat",
        icon: <BsChat className="mr-2 h-5 w-5" aria-hidden="true" />,
    },
];

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
                                    All Jobs
                                </Link>
                            </li>

                            {user?.email && (
                                <Menu
                                    as="div"
                                    className="relative inline-block mt-[6px]">
                                    <Menu.Button className="tooltip tooltip-left">
                                        <Image
                                            src={
                                                user.profileImage
                                                    ? user.profileImage
                                                    : userImg
                                            }
                                            className="rounded-full   w-[40px] h-[40px]"
                                            alt=""
                                            width={40}
                                            height={40}
                                        />
                                    </Menu.Button>

                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95">
                                        <Menu.Items className="absolute right-0 top-11  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md background primary-text shadow-lg dark:shadow-slate-800 dark:bg-gray-900 bg-white focus:outline-none">
                                            <div className="px-1 py-1 ">
                                                {manuItem?.map((item, i) => (
                                                    <Menu.Item key={i}>
                                                        {({active}) => (
                                                            <Link
                                                                href={`${item.link}`}
                                                                className={`${
                                                                    active
                                                                        ? "bg-[#00bd29] text-white"
                                                                        : ""
                                                                } group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                                                                {active ? (
                                                                    <span>
                                                                        {
                                                                            item.icon
                                                                        }
                                                                    </span>
                                                                ) : (
                                                                    <span>
                                                                        {
                                                                            item.icon
                                                                        }
                                                                    </span>
                                                                )}
                                                                {item.name}
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                                <Menu.Item>
                                                    {({active}) => (
                                                        <div
                                                            onClick={() => {
                                                                setToken("");
                                                                localStorage.removeItem(
                                                                    "accessToken"
                                                                );
                                                            }}
                                                            className={`${
                                                                active
                                                                    ? "bg-[#00bd29] text-white"
                                                                    : ""
                                                            } group flex w-full items-center rounded-md px-2 py-2 text-base`}>
                                                            {active ? (
                                                                <FiLogIn
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            ) : (
                                                                <FiLogIn
                                                                    className="mr-2 h-5 w-5"
                                                                    aria-hidden="true"
                                                                />
                                                            )}
                                                            Log out
                                                        </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            )}

                            <div className="mt-3">
                                <ThemeSwitcher />
                            </div>

                            {!user?.email && (
                                <li>
                                    <Link
                                        className="btn-primary text-gray-800"
                                        href={"/login"}>
                                        Login
                                    </Link>
                                </li>
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
