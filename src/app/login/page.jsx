/* eslint-disable react/no-unescaped-entities */
"use client";
import {useUserContext} from "@/context/AuthProvider";
import {loginSchema} from "@/schemas";
import {useFormik} from "formik";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import toast from "react-hot-toast";

const LoginPage = () => {
    const {setToken, setLoading, token} = useUserContext();
    const router = useRouter();
    const initialResisterValues = {
        email: "",
        password: "",
    };
    useEffect(() => {
        if (token) {
            router.push("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token]);

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: initialResisterValues,
            validationSchema: loginSchema,
            onSubmit: async (values, action) => {
                setLoading(true);
                const {email, password} = values;
                try {
                    const response = await fetch(
                        `${process.env.BASE_URL}/auth/login`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email,
                                password,
                            }),
                        }
                    );
                    const data = await response.json();
                    if (data.success) {
                        toast.success("Login successfully.");
                        localStorage.setItem(
                            "accessToken",
                            data.data.accessToken
                        );
                        setToken(data.data.accessToken);
                        router.push("/");
                        setLoading(false);
                        action.resetForm();
                    } else {
                        setLoading(false);
                        toast.error(data.message);
                    }
                } catch (error) {
                    setLoading(false);
                    console.log(error);
                }
            },
        });
    return (
        <div className=" py-12">
            <div className="container ">
                <div className=" flex h-full items-center">
                    <div className="w-full max-w-md mx-auto p-6">
                        <div className="mt-7 bg-white dark:bg-primary2 border  rounded-xl shadow-lg  dark:border-gray-900">
                            <div className="p-4 sm:p-7">
                                <div className="text-center">
                                    <h2 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                        Sign in on{" "}
                                        <span className="textGradient">
                                            Sadhona
                                        </span>
                                    </h2>
                                </div>

                                <div className="mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-y-4 text-base ">
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block  mb-2 dark:text-white">
                                                    Email address
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        className="py-3 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                        value={values.email}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    {errors.email &&
                                                        touched.email && (
                                                            <p className="text-red-500">
                                                                {" "}
                                                                {errors.email}
                                                            </p>
                                                        )}
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <label
                                                        htmlFor="password"
                                                        className="block  mb-2 dark:text-white">
                                                        Password
                                                    </label>
                                                    <a className="text-sm text-blue-600 decoration hover:underline font-medium ">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className="py-3 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                        value={values.password}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    {errors.password &&
                                                        touched.password && (
                                                            <p className="text-red-500">
                                                                {" "}
                                                                {
                                                                    errors.password
                                                                }
                                                            </p>
                                                        )}
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn-primary inline-flex justify-center items-center w-full text-gray-900">
                                                Sign in
                                            </button>
                                            <div className="mt-1">
                                                <p className=" dark:text-darkText text-gray-900">
                                                    Don't have an account yet?{" "}
                                                    <Link
                                                        href="/register"
                                                        className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1">
                                                        <span>
                                                            {" "}
                                                            Sign up here
                                                        </span>
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
