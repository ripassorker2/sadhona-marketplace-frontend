import {useUserContext} from "@/context/AuthProvider";
import {useCreateConversationMutation} from "@/redux/api/chatApiSlice";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {MdOutlineCancel} from "react-icons/md";

const ChatModal = ({chatModal, setChatModal, otherUser}) => {
    const {user} = useUserContext();
    const [createConversation, {isSuccess}] = useCreateConversationMutation();
    const [newMessage, setNewMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        const messageData = {
            members: [user?._id, otherUser?._id],
            message: newMessage,
            token: localStorage.getItem("accessToken"),
        };
        createConversation(messageData);
    };

    useEffect(() => {
        if (isSuccess) {
            toast.success("Message send successfully. Cheek your inbox");
            setChatModal(false);
            return;
        }
    }, [isSuccess]);

    return (
        <>
            {chatModal && (
                <div className="justify-center items-center flex  max-h-[600px] ">
                    <div className="fixed inset-[20px] bottom-0 md:top-[180px] top-[180px] overflow-x-hidden overflow-y-auto z-[9999999] outline-none focus:outline-none ">
                        <div className="relative w-auto my-6 md:mx-auto mx-4 max-w-lg ">
                            {/*content*/}
                            <div className=" rounded-md shadow-lg relative flex flex-col w-full dark:bg-primary bg-secondaryBg text-normal">
                                {/*header*/}
                                <div className="flex items-center justify-between p-5  border-b  dark:border-gray-700 border-gray-500">
                                    <h3 className="md:text-2xl text-lg font-semibold text-head">
                                        Send message
                                    </h3>
                                    <button onClick={() => setChatModal(false)}>
                                        <MdOutlineCancel className="text-green md:text-2xl text-xl" />
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6  ">
                                    <form
                                        onSubmit={handleSubmit}
                                        className=" w-full py-2 flex ">
                                        <textarea
                                            type="text"
                                            className="block w-full h-28 py-2 px-4  resize-none mx-3 dark:bg-gray-700 bg-gray-200 rounded-md outline-none focus:"
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
                            </div>
                        </div>
                    </div>
                    <div className="opacity-65 fixed inset-0 z-[999999] bg-black"></div>{" "}
                </div>
            )}
        </>
    );
};

export default ChatModal;
