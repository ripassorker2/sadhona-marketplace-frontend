import Image from "next/image";
import {IoLocation} from "react-icons/io5";
import {MdOutlineCancel} from "react-icons/md";
import img from "../../../assets/team/kamrul.jpg";

const JobDetailModal = ({showModal, setShowModal}) => {
    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex  max-h-[600px] ">
                    <div className="fixed inset-[20px] bottom-0 md:top-[88px] top-[80px] overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 md:mx-auto mx-4 max-w-4xl ">
                            {/*content*/}
                            <div className=" rounded-md shadow-lg relative flex flex-col w-full p-5 dark:bg-primary2 bg-secondaryBg text-normal">
                                {/*header*/}
                                <div className="flex items-center justify-between   border-b  dark:border-gray-700 border-gray-500">
                                    <h3 className="md:text-2xl pb-2 text-lg font-semibold text-head">
                                        Website development
                                    </h3>
                                    <button onClick={() => setShowModal(false)}>
                                        <MdOutlineCancel className="text-green md:text-2xl text-xl" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="pt-4 grid md:grid-cols-3 gap-8">
                                    <div className="md:col-span-2">
                                        <div className="md:flex space-x-6 items-center text-sm">
                                            <p className=" pb-2">
                                                Posted on 54 min ago
                                            </p>
                                            <div className="flex items-center">
                                                <IoLocation
                                                    className="mr-1"
                                                    size={16}
                                                />{" "}
                                                <p>Dhaka bangladesh.</p>
                                            </div>
                                        </div>
                                        <div className="mt-6">
                                            <p>
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Cumque nostrum perspiciatis id
                                                veniam eos blanditiis saepe
                                                culpa sequi eius, ab facilis!
                                                Odio accusantium sed voluptas
                                                ipsam, veritatis explicabo
                                                dolores magnam?
                                            </p>
                                        </div>
                                        <div className="mt-6 text-lg">
                                            <p className="font-semibold">
                                                <span>Fixed price : $50.0</span>
                                            </p>
                                        </div>
                                        <div className="mt-4 md:flex space-x-6 items-center font-medium">
                                            <p className=" ">
                                                Level : Intermidiate
                                            </p>
                                            <p>Job type : remote</p>
                                        </div>
                                        <div className="mt-6">
                                            <h2 className="text-head text-xl ">
                                                {" "}
                                                Require slills
                                            </h2>
                                            <div className="flex space-y-2 space-x-2 -ml-2 flex-wrap uppercase ">
                                                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1 hidden">
                                                    CSS3
                                                </button>
                                                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                                                    react js
                                                </button>
                                                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                                                    javascript
                                                </button>
                                                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                                                    react js
                                                </button>
                                                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                                                    javascript
                                                </button>
                                                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                                                    javascript
                                                </button>
                                                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                                                    react js
                                                </button>
                                                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                                                    javascript
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-1">
                                        <div>
                                            <p className="font-semibold mb-2">
                                                {" "}
                                                The job posted by{" "}
                                            </p>
                                            <Image
                                                src={img}
                                                className="w-20 h-20 rounded-full mt-8 object-cover"
                                                alt="client picture"
                                            />
                                            <h2 className="sub-head text-lg font-medium mt-2">
                                                Md. Maruf Hasan
                                            </h2>
                                            <p>From : Dinajpur, Bangladesh</p>
                                        </div>
                                        <div className="mt-8">
                                            <button className="btn-primary w-full">
                                                Apply Now{" "}
                                            </button>
                                            <button className="btn-primary w-full my-4 bg-blue hover:bg-blue text-secondaryBg">
                                                Message
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-60 fixed inset-0 z-[999999] bg-black"></div>{" "}
                </div>
            )}
        </>
    );
};

export default JobDetailModal;
