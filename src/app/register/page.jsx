"use client";
import {useUserContext} from "@/context/AuthProvider";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const RegisterPage = () => {
    const {token} = useUserContext();
    const router = useRouter();
    useEffect(() => {
        if (token) {
            router.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);
    return (
        <div className="md:py-28 py-12">
            <div className="container">
                <h2 className="text-center md:text-5xl text-3xl">
                    Join as a <span>client</span> or <span>freelancer</span>
                </h2>
                <div className="flex items-center justify-center">
                    <div className="mt-10 flex space-x-6">
                        <Link
                            href={"/register/client"}
                            className="text-xl border dark:border-gray-800 hover:border-green  shadow-md hover:shadow-xl duration-300 dark:shadow-none p-12 rounded-md">
                            Join as a <br /> client.
                        </Link>
                        <Link
                            href={"/register/freelancer"}
                            className="text-xl border dark:border-gray-800 hover:border-green  shadow-md hover:shadow-xl duration-300 dark:shadow-none p-12 rounded-md">
                            Join as a <br /> freelancer.
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
