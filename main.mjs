// const dayan = {
//     name: "Alondra",
//     age: 23,
//     aprovedCouses: [
//         "CSS Grid Layout",
//         "Scopes and Closures",
//     ],

//     aprobarCurso(nuevoCurso){
//         this.aprovedCouses.push(nuevoCurso); 
//     }
// };

// function Student(name, age , aprovedCouses){
//     this.name = name;
//     this.age = age;
//     this.aprovedCouses = aprovedCouses;
// }

// Student.prototype.aprovarCurso = function(nuevoCurso){
//     this.aprovedCouses.push(nuevoCurso);
// }

// const juanita = new Student(
//     "Juanita Kirkland",
//     29,
//     ["CSS", "HTML", "Scopes"],
//     );

// //// Prototipos con la sintaxis de clases
// class Student2 {
//     constructor({
//         name,
//         age,
//         email,
//         facebook = "",
//         twitter = "",
//         instagram = "",
//     }){
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }
//     aprobarCurso1(newCourse){
//         this.aprovedCouses.push(newCourse);
//     }
// } 

// const alanc = new Student2({
//     email: "alanc@gmail.com",
//     name: "alanc",
//     age: 28,
// });

function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se esta reproduciendo desde url: " + urlSecreta);
}
function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos la url: " + urlSecreta);
}

export class PlatziClass{
    constructor({
        name,
        videoID,
    }) {
        this.name = name;
        this.videoID = videoID;
    }

    reproducir(){
        videoPlay(this.videoID);
    }
    pausar(){
        videoStop(this.videoID);
    }
}


















// //* VENTAJAS DE LA PROGRAMACIÓN ORIENTADA A OBJETOS
// class Course{
//     constructor({
//         name,
//         clases: [],
//     }){
//         this._name = name;
//         this.clases = this.clases;
//     }

//     get name(){
//         return this._name;
//     }
//     set name(nuevoNombrecito){
//         if(nuevoNombrecito === "Curso malito de programación básica"){
//             console.error("No cambiar el nombre")
//         }else{
//             this._name = nuevoNombrecito;
//         }
//     }
// }
// class LearningPath{
//     constructor({
//         name,
//         courses = [],
//     }){
//         this.name = name;
//         this.cuorses = courses;
//     }
// }

// const cursoProgramacionBasica = new Course({
//     name: "Curso gratis de programación básica",
//     clases:["Clase de computación básica","Clase de pensamiento lógico"],
// });
// cursoProgramacionBasica.name = "Curso básico de computación básica";

// const cursoDefinitivoHTML = new Course({
//     name: "Curso definitivo de HTML y CSS",
//     clases:["Clase de computación básica","Clase de pensamiento lógico"],
// });
// const cursoPracticoHTML = new Course({
//     name: "Curso práctico de HTML y CSS",
//     clases:["Clase de Frontend Developer", "CSS Grid"],
// });

// const escuelaWeb = new LearningPath({
//     name: "Escuela de desarrollo web",
//     courses: [cursoProgramacionBasica, cursoDefinitivoHTML]
// });
// const dataScience = new LearningPath({
//     name: "Escuela de data science",
//     courses: [cursoDefinitivoHTML, cursoPracticoHTML],
// });
// const videogame = new LearningPath({
//     name: "Escuela de Videojuegos",
//     courses: [cursoPracticoHTML, cursoProgramacionBasica],
// });

// const alanc11 = {
//     name: "Alan",
//     username: "alanc11",
//     points: 5000,
//     socialMedia:{
//         twitter: "alanC",
//         instagram: "alancast11",
//         facebook: undefined,
//     },
//     learningPaths: [
//         escuelaWeb,
//         dataScience,
//         videogame,
//     ]
// }