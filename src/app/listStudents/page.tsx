"use client";
import StudentTable from "@/src/components/StudentTable";
import { students } from "../data/students";

const Home = () => {
  return (
    <div className="container mx-auto">
      <StudentTable students={students} />
    </div>
  );
};

export default Home;
