import { useState } from "react";
import "./App.css";

import HeaderAfterLogin from "./components/header/jsx/HeaderAfterLogin";
import Hero from "./components/HeroSec/jsx/Hero";
import Categories from "./components/Categories/Categories";
import ViewCourses from "./components/ViewCourses/ViewCourses";
import AddCourse from "./components/AddCourse/Addcourse";
import CourseDetails from "./components/CourseDetails/CourseDetails";


import { Routes, Route } from "react-router-dom";
import EditCourse from "./components/EditCourse/EditCourse";

function App() {
  return (
    <div className="App">

      <HeaderAfterLogin />

      <Routes>

        <Route path="/" element={
          <>
            <Hero />
            <Categories />
            <ViewCourses />
          </>
        } />

        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/edit/:id" element={<EditCourse />} />
      </Routes>

    </div>
  );
}

export default App;