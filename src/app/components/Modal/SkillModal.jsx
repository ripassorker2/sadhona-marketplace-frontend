import {MdAdd, MdOutlineCancel} from "react-icons/md";
import {useFieldArray, useForm} from "react-hook-form";
import {BsFillTrash2Fill} from "react-icons/bs";

const SkillModal = ({showModal, setShowModal}) => {
    const {register, handleSubmit, control} = useForm();
    const {
        fields: skillsFields,
        append: skillAppend,
        remove: skillRemove,
    } = useFieldArray({
        control,
        name: "skills",
    });
    const submitInfo = (data) => console.log(data);
    return (
        <>
            {showModal && (
                <div className="justify-center items-center flex  max-h-[600px] ">
                    <div className="fixed  inset-[20px] bottom-0 top-[88px]  overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 md:mx-auto mx-4 max-w-2xl ">
                            {/*content*/}
                            <div className=" rounded-md shadow-lg relative flex flex-col w-full dark:bg-primary2 bg-secondaryBg text-normal">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5  border-b  dark:border-gray-700 border-gray-500">
                                    <h3 className="md:text-2xl text-lg font-semibold text-head">
                                        Edit Introduction
                                    </h3>
                                    <button onClick={() => setShowModal(false)}>
                                        <MdOutlineCancel className="text-green md:text-2xl text-xl" />
                                    </button>
                                </div>
                                {/*body*/}
                                <form
                                    onSubmit={handleSubmit(submitInfo)}
                                    className="relative p-6 ">
                                    <div className="w-full ">
                                        <div>
                                            <label className="text-lg">
                                                Add Skills
                                            </label>
                                            <div className="grid md:grid-cols-3 gap-4 mt-4">
                                                {skillsFields.map(
                                                    (item, index) => {
                                                        return (
                                                            <div
                                                                key={item.key}
                                                                className="flex items-center gap-3 mb-5 ">
                                                                <input
                                                                    className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                                                    type="text"
                                                                    {...register(
                                                                        `skills[${index}]`
                                                                    )}
                                                                />
                                                                <button
                                                                    type="button"
                                                                    onClick={() =>
                                                                        skillRemove(
                                                                            index
                                                                        )
                                                                    }
                                                                    className="grid place-items-center rounded-full flex-shrink-0 text-gray2 border border-gray-500 h-10 w-10 group transition-all">
                                                                    <BsFillTrash2Fill
                                                                        className=" transition-all"
                                                                        size={
                                                                            22
                                                                        }
                                                                    />
                                                                </button>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </div>
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        skillAppend("")
                                                    }
                                                    className="inline-flex items-center rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                                                    Skill
                                                    <MdAdd className="font-bold text-2xl ml-1" />
                                                </button>
                                            </div>
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
                    <div className="opacity-60 fixed inset-0 z-[999999] overflow-hidden bg-black"></div>{" "}
                </div>
            )}
        </>
    );
};

export default SkillModal;
