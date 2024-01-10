"use client";
import {resistationSchema} from "@/schemas";
import {useFormik} from "formik";
import Link from "next/link";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

const RegisterRole = ({params}) => {
    const router = useRouter();
    const initialResisterValues = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const {values, errors, touched, handleBlur, handleChange, handleSubmit} =
        useFormik({
            initialValues: initialResisterValues,
            validationSchema: resistationSchema,
            onSubmit: async (values, action) => {
                const {name, email, password} = values;
                try {
                    const response = await fetch(
                        `${process.env.BASE_URL}/user/create`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                name,
                                email,
                                password,
                                role: params.role,
                            }),
                        }
                    );
                    const data = await response.json();
                    if (data.success) {
                        toast.success("Account created successfully.");
                        action.resetForm();
                        router.push("/login");
                    } else {
                        toast.error(data.message);
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        });

    return (
        <div className="py-12">
            <div className="container">
                <div className=" flex h-full items-center">
                    <div className="w-full max-w-md mx-auto p-6">
                        <div className="mt-7 bg-white dark:bg-primary2 border  rounded-xl shadow-lg  dark:border-gray-900">
                            <div className="p-4 sm:p-7">
                                <div className="text-center">
                                    <h2 className="block text-2xl font-bold text-gray-800 dark:text-white">
                                        Sign up on <span>Sadhona</span> as a{" "}
                                        <br /> <span>{params.role}.</span>
                                    </h2>
                                </div>

                                <div className="mt-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid gap-y-4 text-base ">
                                            <div>
                                                <label
                                                    htmlFor="email"
                                                    className="block  mb-2 dark:text-white">
                                                    Full Name
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        className="py-3 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                        placeholder="Enter your full name..."
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />

                                                    {errors.name &&
                                                        touched.name && (
                                                            <p className="text-red-500">
                                                                {" "}
                                                                {errors.name}
                                                            </p>
                                                        )}
                                                </div>
                                            </div>
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
                                                        placeholder="Enter your  work email..."
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
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name="password"
                                                        className="py-3 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                        placeholder="Enter your password..."
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
                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <label
                                                        htmlFor="password"
                                                        className="block  mb-2 dark:text-white">
                                                        Confirm Password
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <input
                                                        type="password"
                                                        id="confirmPassword"
                                                        name="confirmPassword"
                                                        className="py-3 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                        placeholder="Confirm your password..."
                                                        value={
                                                            values.confirmPassword
                                                        }
                                                        onChange={handleChange}
                                                        onBlur={handleBlur}
                                                        required
                                                    />
                                                    {errors.confirmPassword &&
                                                        touched.confirmPassword && (
                                                            <p className="text-red-500">
                                                                {
                                                                    errors.confirmPassword
                                                                }
                                                            </p>
                                                        )}
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn-primary inline-flex justify-center items-center w-full text-gray-900">
                                                Sign Up Now
                                            </button>
                                            <div className="mt-1">
                                                <p className=" dark:text-darkText text-gray-900">
                                                    Already have an account?{" "}
                                                    <Link
                                                        href="/login"
                                                        className="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1">
                                                        <span>
                                                            {" "}
                                                            Login here.
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

export default RegisterRole;
