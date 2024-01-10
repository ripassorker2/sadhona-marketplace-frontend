import {MdOutlineCancel} from "react-icons/md";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const UpdateEducationModal = ({showModal, setShowModal}) => {
    const {register, handleSubmit} = useForm();
    const [years, setYears] = useState([]);
    const [presentJob, setPresentJob] = useState(false);

    const handleCheckboxChange = (event) => {
        setPresentJob(event.target.checked);
    };

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const startYear = 2000;
        const yearRange = Array.from(
            {length: currentYear - startYear + 1},
            (_, index) => startYear + index
        );
        setYears(yearRange);
    }, []);

    const submitInfo = (data) => console.log(data);
    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex  max-h-[600px] ">
                    <div className="fixed inset-0 bottom-0 md:top-[150px] top-[80px] overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 md:mx-auto mx-4 max-w-2xl ">
                            {/*content*/}
                            <div className=" rounded-md shadow-lg relative flex flex-col w-full dark:bg-primary2 bg-secondaryBg text-normal">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5  border-b  dark:border-gray-700 border-gray-500">
                                    <h3 className="md:text-2xl text-lg font-semibold text-head">
                                        Update Education
                                    </h3>
                                    <button onClick={() => setShowModal(false)}>
                                        <MdOutlineCancel className="text-green md:text-2xl text-xl" />
                                    </button>
                                </div>
                                {/*body*/}
                                <form
                                    onSubmit={handleSubmit(submitInfo)}
                                    className="relative p-6  md:grid md:grid-cols-2 flex flex-col space-y-2  md:gap-x-8 gap-y-3">
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="institute"
                                                className="block  mb-2 dark:text-white">
                                                Institute Name
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="institute"
                                                name="institute"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                {...register("institute")}
                                                placeholder="institute name..."
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="subject"
                                                className="block  mb-2 dark:text-white">
                                                Subject
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                {...register("subject")}
                                                placeholder="Subject..."
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="startMonth"
                                                className="block  mb-2 dark:text-white">
                                                Starting month
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <select
                                                id="startMonth"
                                                name="startMonth"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none"
                                                {...register("startMonth")}
                                                required>
                                                <option
                                                    value=""
                                                    disabled
                                                    selected>
                                                    Select starting month...
                                                </option>
                                                {months.map((month, index) => (
                                                    <option
                                                        key={index}
                                                        value={month}>
                                                        {month}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="startYear"
                                                className="block  mb-2 dark:text-white">
                                                Starting year
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <select
                                                id="startYear"
                                                name="startYear"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none"
                                                {...register("startYear")}
                                                required>
                                                <option
                                                    value=""
                                                    disabled
                                                    selected>
                                                    Select starting year...
                                                </option>
                                                {years.map((year, index) => (
                                                    <option
                                                        key={index}
                                                        value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex col-span-2 mt-2 text-green space-x-2 items-center">
                                        <p>Currently studing here</p>
                                        <input
                                            type="checkbox"
                                            name="present"
                                            className="transform scale-2 "
                                            id="presentCheckbox"
                                            onChange={handleCheckboxChange}
                                        />
                                    </div>
                                    {presentJob || (
                                        <>
                                            {" "}
                                            <div className="">
                                                <div className="flex justify-between items-center">
                                                    <label
                                                        htmlFor="endMonth"
                                                        className="block  mb-2 dark:text-white">
                                                        Ending month
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <select
                                                        id="endMonth"
                                                        name="endMonth"
                                                        className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none"
                                                        {...register(
                                                            "endMonth"
                                                        )}
                                                        required>
                                                        <option
                                                            value=""
                                                            selected
                                                            disabled>
                                                            Select ending
                                                            month...
                                                        </option>
                                                        {months.map(
                                                            (month, index) => (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        month
                                                                    }>
                                                                    {month}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="">
                                                <div className="flex justify-between items-center">
                                                    <label
                                                        htmlFor="endYear"
                                                        className="block  mb-2 dark:text-white">
                                                        Ending year
                                                    </label>
                                                </div>
                                                <div className="relative">
                                                    <select
                                                        id="endYear"
                                                        name="endYear"
                                                        className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none"
                                                        {...register("endYear")}
                                                        required>
                                                        <option
                                                            value=""
                                                            selected
                                                            disabled>
                                                            Select ending
                                                            year...
                                                        </option>
                                                        {years.map(
                                                            (year, index) => (
                                                                <option
                                                                    key={index}
                                                                    value={
                                                                        year
                                                                    }>
                                                                    {year}
                                                                </option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                            </div>
                                        </>
                                    )}

                                    <div className="md:col-span-2 mt-2">
                                        <div className="flex justify-end items-center">
                                            <button
                                                type="submit"
                                                className="btn-primary md:w-auto w-full">
                                                Submit
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-60 fixed inset-0 z-[999999] bg-black"></div>{" "}
                </div>
            )}
        </>
    );
};

export default UpdateEducationModal;
