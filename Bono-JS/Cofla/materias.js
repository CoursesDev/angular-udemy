const obtenerInformacion = (materia) => {
  materias = {
    fisica: ["Ramirez", "pedro", "juan", "carolina"],
    programacion: ["Orozco", "pedro", "juan", "carolina", "natalia", "maria"],
    logica: ["Ruiz", "pedro", "juan", "natalia"],
    quimica: ["Valencia", "pedro", "juan", "carolina", "natalia", "maria"],
  };

  if (materias[materia] !== undefined) {
    return [materias[materia], materia, materias];
  } else {
    return materias;
  }
};
const mostrarInformacion = (materia) => {
  let informacion = obtenerInformacion(materia);
  if (informacion !== false) {
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de: <b>${informacion[1]}</b> es: <b style='color:red'>${profesor}</b><br>
    Los alumnos son: <b style='color:blue'>${alumnos}</b><br><br>`);
  }
};

const cantidadClasePorAlumno = (alumno)=>{
   let informacion = obtenerInformacion();
   let cantTotal = 0;
    for (info in informacion) {
        if(informacion[info].includes(alumno)){
            cantTotal++;
        }
   }
   return `${alumno} esta en ${cantTotal} clases. <br><br>`
}

const clasesPresente = (alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
     for (info in informacion) {
         if(informacion[info].includes(alumno)){
             clasesPresentes.push(" "+info);
         }
    }
    return `${alumno} esta en ${clasesPresentes} <br>`
}

mostrarInformacion("fisica");
mostrarInformacion("logica");
mostrarInformacion("programacion");
mostrarInformacion("quimica");

document.write(cantidadClasePorAlumno("maria"));
document.write(clasesPresente("maria"))


//Incripción de materias

const inscribir = (alumno, materia) => {
  personas = materias[materia];
  if (personas.length >= 21) {
    document.write(`<br> Lo siento ${alumno}, las clases de ${materia} ya estan llenas<br>`)
  }else{
    personas.push(alumno);
    if (materia == "fisica"){
      materias = {
        fisica: personas,
        programacion: materias["programacion"],
        logica: materias["logica"],
        quimica: materias["quimica"],
      };
    }else if (materia == "programacion"){
      materias = {
        fisica: materias["fisica"],
        programacion: personas,
        logica: materias["logica"],
        quimica: materias["quimica"],
      };
    }else if (materia == "logica"){
      materias = {
        fisica: materias["fisica"],
        programacion: materias["programacion"],
        logica: personas,
        quimica: materias["quimica"],
      };
     }else if (materia == "quimica"){
      materias = {
        fisica: materias["fisica"],
        programacion: materias["programacion"],
        logica: materias["logica"],
        quimica: personas,
      };
     }
     document.write(`<br>Felicidades ${alumno} Te has matriculado en ${materia}<br>`)
  }
}

document.write(materias['quimica'])
inscribir("manuel", "quimica")
inscribir("luis", "quimica")
inscribir("gabriel", "quimica")
inscribir("juana", "quimica")
inscribir("manuel", "quimica")
inscribir("luis", "quimica")
inscribir("gabriel", "quimica")
inscribir("juana", "quimica")
inscribir("manuel", "quimica")
inscribir("luis", "quimica")
inscribir("gabriel", "quimica")
inscribir("juana", "quimica")
inscribir("manuel", "quimica")
inscribir("luis", "quimica")
inscribir("gabriel", "quimica")
inscribir("juana", "quimica")
inscribir("manuel", "quimica")
inscribir("luis", "quimica")
inscribir("gabriel", "quimica")
inscribir("juana", "quimica")
document.write(materias['quimica'])
