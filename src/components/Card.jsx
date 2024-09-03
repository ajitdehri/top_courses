import React from "react";
import { useState } from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';
import Spinner from "./Spinner";

const Card = (props) => {
    const [liked, setlike] = useState(false);
    function handleLike() {
        setlike(!liked);
        if (liked === false) {
            toast.success("like done");

        } else {
            toast.warning(" like remove done!");
        }
    }
    let course = props.course;
    return (
        <div className="w-[300px] h-[390px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
            <div className="relative ">
                <img src={course.image.url} alt="Photo"></img>
                <div className="w-[50px] h-[45px] bg-white  absolute right-2 grid place-items-center bottom-[-12px] rounded-full">
                    <button onClick={handleLike}>
                        {
                            liked ? <FcLike fontSize="1.76rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                        }

                    </button>

                </div>
            </div>
            <div className="p-4">
                <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
                <p className="mt-2 text-white">
                     {
                     course.description.length > 100 ?(course.description.substr(0.100)+"..."):
                     (course.description)
                     }
                </p>

            </div>
        </div>

    )

}




export default Card;