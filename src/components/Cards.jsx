import React, { useEffect } from "react";
import { useState } from "react";
import Card from './Card'

const Cards = (props) => {
    let courses = props.courses;
    let category = props.category;

    function getCourses() {
        if (category === "All") {
            // console.log("object view ",courses);
            let allcourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(coursesData => {
                    allcourses.push(coursesData);
                })
            })
            // console.log("array view",allcourses);
            return allcourses;
        }
        else {
            // console.log(courses[category]);
            return courses[category];
        }
    }

    return (
        <div className="flex flex-wrap  justify-center gap-4 mb-4">
            {
                getCourses().map((course) => (
                    <Card course={course}></Card>

                ))
            }

        </div>

    )

}

export default Cards;