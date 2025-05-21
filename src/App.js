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
      {/* Imagen fija fuera de cualquier contenedor scroll */}
      <img
        src="img/1000232644.png"
        alt="logo"
        style={{
          position: 'fixed',  // Fija en ventana
          top: '10px',
          left: '10px',
          width: '120px',
          height: 'auto',
          zIndex: 9999,
          backgroundColor: 'transparent',
        }}
      />

      {/* Contenedor principal con scroll natural */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '80px',  // Para que no tape la imagen
        paddingLeft: '80px',
        paddingRight: '20px',
        paddingBottom: '20px',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        // No usar overflow aquí para que el scroll sea de la ventana
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
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px'
        }}>
          <div>
            <StudentForm onStudentChange={setStudent} />
            <SubjectForm onSubjectAdd={handleSubjectAdd} />
          </div>

          <BulletinPreview
            student={student}
            subjects={subjects}
            onSubjectRemove={handleSubjectRemove}
          />
        </div>
      </div>
    </>
  );
};

export default App;
