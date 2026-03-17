"use client";
import { Student } from "../types/Student";

type Props = {
  students: Student[];
};

const StudentTable = ({ students }: Props) => {
  return (
    <table className="w-full border-gray-600 rounded-md overflow-hidden">
      <thead>
        <tr className="text-left border-b border-gray-600 bg-gray-800 text-white">
          {/* <th>ID</th> */}
          <th className="p-2">Name</th>
          <th className="p-2">Status</th>
          <th className="p-2">Grade 1</th>
          <th className="p-2">Grade 2</th>
          <th className="p-2">Final Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr
            key={student.id}
            className="text-gray-800 bg-gray-400 border-b border-gray-600"
          >
            <td className="p-2 flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-3"
                src={student.avatar}
                alt={student.name}
              />
              <div>
                <div className="font-bold">{student.name}</div>
                <div>{student.email}</div>
              </div>
            </td>
            <td className="p-2 border-2 border-gray-500 font-normal text-center text-xs">
              <button
                className={`p-2 ${student.active ? "bg-green-600 border-green-800" : "bg-red-600 border-red-800"} text-white rounded`}
              >
                {student.active ? "Ativo" : "Inativo"}
              </button>
            </td>
            <td className="p-2 border-2 border-gray-500 font-normal text-center">
              {student.grade1}
            </td>
            <td className="p-2 border-2 border-gray-500 font-normal text-center">
              {student.grade2}
            </td>
            <td className="p-2 border-2 border-gray-500 font-normal text-center">
              {student.active
                ? ((student.grade1 + student.grade2) / 2).toFixed(1)
                : "--"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
