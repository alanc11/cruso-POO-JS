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

