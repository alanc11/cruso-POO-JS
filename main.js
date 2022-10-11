const dayan = {
    name: "Alondra",
    age: 23,
    aprovedCouses: [
        "CSS Grid Layout",
        "Scopes and Closures",
    ],

    aprobarCurso(nuevoCurso){
        this.aprovedCouses.push(nuevoCurso); 
    }
};

function Student(name, age , aprovedCouses){
    this.name = name;
    this.age = age;
    this.aprovedCouses = aprovedCouses;
}

Student.prototype.aprovarCurso = function(nuevoCurso){
    this.aprovedCouses.push(nuevoCurso);
}

const juanita = new Student(
    "Juanita Kirkland",
    29,
    ["CSS", "HTML", "Scopes"],
    );

//// Prototipos con la sintaxis de clases
class Student2 {
    constructor({
        name,
        age,
        email,
        facebook = "",
        twitter = "",
        instagram = "",
    }){
        this.name = name;
        this.age = age;
        this.email = email;
    }
    aprobarCurso1(newCourse){
        this.aprovedCouses.push(newCourse);
    }
} 

const alanc = new Student2({
    email: "alanc@gmail.com",
    name: "alanc",
    age: 28,
});

//* VENTAJAS DE LA PROGRAMACIÓN ORIENTADA A OBJETOS
class Course{
    constructor({
        name,
        clases: [],
    }){
        this.name = name;
        this.clases = this.clases;
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
class ClassList{
    constructor({
        
    }){

    }
}

const cursoProgramacionBasica = new Course({
    name: "Curso gratis de programación básica",
    clases:["Clase de computación básica","Clase de pensamiento lógico"],
});

const cursoDefinitivoHTML = new Course({
    name: "Curso definitivo de HTML y CSS",
    clases:["Clase de computación básica","Clase de pensamiento lógico"],
});
const cursoPracticoHTML = new Course({
    name: "Curso práctico de HTML y CSS",
    clases:["Clase de Frontend Developer", "CSS Grid"],
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