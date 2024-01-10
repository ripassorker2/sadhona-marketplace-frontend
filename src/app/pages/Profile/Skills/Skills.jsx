"use client";

import SkillModal from "@/app/components/Modal/SkillModal";
import React, {useState} from "react";
import {FaRegEdit} from "react-icons/fa";
import {GiSkills} from "react-icons/gi";

const Skills = () => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="dark:bg-primary2 shadow-md rounded-md  px-6 py-8 mb-10 relative">
            <FaRegEdit
                onClick={() => setShowModal(true)}
                className="text-green absolute top-4 right-4"
                size={20}
            />
            <h3 className="text-head text-lg font-semibold inline-flex items-center mb-2">
                <GiSkills className="mr-2" /> My Skils
            </h3>

            <div className="flex space-y-2 space-x-2 flex-wrap uppercase">
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
                    HTML5
                </button>
                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                    CSS3
                </button>
                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                    react js
                </button>
                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                    javascript
                </button>
                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                    HTML5
                </button>
                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                    CSS3
                </button>
                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                    react js
                </button>
                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                    javascript
                </button>
            </div>
            {showModal && (
                <SkillModal showModal={showModal} setShowModal={setShowModal} />
            )}
        </div>
    );
};

export default Skills;
