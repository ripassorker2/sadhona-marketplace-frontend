"use client";
import Container from "@/utils/Container";
import React, {useState} from "react";
import {useFieldArray, useForm} from "react-hook-form";
import {BsFillTrash2Fill} from "react-icons/bs";
import {MdAdd} from "react-icons/md";
const categories = [
    "Data Entry",
    "Digital Marketing",
    "Graphic And Design",
    "Web Design And Development",
    "Software And Mobile App Development",
    "Support And Security",
    "Video And Animation",
];
const dataEntry = [
    "Excel Data Entry",
    "Web Research",
    "Copy Paste Job and Typing",
    "Data Mining",
    "Web Research",
    "CRM Data Entry",
    "LinkedIn Research",
    "B2B Lead Generation",
    "Translation",
];
const marketingSkillsArray = [
    "Search Engine Optimization (SEO)",
    "Search Engine Marketing (SEM)",
    "Local SEO",
    "E-Commerce SEO",
    "Social Media Marketing",
    "Video Marketing",
    "Email Marketing",
    "Affiliate Marketing",
    "Text Message Marketing",
];
const designSkillsArray = [
    "Logo Design",
    "Brand Style Guides",
    "Business Cards and Stationery",
    "Illustration",
    "Background Removal",
];
const webDevelopmentSkillsArray = [
    "Business Website",
    "E-Commerce Development",
    "Custom Websites",
];
const appDevelopmentSkillsArray = [
    "Web Applications",
    "Desktop Applications",
    "Scripting",
    "Android App Development",
    "iOS App Development",
];
const softwareSkillsArray = [
    "Software Testing",
    "Code Review",
    "DevOps and Cloud",
    "Support and IT",
];
const videoEditingSkillsArray = [
    "Video Editing",
    "Visual Effects",
    "Video Ads and Commercials",
    "Social Media Videos",
    "Slideshow Videos",
    "Video Templates Editing",
    "Subtitles and Captions",
];
const PostJob = () => {
    const [category, setCategory] = useState("");
    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const {
        register,
        control,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const {
        fields: skillFields,
        append: skillAppend,
        remove: skillRemove,
    } = useFieldArray({control, name: "skills"});

    const submitInfo = (data) => console.log(data);
    return (
        <Container>
            <div className="dark:bg-primary2 rounded-md shadow-md">
                <form
                    onSubmit={handleSubmit(submitInfo)}
                    className="relative p-6 flex-auto grid md:grid-cols-2 md:gap-x-8 gap-y-3">
                    <div className="">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="category"
                                className="block mb-2 dark:text-white">
                                Category
                            </label>
                        </div>
                        <div className="relative">
                            <select
                                id="category"
                                name="category"
                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none"
                                value={category}
                                onChange={handleChange}>
                                <option value="" selected disabled>
                                    Select a category...
                                </option>
                                {categories?.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="title"
                                className="block  mb-2 dark:text-white">
                                Job title
                            </label>
                        </div>
                        <div className="relative">
                            <select
                                id="title"
                                name="title"
                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none"
                                {...register("title", {required: true})}>
                                <option value="">
                                    {category == ""
                                        ? "First select a category..."
                                        : "Select a job title"}
                                </option>
                                {category == "Data Entry" && (
                                    <>
                                        {dataEntry.map((item, index) => (
                                            <option key={index} value={item}>
                                                {item}
                                            </option>
                                        ))}
                                    </>
                                )}
                                {category == "Digital Marketing" && (
                                    <>
                                        {marketingSkillsArray?.map(
                                            (item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}>
                                                    {item}
                                                </option>
                                            )
                                        )}
                                    </>
                                )}
                                {category == "Graphic And Design" && (
                                    <>
                                        {designSkillsArray?.map(
                                            (item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}>
                                                    {item}
                                                </option>
                                            )
                                        )}
                                    </>
                                )}
                                {category == "Web Design And Development" && (
                                    <>
                                        {webDevelopmentSkillsArray?.map(
                                            (item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}>
                                                    {item}
                                                </option>
                                            )
                                        )}
                                    </>
                                )}
                                {category ==
                                    "Software And Mobile App Development" && (
                                    <>
                                        {appDevelopmentSkillsArray?.map(
                                            (item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}>
                                                    {item}
                                                </option>
                                            )
                                        )}
                                    </>
                                )}
                                {category == "Support And Security" && (
                                    <>
                                        {softwareSkillsArray?.map(
                                            (item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}>
                                                    {item}
                                                </option>
                                            )
                                        )}
                                    </>
                                )}
                                {category == "Video And Animation" && (
                                    <>
                                        {videoEditingSkillsArray?.map(
                                            (item, index) => (
                                                <option
                                                    key={index}
                                                    value={item}>
                                                    {item}
                                                </option>
                                            )
                                        )}
                                    </>
                                )}
                            </select>
                        </div>
                        {errors.title && (
                            <p className="text-sm text-red-500">
                                This field is required
                            </p>
                        )}
                    </div>

                    <div className="">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="price"
                                className="block  mb-2 dark:text-white">
                                Price
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                id="price"
                                name="price"
                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                {...register("price", {required: true})}
                                placeholder="Price..."
                            />
                        </div>
                        {errors.price && (
                            <p className="text-sm text-red-500">
                                Price field is required.
                            </p>
                        )}
                    </div>

                    <div className="">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="level"
                                className="block  mb-2 dark:text-white">
                                Expart level
                            </label>
                        </div>
                        <div className="relative">
                            <select
                                id="level"
                                name="level"
                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none"
                                {...register("level", {required: true})}>
                                <option value="" selected disabled>
                                    Select expart level...
                                </option>
                                <option value="Entry Level">Entry Level</option>
                                <option value="Intermediate">
                                    Intermediate
                                </option>
                                <option value="Most Expart">Most Expart</option>
                            </select>
                        </div>
                        {errors.level && (
                            <p className="text-sm text-red-500">
                                This field is required
                            </p>
                        )}
                    </div>
                    <div className="">
                        <div>
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
                                {...register("location", {required: true})}
                                placeholder="Location..."
                            />
                        </div>
                        {errors.location && (
                            <p className="text-sm text-red-500">
                                This field is required
                            </p>
                        )}
                    </div>

                    <div className="">
                        <div>
                            <label
                                htmlFor="description"
                                className="block  mb-2 dark:text-white">
                                Description
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="text"
                                id="description"
                                name="description"
                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                {...register("description", {required: true})}
                                placeholder="Description..."
                            />
                        </div>
                        {errors.description && (
                            <p className="text-sm text-red-500">
                                This field is required
                            </p>
                        )}
                    </div>
                    <div className="">
                        <div>
                            <label
                                htmlFor="delivary"
                                className="block  mb-2 dark:text-white">
                                Delivary time
                            </label>
                        </div>
                        <div className="relative">
                            <input
                                type="number"
                                id="delivary"
                                name="delivary"
                                className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none "
                                {...register("delivary", {required: true})}
                                placeholder="Delivary time..."
                            />
                        </div>
                        {errors.description && (
                            <p className="text-sm text-red-500">
                                This field is required
                            </p>
                        )}
                    </div>

                    <div className="">
                        <label className="">Require Skills</label>
                        <div className="mt-4">
                            {skillFields.map((item, index) => {
                                return (
                                    <div
                                        key={item.key}
                                        className="flex items-center gap-3 mb-5">
                                        <input
                                            className="py-2 px-4 block border dark:focus:border-gray-500 dark:border-gray-600 border-gray-700 w-full rounded-md dark:bg-primary focus:outline-none"
                                            type="text"
                                            {...register(`skills[${index}]`)}
                                        />
                                        <button
                                            type="button"
                                            onClick={() => skillRemove(index)}
                                            className="grid place-items-center rounded-full flex-shrink-0 text-gray2 border  h-10 w-10 group transition-all">
                                            <BsFillTrash2Fill
                                                className=" transition-all"
                                                size={22}
                                            />
                                        </button>
                                    </div>
                                );
                            })}
                        </div>

                        <button
                            type="button"
                            onClick={() => skillAppend("")}
                            className="inline-flex items-center text-gray1 font-semibold text-center justify-center   px-4 py-1.5 rounded shadow  hover:shadow-primary shadow-primary mr-5">
                            Techknology{" "}
                            <MdAdd className="font-bold text-2xl ml-1" />
                        </button>
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
        </Container>
    );
};

export default PostJob;
