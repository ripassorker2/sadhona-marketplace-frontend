"use client";
import Container from "@/utils/Container";
import Image from "next/image";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const CategoryDetailsPage = ({params}) => {
    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        fetch("categoryChild.json")
            .then((res) => res.json())
            .then((data) => setCategoryItems(data));
    }, []);

    let currentItems;
    currentItems = categoryItems.filter(
        (item) => parseInt(item.categoryId) == parseInt(params.categoryId)
    );
    const encodedString = params?.categoryId;
    const decodedString = decodeURIComponent(encodedString);

    return (
        <Container>
            <div className=" grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 ">
                {decodedString}
                {currentItems?.map((item, i) => (
                    <div key={i} className="group">
                        <Link
                            href={""}
                            className="group  p-4 md:p-5 flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-primary2 dark:border-gray-800 ">
                            <figure className="h-[200px] w-full overflow-hidden">
                                <Image
                                    src={item.img}
                                    className=" h-[200px] group-hover:scale-110   w-full object-cover rounded-lg duration-300 overflow-hidden "
                                    alt=""
                                    width={300}
                                    height={200}
                                />
                            </figure>
                            <div className="py-2">
                                <h3 className="mt-2 text-lg font-medium  textGradient">
                                    {item.title}
                                </h3>
                                <p className="dark:text-darkText2 text-whiteText2 ">
                                    {params?.categoryId}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Container>
    );
};

export default CategoryDetailsPage;
