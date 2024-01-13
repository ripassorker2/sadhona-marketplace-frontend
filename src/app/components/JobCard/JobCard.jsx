import {formattedDateString} from "@/utils/formateDateTime";
import TimeAgo from "timeago-react";

const JobCard = ({data, setShowModal, setCurrentJob}) => {
    const {title, price, description, requireSkills, createdAt} = data;

    return (
        <div
            onClick={() => {
                setShowModal(true);
                setCurrentJob(data);
            }}
            className="dark:bg-primary2 shadow-md rounded-md px-5 py-7">
            <p className="text-sm pb-2">
                Posted on <TimeAgo datetime={formattedDateString(createdAt)} />
            </p>
            <h2 className="sub-head font-semibold pb-1">{title}</h2>
            <p>
                {description?.length > 120
                    ? `${description.slice(0, 120)}....`
                    : description}
            </p>
            <p className="font-semibold textGradient mt-1">
                Fixed price : ${price}
            </p>
            <div className="flex space-y-2 space-x-2 -ml-2 flex-wrap uppercase">
                <button className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1 hidden">
                    CSS3
                </button>
                {requireSkills?.slice(0, 4)?.map((item, i) => (
                    <button
                        key={i}
                        className="rounded-3xl text-normal dark:bg-slate-600 bg-gray-300 px-4 py-1">
                        {item}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default JobCard;
