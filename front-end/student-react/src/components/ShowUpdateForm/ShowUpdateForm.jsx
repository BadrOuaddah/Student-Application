import React from 'react';
// import student from '../Student/Student';

export default function ShowUpdateForm(student) {
  return (
    <div>
      <input type="text" value={student.name} />
    </div>
  )
}
