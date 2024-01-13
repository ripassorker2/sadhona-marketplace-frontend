import React from "react";

const loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div
                class="w-14 h-14 rounded-full animate-spin
                    border-[6px] border-dashed border-green border-t-transparent"></div>
        </div>
    );
};

export default loading;
