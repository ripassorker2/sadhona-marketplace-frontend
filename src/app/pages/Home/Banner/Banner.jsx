/* eslint-disable react/no-unescaped-entities */
import React from "react";
import img from "../../../../assets/banner.jpg";
import Image from "next/image";

const Banner = () => {
    return (
        <div className="dark:bg-gradient-to-b from-blue/[.12] via-transparent">
            <div className="md:py-28 py-16">
                <div className=" container  flex md:flex-row flex-col-reverse justify-between items-center md:space-x-10">
                    <div className="md:w-[50%] md:mt-0 mt-8">
                        <h1 className="block font-medium textGradient lg:text-6xl md:text-5xl text-4xl">
                            Find great work.
                        </h1>
                        <div className=" py-3">
                            <p className="text-lg dark:text-darkText2 text-whiteText2">
                                Empower freelancers and businesses alike by
                                providing a dynamic and user-friendly online
                                marketplace, MarkerPal, fostering a thriving
                                ecosystem where professionals can seamlessly
                                connect, collaborate, and thrive in their
                                freelancing endeavors.
                            </p>
                        </div>
                        <div className="">
                            <button className="btn-primary">Ger Started</button>
                        </div>
                    </div>
                    <div className="md:w-[50%]">
                        <Image
                            src={img}
                            alt="banner-image"
                            className="rounded"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
