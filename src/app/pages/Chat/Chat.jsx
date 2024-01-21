"use client";
import {useUserContext} from "@/context/AuthProvider";
import {useGetConversationQuery} from "@/redux/api/chatApiSlice";
import Conversations from "./Conversations";
import {useEffect, useRef, useState} from "react";
import Loading from "@/app/loading";
import userImg from "../../../assets/user.jpeg";
import Image from "next/image";
import Message from "./Message";
import {io} from "socket.io-client";

const Chat = () => {
    const {user} = useUserContext();
    const [currentChat, setCurrentChat] = useState(null);
    const [otherUser, setOtherUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [conversations, setConversations] = useState([]);
    const [socketMessage, setSocketMessage] = useState(null);
    const {data, isLoading} = useGetConversationQuery(user?._id);
    const [newMessage, setNewMessage] = useState("");
    const socket = useRef(io("ws://localhost:8000"));

    useEffect(() => {
        socket.current = io("ws://localhost:8000");
        socket.current.on("getMessage", (data) => {
            setSocketMessage({
                senderId: data.senderId,
                message: data.message,
                createdAt: Date.now(),
            });
        });
    }, []);

    useEffect(() => {
        if (data?.data) {
            const sortData = [...data.data].sort(
                (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)
            );
            setConversations(sortData);
        }
    }, [data?.data]);

    useEffect(() => {
        socketMessage &&
            currentChat?.members.includes(socketMessage.senderId) &&
            setMessages((prev) => [...prev, socketMessage]);
    }, [socketMessage, currentChat]);

    useEffect(() => {
        socket.current.emit("addUser", user?._id);
        socket.current.on("getUsers", (users) => {
            // console.log(users);
        });
    }, [user]);

    const scrollRef = useRef(null);
    useEffect(() => {
        if (currentChat) {
            fetch(`${process.env.BASE_URL}/chat/${currentChat?._id}`)
                .then((res) => res.json())
                .then((data) => setMessages(data?.data));
        }
    }, [currentChat]);

    useEffect(() => {
        const otherUserId = currentChat?.members?.find((id) => id != user._id);
        if (otherUserId) {
            fetch(`${process.env.BASE_URL}/user/${otherUserId}`)
                .then((res) => res.json())
                .then((data) => setOtherUser(data?.data));
        }
    }, [currentChat]);

    useEffect(() => {
        // Scroll to the bottom when messages change
        scrollRef?.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const messageData = {
            message: newMessage,
            senderId: user._id,
            conversationId: currentChat?._id,
        };

        fetch(`${process.env.BASE_URL}/chat/message`, {
            method: "POST",
            body: JSON.stringify(messageData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.success) {
                    setMessages([...messages, data?.data]);

                    setNewMessage("");
                }
            })
            .catch((err) => {
                console.log(err);
            });

        socket.current.emit("sendMessage", {
            message: newMessage,
            senderId: user._id,
            reveiverId: otherUser?._id,
        });
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="my-6">
            <div className=" dark:bg-primary2  text-normal  shadow-md">
                <div className=" border rounded dark:border-gray-700 border-gray-300 lg:grid md:grid-cols-7">
                    <div className="border-r dark:border-gray-700 border-gray-300 md:col-span-2 p-6">
                        <div className="">
                            <div className="relative ">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        className="w-6 h-6 ">
                                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </span>
                                <input
                                    type="search"
                                    className="block w-full py-1.5 pl-10 dark:bg-gray-700 bg-gray-200 rounded-md outline-none"
                                    name="search"
                                    placeholder="Search"
                                    required
                                />
                            </div>
                            <h2 className="my-2 mb-3 mt-2 font-medium text-lg ">
                                <span>My inboxs</span>
                            </h2>
                        </div>

                        <div className="overflow-auto h-[470px]">
                            {conversations?.length ? (
                                <>
                                    {" "}
                                    {conversations?.map((conversation) => (
                                        <div
                                            key={conversation._id}
                                            onClick={() =>
                                                setCurrentChat(conversation)
                                            }>
                                            <Conversations
                                                currentUser={user}
                                                conversation={conversation}
                                                mess={messages}
                                            />
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <p>You dont have any conversation.</p>
                            )}
                        </div>
                    </div>

                    <div className="hidden md:col-span-5 md:block">
                        {currentChat ? (
                            <div className="w-full">
                                <div className="relative flex items-center p-3 border-b dark:border-gray-700 border-gray-300">
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
                                    <p className="block  ml-2 font-medium text-head">
                                        {otherUser?.name}
                                    </p>
                                </div>

                                <div className="relative w-full px-3 py-5 overflow-y-auto h-[470px]">
                                    <Message
                                        messages={messages}
                                        user={user}
                                        otherUser={otherUser}
                                        scrollRef={scrollRef}
                                    />
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="flex items-center justify-between w-full py-2 border-t dark:border-gray-700 border-gray-300">
                                    <input
                                        type="text"
                                        className="block w-full py-2 px-4 h-12 resize-none mx-3 dark:bg-gray-700 bg-gray-200 rounded-md outline-none focus:"
                                        name="message"
                                        required
                                        value={newMessage}
                                        onChange={(e) =>
                                            setNewMessage(e.target.value)
                                        }
                                        placeholder="Message..."
                                    />

                                    <button
                                        type="submit"
                                        disabled={newMessage == ""}>
                                        <svg
                                            className="w-8 h-8  origin-center transform rotate-90 "
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        ) : (
                            <div className="flex justify-center items-center t text-3xl mt-36">
                                <span>Open a conversation to start chat.</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
