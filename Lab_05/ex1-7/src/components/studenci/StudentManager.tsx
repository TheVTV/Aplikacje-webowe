import React, { useState } from "react";
import Dodawanie from "./Dodawanie";

interface Student {
  firstName: string;
  secondName: string;
  startYear: number;
}

const StudentManager: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([
    { firstName: "Jan", secondName: "Kowalski", startYear: 1995 },
    { firstName: "Anna", secondName: "Nowak", startYear: 1998 },
    { firstName: "Piotr", secondName: "Wiśniewski", startYear: 2000 },
    { firstName: "Katarzyna", secondName: "Zielińska", startYear: 1999 },
  ]);

  const addStudent = (student: Student) => {
    setStudents([...students, student]);
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Rocznik</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.secondName}</td>
              <td>{student.startYear}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Dodawanie onAddStudent={addStudent} />
    </div>
  );
};

export default StudentManager;
