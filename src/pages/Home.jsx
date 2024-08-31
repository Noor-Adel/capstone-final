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
import { motion, AnimatePresence } from 'framer-motion';

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
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);
    if (value === "") {
      setActiveSearch([]);
      return;
    }
    setActiveSearch(
      courses.filter((course) => course.title.toLowerCase().includes(value)).slice(0, 8)
    );
  };

  const handleSearchResultClick = (course) => {
    navigate(`/course/${course.id}`);
  };

  return (
    <section className="bg-light py-12 h-[100vh] md:h-full relative">
      <div className="container flex items-start">
        <div className="w-1/2 text-dark md:text-center md:w-full">
          <h1 className="text-3xl lg:text-4xl font-bold leading-light">
            Summer Course <span className="text-secondary">Website</span> for Kids
          </h1>
          <h3 className="text-lg mt-2 font-semibold">
            Explore fun summer programs for your kids.
          </h3>

          <div className="relative text-primary mt-5">
            <input
              type="search"
              className="py-3 text-sm bg-secondary rounded-md pl-10 text-white focus:outline-none transition-all duration-300 ease-in-out"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              aria-label="Search courses"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <button
                type="button"
                className="p-1 focus:outline-none"
                aria-label="Search"
              >
                <FiSearch />
              </button>
            </span>
            <AnimatePresence>
              {searchTerm && (
                <motion.div
                 className="absolute top-10 p-4 bg-primary text-white w-full rounded-xl left-4/2 -translate-x-1/2 flex flex-col gap-2 shadow-lg transition-transform duration-300 ease-in-out"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {activeSearch.length > 0 ? (
                    activeSearch.map((course) => (
                      <motion.span 
                        key={course.id} 
                        onClick={() => handleSearchResultClick(course)}
                        className="cursor-pointer hover:bg-blue-300 p-2 rounded"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {course.title}
                      </motion.span>
                    ))
                  ) : (
                    <span>No results found for "{searchTerm}"</span>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <span className="text-[14px]">You’re guaranteed to find something that’s right for you.</span>
        </div>
        <div className="w-1/2 md:w-full relative">
          <div className="relative">
            <img src={heroImgback} alt="Background shape" className="absolute top-30 left-10 w-96 md:left-10" />
            <div className="w-full">
              <img src={heroImg} alt="Hero" className="h-full w-full object-contain z-20 relative" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
