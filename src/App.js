import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/common/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetails from './pages/CourseDetails';
import { Instructor } from "./pages/Instructor";

import { CreateCourse } from "./pages/CreateCourse"; 
import Login from "./pages/Login";
import { courses as dummyCourses } from "./components/assets/data/dummydata";

function App() {
  const [courses, setCourses] = useState([]);

  const addCourse = (newCourse) => {
    setCourses((prevCourses) => [...prevCourses, newCourse]);
  };

  const allCourses = [...dummyCourses, ...courses];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        
        <Route
          path='/about'
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path='/courses'
          element={
            <Layout>
              <Courses courses={allCourses} />
            </Layout>
          }
        />
        <Route
          path='/instructor'
          element={
            <Layout>
              <Instructor />
            </Layout>
          }
        />
        <Route
          path='/course/:id'
          element={
            <Layout>
              <CourseDetails courses={allCourses} />
            </Layout>
          }
        />
        <Route
          path='/create-course'
          element={
            <Layout>
              <CreateCourse addCourse={addCourse} />
            </Layout>
          }
        />
        <Route
          path='/login'
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;