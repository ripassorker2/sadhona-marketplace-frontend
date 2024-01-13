"use client";
import JobCard from "@/app/components/JobCard/JobCard";
import JobDetailModal from "@/app/components/Modal/JobDetailsModal";
import {useGetAllJobsQuery} from "@/redux/api/jobApiSlice";
import React, {useState} from "react";

const AllJobs = () => {
    const [showModal, setShowModal] = useState(false);
    const [currentJob, setCurrentJob] = useState("");
    const {data} = useGetAllJobsQuery();
    return (
        <div className=" grid md:grid-cols-2 gap-10 grid-cols-1">
            {data?.data?.data?.map((item, i) => (
                <JobCard
                    data={item}
                    setShowModal={setShowModal}
                    setCurrentJob={setCurrentJob}
                    key={i}
                />
            ))}

            {showModal && currentJob && (
                <JobDetailModal
                    data={currentJob}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
        </div>
    );
};

export default AllJobs;
