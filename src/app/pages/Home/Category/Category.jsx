"use client";
import Container from "@/utils/Container";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("category.json")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    return (
        <Container>
            <div className="">
                <h2 className="heading text-start ">
                    Browse <span>talent by</span> category
                </h2>
                <p className="pb-10 dark:text-darkText2 text-whiteText2">
                    <span>Looking for work? Browse jobs...</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center gap-10 ">
                    {categories?.map((category, i) => (
                        <Link
                            href={`${category.name}`}
                            key={i}
                            className="w-full h-[150px] bg-white shadow flex items-center  rounded-lg dark:shadow-gray-600 duration-500 px-6 py-8 dark:bg-primary2 ">
                            <div>
                                <h3 className="block text-xl font-semibold text-head  pb-1">
                                    {category.name}
                                </h3>

                                <p>
                                    <span> Find jobs......</span>
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Category;
