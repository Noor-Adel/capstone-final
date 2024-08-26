import React from 'react';
import { useParams } from 'react-router-dom';

const CourseDetails = ({ courses }) => {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <p className='text-red-500 text-center text-xl'>Course not found!</p>;
  }

  return (
   
    <div className='container mx-auto p-6 md:p-8'>
      <div className='flex flex-row md:flex-row '>
        {/* عمود التفاصيل */}
        <div className='w-full h-100 md:w-1/2 p-6'>
          <div className='bg-white shadow-md rounded-lg p-6'>
            <h2 className='text-3xl font-bold mb-4'>{course.title}</h2>
            <div className='text-lg space-y-2'>
              <p><strong className='text-gray-700'>Instructor:</strong> {course.instructor}</p>
              <p><strong className='text-gray-700'>Price:</strong> ${course.price}</p>
              <p><strong className='text-gray-700'>Location:</strong> {course.location}</p>
              <p><strong className='text-gray-700'>Phone:</strong> <a href={`tel:${course.phone}`} className='text-blue-500 hover:underline'>{course.phone}</a></p>
              <p><strong className='text-gray-700'>WhatsApp:</strong> <a href={`https://wa.me/${course.phone}`} target="_blank" rel="noopener noreferrer" className='text-blue-500 hover:underline'>Chat on WhatsApp</a></p>
            </div>
          </div>
        </div>
        
        {/* عمود الصورة */}
        <div className='w-full md:w-3/4 h-100 relative p-6'>
          <div className='bg-white shadow-md rounded-lg'>
            <img 
              src={course.cover} 
              alt={course.title} 
              className='w-full h-100 object-cover rounded-lg'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
