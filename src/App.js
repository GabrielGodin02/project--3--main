import React, { useState } from 'react';
import StudentForm from './components/StudentForm';
import SubjectForm from './components/SubjectForm';
import BulletinPreview from './components/BulletinPreview';

const App = () => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    grade: '',
    period: '',
    schedule: '',
    photo: null,
  });
  const [subjects, setSubjects] = useState([]);

  const handleSubjectAdd = (newSubject) => {
    setSubjects([...subjects, newSubject]);
  };

  const handleSubjectRemove = (index) => {
    const newSubjects = [...subjects];
    newSubjects.splice(index, 1);
    setSubjects(newSubjects);
  };

  return (
    <>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '80px',
        paddingLeft: '80px',
        paddingRight: '20px',
        paddingBottom: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}>
        <h1 style={{
          textAlign: 'center',
          color: '#2c3e50',
          marginBottom: '30px',
          paddingBottom: '10px',
          borderBottom: '3px solid #3498db'
        }}>
          Generador de Boletines Escolares
        </h1>

        <div style={{
          display: 'flex',
          gap: '30px',
          alignItems: 'flex-start',
        }}>
          <div style={{ flex: '1' }}>
            <StudentForm onStudentChange={setStudent} />
            <SubjectForm onSubjectAdd={handleSubjectAdd} />
          </div>

          <div style={{ flex: '1' }}>
            <BulletinPreview
              student={student}
              subjects={subjects}
              onSubjectRemove={handleSubjectRemove}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;