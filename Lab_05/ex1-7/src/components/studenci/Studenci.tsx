import React from "react";

interface Student {
  firstName: string;
  secondName: string;
  startYear: number;
}

const Studenci: React.FC = () => {
  const students: Student[] = [
    { firstName: "Jan", secondName: "Kowalski", startYear: 1995 },
    { firstName: "Anna", secondName: "Nowak", startYear: 1998 },
    { firstName: "Piotr", secondName: "Wiśniewski", startYear: 2000 },
    { firstName: "Katarzyna", secondName: "Zielińska", startYear: 1999 },
  ];

  return (
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
  );
};

export default Studenci;
