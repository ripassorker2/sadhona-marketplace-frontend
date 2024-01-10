"use client";
import JobDetailModal from "@/app/components/Modal/JobDetailsModal";
import React, {useState} from "react";

const AllJobs = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className=" grid md:grid-cols-2 gap-10 grid-cols-1">
            <div
                onClick={() => setShowModal(true)}
                className="dark:bg-primary2 shadow-md rounded-md px-5 py-7">
                <p className="text-sm pb-2">Posted on 54 min ago</p>
                <h2 className="sub-head font-semibold pb-1">
                    This is job title
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur animi necessitatibus iusto asperiores
                    dignissimos accusantium,....
                </p>
                <p className="font-semibold textGradient mt-1">
                    Fixed price : $23
                </p>
                <div className="flex space-y-2 space-x-2 -ml-2 flex-wrap uppercase">
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
                </div>
            </div>
            <div
                onClick={() => setShowModal(true)}
                className="dark:bg-primary2 shadow-md rounded-md px-5 py-7">
                <p className="text-sm pb-2">Posted on 54 min ago</p>
                <h2 className="sub-head font-semibold pb-1">
                    This is job title
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur animi necessitatibus iusto asperiores
                    dignissimos accusantium,....
                </p>
                <p className="font-semibold textGradient mt-1">
                    Fixed price : $23
                </p>
                <div className="flex space-y-2 space-x-2 -ml-2 flex-wrap uppercase">
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
                </div>
            </div>
            <div
                onClick={() => setShowModal(true)}
                className="dark:bg-primary2 shadow-md rounded-md px-5 py-7">
                <p className="text-sm pb-2">Posted on 54 min ago</p>
                <h2 className="sub-head font-semibold pb-1">
                    This is job title
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur animi necessitatibus iusto asperiores
                    dignissimos accusantium,....
                </p>
                <p className="font-semibold textGradient mt-1">
                    Fixed price : $23
                </p>
                <div className="flex space-y-2 space-x-2 -ml-2 flex-wrap uppercase">
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
                </div>
            </div>
            <div
                onClick={() => setShowModal(true)}
                className="dark:bg-primary2 shadow-md rounded-md px-5 py-7">
                <p className="text-sm pb-2">Posted on 54 min ago</p>
                <h2 className="sub-head font-semibold pb-1">
                    This is job title
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur animi necessitatibus iusto asperiores
                    dignissimos accusantium,....
                </p>
                <p className="font-semibold textGradient mt-1">
                    Fixed price : $23
                </p>
                <div className="flex space-y-2 space-x-2 -ml-2 flex-wrap uppercase">
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
                </div>
            </div>

            {showModal && (
                <JobDetailModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default AllJobs;
