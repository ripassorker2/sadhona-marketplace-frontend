"use client";
import Image from "next/image";
import React, {useState} from "react";
import img from "../../../../assets/team/tanha.jpg";
import {FaFacebook, FaRegEdit} from "react-icons/fa";
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa6";
import UpdatePersonalInfo from "@/app/components/Modal/UpdatePersonalInfo";

const PersonalInfo = () => {
    const [updatePersonalInfoModal, updatePersonalInfoSetModal] =
        useState(false);
    return (
        <div className="dark:bg-primary2 shadow-md  rounded-md px-6 py-10 relative">
            <FaRegEdit
                className="text-green absolute top-4 right-4"
                size={20}
                onClick={() => updatePersonalInfoSetModal(true)}
            />
            <div>
                <Image
                    src={img}
                    className="h-28 w-28 rounded-full"
                    alt="profile-img"
                />
                <h3 className="sub-head  font-semibold">Ripas Sorker Rifat</h3>
                <p className="desc">MERN Stack Developer</p>
                <p className="desc mt-1">ripassorkerrofat@gamail.com</p>
                <p className="desc">Dhaka, Bangaldesh.</p>
                <div className="mt-3 flex space-x-2 text-normal items-center">
                    <FaFacebook size={21} />
                    <FaLinkedin size={21} />
                    <FaTwitter size={21} />
                    <FaInstagram size={21} />
                </div>
            </div>

            <div className="mt-8">
                <h4 className="text-head text-lg font-semibold mb-1">
                    About me
                </h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci quam qui nulla, nihil, ab rem officia veritatis,
                    libero eos ipsam voluptatibus corporis fugit ea architecto
                    in esse quidem accusamus odit.
                </p>
            </div>
            <UpdatePersonalInfo
                updatePersonalInfoSetModal={updatePersonalInfoSetModal}
                updatePersonalInfoModal={updatePersonalInfoModal}
            />
        </div>
    );
};

export default PersonalInfo;
