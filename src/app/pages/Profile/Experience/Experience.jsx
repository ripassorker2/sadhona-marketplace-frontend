"use client";
import ExperienceModal from "@/app/components/Modal/ExperienceModal";
import UpdateExperienceModal from "@/app/components/Modal/UpdateExperienceModal";
import {useState} from "react";
import {FaRegEdit} from "react-icons/fa";
import {MdOutlineWorkHistory, MdOutlineWorkOutline} from "react-icons/md";

const Experience = () => {
    const [showModal, setShowModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    return (
        <div className="dark:bg-primary2 shadow-md rounded-md  px-6 py-8 mb-10 relative">
            <h3 className="text-head text-lg font-semibold inline-flex items-center mb-2">
                <MdOutlineWorkOutline className="mr-2" /> Work Experience
            </h3>
            <div className=" flex space-x-4 justify-between items-center mb-2">
                <div className="flex space-x-2 mb-2">
                    <MdOutlineWorkHistory size={44} />
                    <div>
                        <p>Eduphy Academy</p>
                        <p>
                            Frontend Developer{" "}
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
                    <MdOutlineWorkHistory size={44} />
                    <div>
                        <p>Eduphy Academy</p>
                        <p>
                            Frontend Developer{" "}
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
                <ExperienceModal
                    setShowModal={setShowModal}
                    showModal={showModal}
                />
            )}
            {updateModal && (
                <UpdateExperienceModal
                    setShowModal={setUpdateModal}
                    showModal={updateModal}
                />
            )}
        </div>
    );
};

export default Experience;
