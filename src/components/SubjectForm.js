import React, { useState } from 'react';

const SubjectForm = ({ onSubjectAdd }) => {
  const [subject, setSubject] = useState({
    name: '',
    competencies: '',
    grade: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubject({ ...subject, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!subject.name.trim() || !subject.competencies.trim()) return;
    
    onSubjectAdd({
      ...subject,
      grade: parseFloat(subject.grade).toFixed(1)
    });
    
    setSubject({
      name: '',
      competencies: '',
      grade: 0
    });
  };

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '10px',
      marginBottom: '20px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ 
        marginBottom: '20px',
        color: '#2c3e50',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px'
      }}>Agregar Materia</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: '500',
            color: '#34495e'
          }}>Nombre de la Materia</label>
          <input
            type="text"
            name="name"
            value={subject.name}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              fontSize: '16px',
            }}
            required
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: '500',
            color: '#34495e'
          }}>Competencias (separadas por comas)</label>
          <textarea
            name="competencies"
            value={subject.competencies}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              fontSize: '16px',
              minHeight: '100px',
            }}
            required
            placeholder="Ej: Razonamiento lógico, Resolución de problemas, Análisis crítico"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '8px',
            fontWeight: '500',
            color: '#34495e'
          }}>Nota Final (0-10)</label>
          <input
            type="number"
            name="grade"
            min="0"
            max="10"
            step="0.1"
            value={subject.grade}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '6px',
              border: '1px solid #ced4da',
              fontSize: '16px',
            }}
            required
          />
        </div>

        <button
          type="submit"
          style={{
            padding: '12px 20px',
            backgroundColor: '#2ecc71',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '500',
            width: '100%',
          }}
        >
          Agregar Materia
        </button>
      </form>
    </div>
  );
};

export default SubjectForm;


// DONE