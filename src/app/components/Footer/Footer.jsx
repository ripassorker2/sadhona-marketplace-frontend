import Image from "next/image";
import logo from "../../../assets/logo.png";
import Link from "next/link";
import {IoIosCall} from "react-icons/io";
import {IoMail} from "react-icons/io5";
import {FaLocationDot} from "react-icons/fa6";

import {
    FaFacebook,
    FaInstagramSquare,
    FaYoutube,
    FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" dark:bg-[#001d30] bg-primary text-darkText">
            <div className="py-16">
                <div className="container flex flex-col justify-between  space-y-8 md:flex-row lg:space-y-0">
                    <div className="md:w-[26%]">
                        <div>
                            <Image
                                height={140}
                                width={110}
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <p className="desc pt-3 text-sm text-darkText">
                            We are here to share our skills, techniques and
                            educational knowledge for the future.
                        </p>
                        <div className="flex pt-3">
                            <a
                                href="https://www.facebook.com/edupyacademy"
                                target="_blank">
                                <FaFacebook className="text-lg mr-4 hover:text-green duration-300" />
                            </a>
                            <a
                                href="https://www.instagram.com/edupyacademy/?hl=en"
                                target="_blank">
                                <FaInstagramSquare className="text-lg mr-4 hover:text-green duration-300" />
                            </a>

                            <a href="" target="_blank">
                                <FaLinkedinIn className="text-lg mr-4 hover:text-green duration-300" />
                            </a>

                            <a
                                href="https://www.youtube.com/@Edupybd"
                                target="_blank">
                                <FaYoutube className="text-lg mr-4 hover:text-green duration-300" />
                            </a>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 text-sm gap-x-3 gap-y-8 md:w-[74%] md:ml-10 md:grid-cols-3">
                        <div className="space-y-3">
                            <h3 className="text-blue uppercase font-semibold">
                                Policy
                            </h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link
                                        className="hover:text-green duration-300"
                                        href={"/"}>
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-green duration-300"
                                        href={"/"}>
                                        Refund Policy
                                    </Link>
                                </li>{" "}
                                <li>
                                    <Link
                                        className="hover:text-green duration-300"
                                        href={"/"}>
                                        Terms & Condition
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-green duration-300"
                                        href={"/"}>
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-blue uppercase font-semibold">
                                QUICK LINK
                            </h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link
                                        className="hover:text-green duration-300"
                                        href={"/"}>
                                        Blogs
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-green duration-300"
                                        href={"/"}>
                                        Free Live Class
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-green duration-300"
                                        href={"/"}>
                                        Upcomming Live Batch
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-green duration-300"
                                        href={"/"}>
                                        Live Workshop
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="hover:text-green duration-300"
                                        href={"/"}>
                                        All Courses
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h3 className="text-blue uppercase font-semibold">
                                CONTACT US
                            </h3>
                            <div className="space-y-1">
                                <div className="flex pt-2">
                                    <IoIosCall className="text-lg mr-2" />
                                    <p>+880 1315851280</p>
                                </div>
                                <div className="flex pt-2">
                                    <IoMail className="text-lg mr-2" />
                                    <p>ceo.edupybd@gmail.com</p>
                                </div>
                                <div className="flex pt-2">
                                    <FaLocationDot className="text-lg mr-2" />
                                    <p>Mirpur,Dhaka 1216, Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6 text-sm text-center dark:bg-primary bg-[#001d30]">
                Copyright © 2023 by Edupy Academy All rights reserved
            </div>
        </footer>
    );
};

export default Footer;
