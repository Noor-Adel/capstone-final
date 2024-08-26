import React from "react";
import { useNavigate } from "react-router-dom";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { GiEvilBook, GiWorld } from "react-icons/gi";
import InstructorImg from "../components/assets/images/bag.jpg";

export const Instructor = () => {
  const navigate = useNavigate();

  
  const handleTraineesClick = () => {
    navigate('/create-course');
  };

  
  // const handleBecomeInstructorClick = () => {
  //   navigate('/become-instructor');
  // };

  return (
    <section className='instructor mb-16'>
      <div className='container mx-auto'>
        <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
          <h1 className='text-3xl font-semibold text-black'>Our Services</h1>
        </div>
        <div className='content grid grid-cols-1 gap-5 md:grid-cols-1'>
          <div className='relative overflow-hidden h-72 w-full rounded-lg'>
            <img src={InstructorImg} alt='InstructorImg' className='object-cover w-full h-full' />
            <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center'>
              <h2 className='text-4xl text-white font-bold mb-4'>Trainees</h2>
              <button
                className='text-lg py-3 px-6 bg-blue-500 text-white border border-gray-200 rounded-md hover:bg-blue-600'
                onClick={handleTraineesClick}
              >
              Enter your course
              </button>
            </div>
          </div>
        </div>
        <div className='content mt-16'>
          <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>We Are Proud</h1>
            <span className='text-[15px] mt-2 block text-gray-700'>
              You don't have to struggle alone, you've got our assistance and help.
            </span>
          </div>
          <div className='content grid grid-cols-4 gap-5 md:grid-cols-2'>
            <InstructorCard color='bg-red-100 text-red-500' icon={<FaUsers size={40} />} title='63' desc='Students Enrolled' />
            <InstructorCard color='bg-orange-100 text-orange-500' icon={<GiEvilBook size={40} />} title='20' desc='Total Courses' />
            <InstructorCard color='bg-purple-100 text-purple-500' icon={<FaGraduationCap size={40} />} title='4' desc='Learners' />
            <InstructorCard color='bg-indigo-100 text-indigo-500' icon={<GiWorld size={40} />} title='4' desc='Online Learners' />
          </div>
        </div>
      </div>
    </section>
  );
};

export const InstructorCard = (props) => {
  return (
    <div className={`box p-5 py-5 rounded-md ${props.color} flex flex-col items-center justify-center`}>
      <div className='text-center'>
        {props.icon}
      </div>
      <div className='text mt-2'>
        <h4 className='text-lg font-semibold text-black'>{props.title}</h4>
        <p className='text-[15px]'>{props.desc}</p>
      </div>
    </div>
  );
};

export default Instructor;