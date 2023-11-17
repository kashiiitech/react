import React, { useState } from "react";
import Card from "./Card";

const Cards = (props) => {

    const [likedCourses, setLikedCourses] = useState([]);
    let category = props.category;

    let courses = props.courses;
    // console.log(courses)

    // returns you a list of all courses received from the api response

    function getCourses(){
        if(category=== "All"){
            let allCourses = [];
        Object.values(courses).forEach(array => {
            array.forEach(courseData => {
                allCourses.push(courseData);
            })
        })
        return allCourses;
    } else {
        // specific category data or array
        return courses[category];
    }
}; 
console.log(courses);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">

        {
            getCourses().map((course) => {
                return <Card key={course.id}  course={course} 
                likedCourses={likedCourses} 
                setLikedCourses={setLikedCourses}/>
            })
        }

    </div>
  );
}

export default Cards;