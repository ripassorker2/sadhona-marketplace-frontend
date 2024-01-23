"use client";

import {useGetUserQuery} from "@/redux/api/apiSlice";
import userImg from "../../../assets/user.jpeg";
import Image from "next/image";
import {useEffect, useState} from "react";
import TimeAgo from "timeago-react";
import {formattedDateString} from "@/utils/formateDateTime";

const Conversations = ({currentUser, conversation, mess}) => {
    const [messages, setMessages] = useState([]);
    const otherUserId = conversation?.members?.find(
        (id) => id != currentUser?._id
    );

    useEffect(() => {
        fetch(`${process.env.BASE_URL}/chat/${conversation?._id}`)
            .then((res) => res.json())
            .then((data) => setMessages(data?.data));
    }, [mess]);

    const {data} = useGetUserQuery(otherUserId);

    return (
        <div className="flex  items-center mb-4  p-3 dark:bg-primary bg-gray-200 hover:bg-gray-300 rounded-md  transition duration-150 ease-in-out cursor-pointer dark:hover:bg-gray-950">
            {data?.data?.avatar ? (
                <Image
                    className="object-cover w-10 h-10 rounded-full"
                    src={data?.data?.avatar}
                    alt="username"
                />
            ) : (
                <Image
                    className="object-cover w-10 h-10 rounded-full"
                    src={userImg}
                    alt="username"
                />
            )}

            <div className="w-full ">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="block  ml-2 font-medium text-head">
                            {data?.data?.name}
                        </p>
                        <p className="block ml-2 text-sm">
                            {currentUser?._id ===
                            messages[messages.length - 1]?.senderId
                                ? "me : "
                                : "he : "}
                            {messages[messages.length - 1]?.message.slice(
                                0,
                                16
                            )}
                            ...
                        </p>
                    </div>
                    <p className="block ml-2 text-sm ">
                        <TimeAgo
                            datetime={formattedDateString(
                                messages[messages.length - 1]?.createdAt
                            )}
                        />
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Conversations;
