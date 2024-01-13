"use client";
import {useGetAllJobsQuery} from "@/redux/api/jobApiSlice";
import Container from "@/utils/Container";
import JobCard from "../components/JobCard/JobCard";
import JobDetailModal from "../components/Modal/JobDetailsModal";
import {useState} from "react";

const CategoryDetailsPage = ({params}) => {
    const [showModal, setShowModal] = useState(false);
    const [currentJob, setCurrentJob] = useState("");
    const decodedString = decodeURIComponent(params?.categoryId);
    const quiries = `category=${decodedString}`;
    const {data} = useGetAllJobsQuery(quiries);

    return (
        <Container>
            <div className=" grid md:grid-cols-2 gap-10 grid-cols-1">
                {data?.data?.data?.map((item, i) => (
                    <JobCard
                        data={item}
                        setShowModal={setShowModal}
                        setCurrentJob={setCurrentJob}
                        key={i}
                    />
                ))}
            </div>
            {showModal && currentJob && (
                <JobDetailModal
                    data={currentJob}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </Container>
    );
};

export default CategoryDetailsPage;
