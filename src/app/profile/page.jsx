"use client";
import {useUserContext} from "@/context/AuthProvider";
import Container from "@/utils/Container";
import PersonalInfo from "../pages/Profile/PersonalInfo/PersonalInfo";
import Experience from "../pages/Profile/Experience/Experience";
import Skills from "../pages/Profile/Skills/Skills";
import Educations from "../pages/Profile/Educations/Educations";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

const ProfilePage = () => {
    const {user, token} = useUserContext();
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
    }, [token]);
    return (
        <Container>
            <div className="md:grid md:grid-cols-7 gap-10 text-normal">
                <div className=" md:col-span-2 ">
                    <PersonalInfo />
                </div>
                <div className=" col-span-5 md:mt-0 mt-20">
                    <Experience />
                    <Skills />
                    <Educations />
                </div>
            </div>
        </Container>
    );
};

export default ProfilePage;
