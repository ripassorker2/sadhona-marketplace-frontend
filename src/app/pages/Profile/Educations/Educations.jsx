"use client";
import EducationModal from "@/app/components/Modal/EducationMpdal";
import UpdateEducationModal from "@/app/components/Modal/UpdateEducationModal";
import React, {useState} from "react";
import {FaRegEdit, FaUniversity} from "react-icons/fa";

import {MdOutlineCastForEducation} from "react-icons/md";

const Educations = () => {
    const [showModal, setShowModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    return (
        <div className="dark:bg-primary2 shadow-md rounded-md  px-6 py-8 mb-10 relative">
            <h3 className="text-head text-lg font-semibold inline-flex items-center mb-2">
                <MdOutlineCastForEducation className="mr-2" /> Educations
            </h3>

            <div className=" flex space-x-4 justify-between items-center mb-2">
                <div className="flex space-x-2 mb-2">
                    <FaUniversity size={44} />
                    <div>
                        <p>Dhaka International University.</p>
                        <p>
                            Computer Science{" "}
                            <span className="text-sm">
                                {" "}
                                January 2022 - Jan 2023
                            </span>{" "}
                        </p>
                    </div>
                </div>
                <FaRegEdit
                    onClick={() => setUpdateModal(true)}
                    className="text-green "
                    size={20}
                />
            </div>
            <div className=" flex space-x-4 justify-between items-center mb-2">
                <div className="flex space-x-2 mb-2">
                    <FaUniversity size={44} />
                    <div>
                        <p>Dhaka International University.</p>
                        <p>
                            Computer Science{" "}
                            <span className="text-sm">
                                {" "}
                                January 2022 - Jan 2023
                            </span>{" "}
                        </p>
                    </div>
                </div>
                <FaRegEdit
                    onClick={() => setUpdateModal(true)}
                    className="text-green "
                    size={20}
                />
            </div>
            <div
                onClick={() => setShowModal(true)}
                className="text-green hover:underline text-lg">
                Add new +
            </div>

            {showModal && (
                <EducationModal
                    setShowModal={setShowModal}
                    showModal={showModal}
                />
            )}
            {updateModal && (
                <UpdateEducationModal
                    setShowModal={setUpdateModal}
                    showModal={updateModal}
                />
            )}
        </div>
    );
};

export default Educations;
