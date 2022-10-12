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



// Student.prototype.aprovarCurso = function(nuevoCurso){
//     this.aprovedCouses.push(nuevoCurso);
// }

// const juanita = new Student(
//     "Juanita Kirkland",
//     29,
//     ["CSS", "HTML", "Scopes"],
//     );

// //// Prototipos con la sintaxis de clases
// function Student(name, age , aprovedCouses){
//     this.name = name;
//     this.age = age;
//     this.aprovedCouses = aprovedCouses;
// }

// const alanc = new Student2({
//     email: "alanc@gmail.com",
//     name: "alanc",
//     age: 28,
// });
class Comment{
    constructor({
        content,
        author,
        role,
    }){
        this.content = content;
        this.author = author;
        this.role = role;
        this.likes = 0;
    }

    publicar(){
        console.log(this.author + " es " + this.role + " y commentó: " + this.content);
        console.log(this.likes + " likes");
    }
}
class Student {
    constructor({
        name,
        age,
        email,
        username,
        facebook = undefined,
        twitter = undefined,
        instagram = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.age = age;
        this.username = username;
        this.email = email;
        this.socialMedia = {
            twitter,
            facebook,
            instagram,
        };
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
    aprobarCurso1(newCourse){
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            author: this.name,
            role: "Estudiante",
        });
        comment.publicar();
    }
} 

class FreeStudent extends Student{
    constructor(propierties){
        super(propierties);
    }

    approveCourse(newCourse){
        if(newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos " + this.name + ", solo puedes tomar cursos gratis");        
        }
    }
}

class BasicStudent extends Student{
    constructor(propierties){
        super(propierties);
    }
    approveCourse(newCourse){
        if(newCourse.lang !== "eng"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("Lo sentimos " + this.name + ", solo puedes tomar cursos en español");        
        }
    }
}

class ExpertStudent extends Student{
    constructor(propierties){
        super(propierties);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }

}

function videoPlay(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Se esta reproduciendo desde url: " + urlSecreta);
}
function videoStop(id){
    const urlSecreta = "https://platziultrasecreto.com/" + id;
    console.log("Pausamos la url: " + urlSecreta);
}

class PlatziClass{
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
class Course{
    constructor({
        name,
        clases: [],
        isFree = false,
        lang = "spanish"
    }){
        this._name = name;
        this.clases = this.clases;
        this.isFree = isFree;
        this.lang = lang;
    }

    get name(){
        return this._name;
    }
    set name(nuevoNombrecito){
        if(nuevoNombrecito === "Curso malito de programación básica"){
            console.error("No cambiar el nombre")
        }else{
            this._name = nuevoNombrecito;
        }
    }
}
class LearningPath{
    constructor({
        name,
        courses = [],
    }){
        this.name = name;
        this.cuorses = courses;
    }
}
class TeacherStudent extends Student{
    constructor(propierties){
        super(propierties);
    }
    approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            author: this.name,
            role: "Profesor",
        });
        comment.publicar();
    }


}

//:Instancias de los objetos
const cursoProgramacionBasica = new Course({
    name: "Curso gratis de programación básica",
    clases:["Clase de computación básica","Clase de pensamiento lógico"],
    isFree: true,
    lang: "spa",
});
// cursoProgramacionBasica.name = "Curso básico de computación básica";

const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
    clases:["Clase de computación básica","Clase de pensamiento lógico"],
    isFree: false,
    lang: "spa",
});
const cursoPracticoHTML = new Course({
    name: "Curso práctico de HTML y CSS",
    clases:["Clase de Frontend Developer", "CSS Grid"],
    isFree: false,
    lang: "eng",
});

const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [cursoProgramacionBasica, cursoDefinitivoHTML]
});
const dataScience = new LearningPath({
    name: "Escuela de data science",
    courses: [cursoDefinitivoHTML, cursoPracticoHTML],
});
const videogame = new LearningPath({
    name: "Escuela de Videojuegos",
    courses: [cursoPracticoHTML, cursoProgramacionBasica],
});

const alanc11 = {
    name: "Alan",
    username: "alanc11",
    points: 5000,
    socialMedia:{
        twitter: "alanC",
        instagram: "alancast11",
        facebook: undefined,
    },
    learningPaths: [
        escuelaWeb,
        dataScience,
        videogame,
    ]
}

const alanC = new BasicStudent({
    name: "Alan Omar",
    age: 24,
    email: "castillo.alan911@gmail.com",
    username: "alanc11",
    instagram: "alancast11",
    facebook: "Alan Castillo",
    learningPaths: [
        escuelaWeb,
        videogame,
    ]
});
const dayanbb = new FreeStudent({
    name: "Dayan Bb",
    age: 24,
    email: "dayan@bb.com",
    username: "day25",
    instagram: "alogovi",
    facebook: "Alondra Gomez",
    learningPaths: [
        dataScience,
        videogame,
    ]
});
const programer = new ExpertStudent({
    name: "Alan del futuro",
    age: 24,
    email: "alan@programmer.com",
    username: "alanOG",
    instagram: "respect OG",
    facebook: "OGGG",
    learningPaths: [
        dataScience,
        videogame,
        escuelaWeb,
    ]
});

const JuanDC = new TeacherStudent({
    name: "Juan DC",
    age: 29,
    email: "juandc@platzi.com",
    username: "JuanDCDC",
    instagram: "respect DC",
    facebook: "DiCi",
});
