"use client";
import Link from "next/link";
const categories = [
    "Data Entry",
    "Digital Marketing",
    "Graphic And Design",
    "Web Design And Development",
    "Software And Mobile App Development",
    "Support And Security",
    "Video And Animation",
];

const JobsHeader = ({category, setCategory, search, setSearch}) => {
    return (
        <div className="dark:bg-primary2 rounded-lg bg-gray-100 mb-14 p-4">
            <div className="flex justify-between items-center">
                <div className="relative">
                    <select
                        id="category"
                        name="category"
                        className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none"
                        value={category}
                        onChange={(event) => {
                            setCategory(event.target.value);
                        }}>
                        <option value="" selected disabled>
                            Select a category...
                        </option>
                        <option value="">Default</option>
                        {categories?.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="relative">
                    <input
                        type="text"
                        id="search"
                        name="search"
                        className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700  rounded-md dark:bg-primary focus:outline-none w-[300px]"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Search here..."
                    />
                </div>
                <div className="">
                    <Link href={"/postjob"} className="btn-primary">
                        Post a job
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JobsHeader;
