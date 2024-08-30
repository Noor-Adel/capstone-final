import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import heroImg from "../components/assets/images/image.png";
import heroImgback from "../components/assets/images/hero-shape-purple.png";
import { FiSearch } from "react-icons/fi";
import { About } from "./About";
import Courses from "./Courses";

import { Instructor } from "./Instructor";
import { Blog } from "./Blog";
import { courses } from "../components/assets/data/dummydata";

export const Home = () => {
  return (
    <>
      <HomeContent />
      <About />
      <br />
      <br />
      <br />
      <Courses courses={courses} />
      <Instructor />
      <Blog />
    </>
  );
};

export const HomeContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeSearch, setActiveSearch] = useState([]);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    if (e.target.value === "") {
      setActiveSearch([]);
      return false;
    }
    setActiveSearch(
      courses.filter((w) => w.title.toLowerCase().includes(e.target.value.toLowerCase())).slice(0, 8)
    );
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e);
  };

  // const handleSearchResultClick = (course) => {
  //   window.location.href = `/course?id=${course.id}`;
  // };
  
  const handleSearchResultClick = (course) => {
    // Handle the click event here
    // For example, you could navigate to a course details page
    console.log(`Course clicked: ${course.title}`);
    // Add your logic here to handle the click event
    navigate(`/course/${course.id}`);
  //   
  };
  return (
    <section className="  bg-light py-20 h-[110vh] md:h-full' ">

    <div className="container items-start">
      <div className="flex items-center  justify-center md:flex-col">
        <div className="left w-1/2 text-dark md:text-center md:w-full  ">
        <h1 className="text-3xl lg:text-5xl font-bold leading-light">
      summer course{" "} <span className="text-secondary"> websit</span> for kids
    </h1>
          <h3 className="text-lg mt-2 font-semibold">  Explore fun summer programs for your kids.</h3>

          <div className="relative text-primary focus-within:text-gray-300 mt-5">
            <input
              type="search"
              className="py-3 text-sm  bg-secondary rounded-md pl-10  text-white focus:outline-none "
              placeholder="Search..."
              onChange={handleInputChange}
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="submit"
                className="p-1 focus:outline-none focus:shadow-outline"
              >
                <FiSearch />
              </button>
            </span>
            {activeSearch.length > 0 && (
            <div className="absolute top-10 p-4 bg-primary text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
              {activeSearch.map((s) => (
                <span key={s.id} onClick={() => handleSearchResultClick(s)}>
                  {s.title}
                </span>
              ))}
            </div>
          )}

          </div>
         
          <span className="text-[14px]">You`re guaranteed to find something thats right for you.</span>
        </div>
        <div className=" right w-1/2 md:w-full relative  " >
          <div className="images relative  ">
          <div className='images relative'>
              <img src={heroImgback} alt='' className=' absolute top-30 left-10 w-96 md:left-10' />
              <div className='img  w-full '>
                <img src={heroImg} alt='' className='h-full w-full object-contain z-20 relative' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};