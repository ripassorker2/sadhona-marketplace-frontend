import {formattedDateString} from "@/utils/formateDateTime";
import Image from "next/image";
import React from "react";
import TimeAgo from "timeago-react";
import userImg from "../../../assets/user.jpeg";

const Message = ({messages, user, otherUser, scrollRef}) => {
    return (
        <div className="space-y-2 text-gray-700">
            {messages.length ? (
                <>
                    {messages?.map((ms, i) => (
                        <div key={i}>
                            {ms?.senderId == user?._id ? (
                                <div
                                    className="mb-3 flex flex-col justify-end"
                                    ref={scrollRef}>
                                    <div className="flex space-x-1  justify-end items-center">
                                        <div className="relative max-w-xl px-4 py-2  bg-gradient-to-r from-neutral-300 to-teal-200  rounded shadow">
                                            <p className="block">
                                                {ms?.message}
                                            </p>
                                        </div>

                                        {user?.avatar ? (
                                            <Image
                                                className="object-cover w-10 h-10 rounded-full"
                                                src={user?.avatar}
                                                alt="username"
                                            />
                                        ) : (
                                            <Image
                                                className="object-cover w-10 h-10 rounded-full"
                                                src={userImg}
                                                alt="username"
                                            />
                                        )}
                                    </div>
                                    <div>
                                        <TimeAgo
                                            className="text-xs text-normal mt-1 mr-3 block float-right"
                                            datetime={formattedDateString(
                                                ms?.createdAt
                                            )}
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div className="mb-3" ref={scrollRef}>
                                    <div className="flex justify-start space-x-1  items-center">
                                        {otherUser?.avatar ? (
                                            <Image
                                                className="object-cover w-10 h-10 rounded-full"
                                                src={otherUser?.avatar}
                                                alt="username"
                                            />
                                        ) : (
                                            <Image
                                                className="object-cover w-10 h-10 rounded-full"
                                                src={userImg}
                                                alt="username"
                                            />
                                        )}
                                        <div>
                                            <div className="relative max-w-xl px-4 py-2 bg-slate-30 bg-gradient-to-l from-neutral-300  to-teal-200  rounded shadow">
                                                <p className="block">
                                                    {ms?.message}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <TimeAgo
                                        className="text-xs text-normal mt-1 ml-3"
                                        datetime={formattedDateString(
                                            ms?.createdAt
                                        )}
                                    />
                                </div>
                            )}{" "}
                        </div>
                    ))}
                </>
            ) : (
                <p className="text-normal text-xl">Start chating...</p>
            )}
        </div>
    );
};

export default Message;
