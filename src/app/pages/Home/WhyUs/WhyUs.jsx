/* eslint-disable react/no-unescaped-entities */
import Container from "@/utils/Container";
import img from "../../../../assets/comfuseed.jpg";
import Image from "next/image";

const WhyUs = () => {
    return (
        <Container>
            <div className="">
                <div className=" mx-auto mb-10 lg:mb-14">
                    <h2 className="heading text-start">
                        Why businesses turn <br /> to <span> Sadhona.</span>
                    </h2>
                </div>

                <div className="md:grid grid-cols-2 gap-10 items-center place-content-center">
                    <div>
                        <Image
                            src={img}
                            className="rounded w-full  md:h-[450px]"
                            alt="confused"
                        />
                    </div>
                    <div className="md:mt-0 mt-8 divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="py-8 first:pt-0 last:pb-0">
                            <div className="flex gap-x-5">
                                <svg
                                    className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>

                                <div>
                                    <h3 className="md:text-lg font-semibold dark:text-darkText text-whiteText">
                                        Proof of quality
                                    </h3>
                                    <p className="mt-1  dark:text-darkText2 text-whiteText2">
                                        Check any pro’s work samples, client
                                        reviews, and identity verification.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 first:pt-0 last:pb-0">
                            <div className="flex gap-x-5">
                                <svg
                                    className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>

                                <div>
                                    <h3 className="md:text-lg font-semibold dark:text-darkText text-whiteText">
                                        No cost until you hire
                                    </h3>
                                    <p className="mt-1  dark:text-darkText2 text-whiteText2">
                                        Interview potential fits for your job,
                                        negotiate rates, and only pay for work
                                        you approve.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 first:pt-0 last:pb-0">
                            <div className="flex gap-x-5">
                                <svg
                                    className="flex-shrink-0 mt-1 w-6 h-6 text-gray-500"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                    <path d="M12 17h.01" />
                                </svg>

                                <div>
                                    <h3 className="md:text-lg font-semibold dark:text-darkText text-whiteText">
                                        Safe and secure
                                    </h3>
                                    <p className="mt-1  dark:text-darkText2 text-whiteText2">
                                        Focus on your work knowing we help
                                        protect your data and privacy. We’re
                                        here with 24/7 support if you need it.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default WhyUs;
