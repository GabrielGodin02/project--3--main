import React, { useState } from 'react';

const StudentForm = ({ onStudentChange }) => {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    grade: '',
    period: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prev => ({ ...prev, [name]: value }));
    onStudentChange({ ...student, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newStudent = { ...student, photo: reader.result };
        setStudent(newStudent);
        onStudentChange(newStudent);
      };
      reader.readAsDataURL(file);
    }
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
      }}>Información del Estudiante</h2>

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td style={{ padding: '10px', width: '25%' }}>
              <label style={{ fontWeight: '500' }}>Nombre:</label>
            </td>
            <td style={{ padding: '10px', width:'55%' }}>
              <input
                type="text"
                name="firstName"
                value={student.firstName}
                onChange={handleChange}
                style={inputStyle}
              />
            </td>
            <td rowSpan="4" style={{ textAlign: 'center', width: '150px' }}>
              {student.photo && (
                <img 
                  src={student.photo} 
                  alt="Foto del estudiante" 
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '2px solid #3498db',
                    objectFit: 'cover'
                  }}
                />
              )}
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>
              <label style={{ fontWeight: '500' }}>Apellido:</label>
            </td>
            <td style={{ padding: '10px', width:'55%' }}>
              <input
                type="text"
                name="lastName"
                value={student.lastName}
                onChange={handleChange}
                style={inputStyle}
              />
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>
              <label style={{ fontWeight: '500' }}>Grado:</label>
            </td>
            <td style={{ padding: '10px' }}>
              <select
                name="grade"
                value={student.grade}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Seleccione...</option>
                {Array.from({ length: 11 }, (_, i) => (
                  <option key={i} value={`${i+1}°`}>{i+1}° Grado</option>
                ))}
              </select>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px' }}>
              <label style={{ fontWeight: '500' }}>Periodo:</label>
            </td>
            <td style={{ padding: '10px' }}>
              <select
                name="period"
                value={student.period}
                onChange={handleChange}
                style={inputStyle}
              >
                <option value="">Seleccione...</option>
                <option value="Primer Trimestre">Primer Trimestre</option>
                <option value="Segundo Trimestre">Segundo Trimestre</option>
                <option value="Tercer Trimestre">Tercer Trimestre</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Botón de seleccionar archivo debajo del formulario */}
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          style={{ display: 'block', margin: '10px auto' }}
        />
      </div>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '6px',
  border: '1px solid #ced4da',
  fontSize: '16px',
};

export default StudentForm;