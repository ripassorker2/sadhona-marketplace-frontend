"use client";
import JobCard from "@/app/components/JobCard/JobCard";
import JobsHeader from "@/app/components/JobsHeader/JobsHeader";
import JobDetailModal from "@/app/components/Modal/JobDetailsModal";
import Loading from "@/app/loading";
import {useGetAllJobsQuery} from "@/redux/api/jobApiSlice";
import React, {useState} from "react";

const AllJobs = ({query}) => {
    const [showModal, setShowModal] = useState(false);
    const [currentJob, setCurrentJob] = useState("");
    const [category, setCategory] = useState("");
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);

    let quiries = `page=${page + 1}`;
    if (search && category) {
        quiries = `category=${category}&searchTerm=${search}`;
    } else if (query) {
        quiries = `category=${query}`;
    } else if (category) {
        quiries = `category=${category}`;
    } else if (search) {
        quiries = `searchTerm=${search}`;
    }

    const {data, isLoading} = useGetAllJobsQuery(quiries);

    const total = data?.meta?.total;
    const totaltPage = Math.ceil(total / 10);

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div>
            {!query && (
                <JobsHeader
                    category={category}
                    setCategory={setCategory}
                    search={search}
                    setSearch={setSearch}
                />
            )}

            <div className=" grid md:grid-cols-2 gap-10 grid-cols-1">
                {data?.data?.data.length ? (
                    <>
                        {data?.data?.data?.map((item, i) => (
                            <JobCard
                                data={item}
                                setShowModal={setShowModal}
                                setCurrentJob={setCurrentJob}
                                key={i}
                            />
                        ))}
                    </>
                ) : (
                    <div className="sub-head text-center col-span-3 mt-8">
                        {" "}
                        No jobs available.
                    </div>
                )}

                {showModal && currentJob && (
                    <JobDetailModal
                        data={currentJob}
                        showModal={showModal}
                        setShowModal={setShowModal}
                    />
                )}
            </div>

            {!search && !category && totaltPage && total > 10 && (
                <div className="flex justify-end mt-8">
                    <div class="flex items-center -space-x-px">
                        <button
                            onClick={() => setPage(page - 1)}
                            disabled={page <= 0 ? true : false}
                            class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                            <svg
                                class="flex-shrink-0 w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                            <span class="hidden sm:block">Previous</span>
                        </button>
                        {[...Array(totaltPage)?.keys()].map((number) => (
                            <button
                                onClick={() => setPage(number)}
                                class={`min-h-[38px] min-w-[38px] text-gray-800 border border-gray-200 py-2 px-3 text-sm first:rounded-s-lg last:rounded-e-lg    dark:border-gray-600 dark:text-white  ${
                                    page === number
                                        ? "bg-green"
                                        : "bg-gray-200 dark:bg-gray-700"
                                } `}>
                                {number + 1}
                            </button>
                        ))}

                        <button
                            disabled={totaltPage == page + 1 ? true : false}
                            onClick={() => setPage(page + 1)}
                            class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
                            <span class="hidden sm:block">Next</span>
                            <svg
                                class="flex-shrink-0 w-3.5 h-3.5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AllJobs;
