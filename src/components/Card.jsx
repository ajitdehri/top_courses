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
        <div>
            <div>
                <img src={course.image.url} alt="" />
            </div>
            <p>{course.title}</p>
            <p>{course.description}</p>
            <button onClick={handleLike}>
                {
                    liked ? <FcLike /> : <FcLikePlaceholder />
                }

            </button>
            {/* <Spinner/> */}
        </div>
    )

}




export default Card;