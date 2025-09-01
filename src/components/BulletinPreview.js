import React from 'react';

const BulletinPreview = ({ student, subjects }) => {
  const calculateGeneralAverage = () => {
    if (!subjects.length) return '0.0';
    const total = subjects.reduce((sum, sub) => sum + parseFloat(sub.grade), 0);
    return (total / subjects.length).toFixed(1);
  };

  // Función que genera el HTML para la impresión y descarga
  const generatePrintableHTML = () => {
    return `<!DOCTYPE html>
<html>
<head>
  <title>Boletín Escolar</title>
  <style>
    @page { size: letter; margin: 1cm; }
    body { font-family: Arial; margin: 0; padding: 20px; }
    table { width: 100%; border-collapse: collapse; }
    th, td { border: 1px solid #ddd; padding: 8px; }
    th { background-color: #f5f5f5; }
    .competency-cell { border-bottom: 1px solid #eee; padding: 5px; }
    .photo { width: 80px; height: 80px; border-radius: 50%; }
    tr { break-inside: avoid; page-break-inside: avoid; }
  </style>
</head>
<body>
    <div style="display: flex; justify-content: center; align-items: center; position: relative; height: auto; margin-bottom: 20px; padding: 20px; border-bottom: 2px solid #ddd;">
    <div style="text-align: center;">
      <h2 style="margin: 0; color: #2c3e50;">CENTRO EDUCATIVO PEQUEÑOS GENIOS</h2>
      <p style="margin: 5px 0 0; color: #555;">Resolución No. 351 agosto 19 de 2010</p>
      <p style="margin: 0; color: #555;">Secretaría de Educación Municipal</p>
      <p style="margin: 0; color: #555;">DANE 344001001311 NIT 900381245 - 6</p>
      <p style="margin: 0; color: #555;">Cl 15 No. 12 C 03</p>
      <p style="margin: 0; color: #555;">Riohacha - La Guajira</p>
    </div>
    <div style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); width: 100px;">
      <img src="${process.env.PUBLIC_URL}/img/logo_pequeños.png" style="width: 100%; height: auto;">
    </div>
  </div>

  <h1 style="text-align:center">Boletín Escolar</h1>

  <table style="margin-bottom:20px">
    <tr>
      <td><strong>Estudiante:</strong></td>
      <td>${student.firstName} ${student.lastName}</td>
      ${student.photo ? `<td rowspan="4" style="text-align:center">
        <img src="${student.photo}" class="photo">
      </td>` : ''}
    </tr>
    <tr>
      <td><strong>Grado:</strong></td>
      <td>${student.grade}</td>
    </tr>
    <tr>
      <td><strong>Periodo:</strong></td>
      <td>${student.period}</td>
    </tr>
    <tr>
      <td><strong>Jornada:</strong></td>
      <td>${student.schedule}</td>
    </tr>
  </table>

  <h2 style="text-align:center">Evaluación de Competencias</h2>

  <table>
      <tr>
        <th>Materia</th>
        <th style="width:60%">Competencias</th>
        <th>Nota</th>
      </tr>
    <tbody>
      ${subjects.map(subject => {
        const competencies = subject.competencies.split(',').filter(c => c.trim());
        return competencies.map((comp, i) => `
          <tr>
            ${i === 0 ? `<td rowspan="${competencies.length}" style="text-align: center; vertical-align: middle;">${subject.name}</td>` : ''}
            <td class="competency-cell">${comp.trim()}</td>
            ${i === 0 ? `<td rowspan="${competencies.length}" style="text-align:center">${subject.grade}</td>` : ''}
          </tr>
        `).join('');
      }).join('')}
    </tbody>
  </table>

  <div style="text-align:right; font-weight:bold; margin-top:20px">
    Promedio General: ${calculateGeneralAverage()}
  </div>

    <table style="width: 100%; margin-top: 100px; border: none;">
    <tr>
      <td style="border: none; text-align: center;">
        <div style="border-bottom: 1px solid #000; width: 80%; margin: 0 auto; height: 2em;"></div>
        <div style="margin-top: 5px;">Firma del Profesor</div>
      </td>
      <td style="border: none; text-align: center;">
        <div style="border-bottom: 1px solid #000; width: 80%; margin: 0 auto; height: 2em;"></div>
        <div style="margin-top: 5px;">Firma del Rector</div>
      </td>
    </tr>
  </table>

</body>
</html>`;
  };

  const handlePrint = () => {
    const printContent = generatePrintableHTML();
    const printWindow = window.open('', '_blank');
    printWindow.document.write(printContent);
    printWindow.document.close();

    printWindow.onload = () => {
      printWindow.print();
    };
  };

  const handleDownload = () => {
    const htmlContent = generatePrintableHTML();
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Boletin_${student.firstName}_${student.lastName}.html`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h2 style={{ margin: 0 }}>Vista Previa del Boletín</h2>
        <div>
          <button onClick={handlePrint} style={buttonStyle}>
            Imprimir
          </button>
          <button onClick={handleDownload} style={{ ...buttonStyle, marginLeft: '10px', backgroundColor: '#2ecc71' }}>
            Descargar
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
        {/* Encabezado para la vista previa en el navegador */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: 'auto',
          marginBottom: '20px',
          padding: '20px',
          borderBottom: '2px solid #ddd',
        }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ margin: '0', color: '#2c3e50' }}>CENTRO EDUCATIVO PEQUEÑOS GENIOS</h2>
            <p style={{ margin: '5px 0 0', color: '#555' }}>Resolución No. 351 agosto 19 de 2010</p>
            <p style={{ margin: '0', color: '#555' }}>Secretaría de Educación Municipal</p>
            <p style={{ margin: '0', color: '#555' }}>DANE 344001001311 NIT 900381245 - 6</p>
            <p style={{ margin: '0', color: '#555' }}>Cl 15 No. 12 C 03</p>
            <p style={{ margin: '0', color: '#555' }}>Riohacha - La Guajira</p>
          </div>
          <div style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '100px',
          }}>
            <img
              src={`${process.env.PUBLIC_URL}/img/logo-pequenos-genios.png`}
              alt="Logo Centro Educativo Pequeños Genios"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {student.firstName && (
          <div style={{ marginBottom: '30px' }}>
            <h2 style={{ textAlign: 'center' }}>Boletín Escolar</h2>
            <table style={{ width: '100%', marginBottom: '20px' }}>
              <tbody>
                <tr>
                  <td><strong>Estudiante:</strong></td>
                  <td>{student.firstName} {student.lastName}</td>
                  {student.photo && (
                    <td rowSpan="4" style={{ textAlign: 'center' }}>
                      <img src={student.photo} alt="Estudiante" style={{ width: '80px', height: '80px', borderRadius: '50%' }} />
                    </td>
                  )}
                </tr>
                <tr>
                  <td><strong>Grado:</strong></td>
                  <td>{student.grade}</td>
                </tr>
                <tr>
                  <td><strong>Periodo:</strong></td>
                  <td>{student.period}</td>
                </tr>
                <tr>
                  <td><strong>Jornada:</strong></td>
                  <td>{student.schedule}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {subjects.length > 0 && (
          <div>
            <h3 style={{ textAlign: 'center' }}>Evaluación de Competencias</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={tableHeaderStyle}>Materia</th>
                  <th style={{ ...tableHeaderStyle, width: '60%' }}>Competencias</th>
                  <th style={tableHeaderStyle}>Nota</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject, index) => {
                  const competencies = subject.competencies.split(',').filter(c => c.trim());
                  return competencies.map((comp, i) => (
                    <tr key={`${index}-${i}`}>
                      {i === 0 && (
                        <td
                          rowSpan={competencies.length}
                          style={{ ...tableCellStyle, textAlign: 'center', verticalAlign: 'middle' }}
                        >
                          {subject.name}
                        </td>
                      )}
                      <td style={tableCellStyle}>{comp.trim()}</td>
                      {i === 0 && (
                        <td
                          rowSpan={competencies.length}
                          style={{ ...tableCellStyle, textAlign: 'center' }}
                        >
                          {subject.grade}
                        </td>
                      )}
                  </tr>
                  ));
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Firma Profesor y Rector en vista previa */}
        <table style={{ width: '100%', marginTop: '100px', border: 'none' }}>
          <tbody>
            <tr>
              <td style={{ border: 'none', textAlign: 'center' }}>
                <div style={{ borderBottom: '1px solid #000', width: '80%', margin: '0 auto', height: '2em' }}></div>
                <div style={{ marginTop: '5px' }}>Firma del Profesor</div>
              </td>
              <td style={{ border: 'none', textAlign: 'center' }}>
                <div style={{ borderBottom: '1px solid #000', width: '80%', margin: '0 auto', height: '2em' }}></div>
                <div style={{ marginTop: '5px' }}>Firma del Rector</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const tableHeaderStyle = {
  padding: '12px',
  backgroundColor: '#f5f5f5',
  border: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '12px',
  border: '1px solid #ddd',
  verticalAlign: 'top',
};

export default BulletinPreview;