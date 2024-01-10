import {MdOutlineCancel} from "react-icons/md";
import {useForm} from "react-hook-form";

const UpdatePersonalInfo = ({
    updatePersonalInfoModal,
    updatePersonalInfoSetModal,
}) => {
    const {register, handleSubmit} = useForm();
    const submitInfo = (data) => console.log(data);
    return (
        <>
            {updatePersonalInfoModal && (
                <div className="justify-center items-center flex  max-h-[600px] ">
                    <div className="fixed inset-[20px] bottom-0 md:top-[88px] top-[80px] overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 md:mx-auto mx-4 max-w-2xl ">
                            {/*content*/}
                            <div className=" rounded-md shadow-lg relative flex flex-col w-full dark:bg-primary2 bg-secondaryBg text-normal">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5  border-b  dark:border-gray-700 border-gray-500">
                                    <h3 className="md:text-2xl text-lg font-semibold text-head">
                                        Edit Introduction
                                    </h3>
                                    <button
                                        onClick={() =>
                                            updatePersonalInfoSetModal(false)
                                        }>
                                        <MdOutlineCancel className="text-green md:text-2xl text-xl" />
                                    </button>
                                </div>
                                {/*body*/}
                                <form
                                    onSubmit={handleSubmit(submitInfo)}
                                    className="relative p-6 flex-auto grid md:grid-cols-2 md:gap-x-8 gap-y-3">
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="name"
                                                className="block  mb-2 dark:text-white">
                                                Full Name
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                {...register("name")}
                                                placeholder="Full name"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="designation"
                                                className="block  mb-2 dark:text-white">
                                                Designation
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="designation"
                                                name="designation"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                {...register("designation")}
                                                placeholder="Designation..."
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="location"
                                                className="block  mb-2 dark:text-white">
                                                Location
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="location"
                                                name="location"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                {...register("location")}
                                                placeholder="Your location..."
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="linkedin"
                                                className="block  mb-2 dark:text-white">
                                                Linkedin Link
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="linkedin"
                                                name="linkedin"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                {...register("linkedin")}
                                                placeholder="Linkedin link..."
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="github"
                                                className="block  mb-2 dark:text-white">
                                                Github Link
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="github"
                                                name="github"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                {...register("github")}
                                                placeholder="Github link..."
                                            />
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="instagram"
                                                className="block  mb-2 dark:text-white">
                                                Instagram Link
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="instagram"
                                                name="instagram"
                                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                {...register("instagram")}
                                                placeholder="Instagram link..."
                                            />
                                        </div>
                                    </div>
                                    <div className="md:col-span-2">
                                        <div className="flex justify-between items-center">
                                            <label
                                                htmlFor="about"
                                                className="block  mb-2 dark:text-white">
                                                About
                                            </label>
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                id="about"
                                                name="about"
                                                className="py-2 px-4 h-20 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                {...register("about")}
                                                placeholder="About..."
                                            />
                                        </div>
                                    </div>

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

export default UpdatePersonalInfo;
