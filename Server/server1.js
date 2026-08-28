const express = require('express');
const app = express();
const port = 3003;
app.use(express.json());
let students = [
    {
        id : 1,
        name :"Sarthak",
        course : "MCA",
        age :22
    },
    {
         id : 2,
        name :"Vijay",
        course : "BE",
        age :22
    },
    {
         id : 3,
        name :"Himmuuu",
        course : "MCA",
        age :22
    }
];
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to student Rest API"
    });
});

app.get("/api/student", (req, res) =>{
    res.status(200).json(students);
});

app.get("/api/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const student = students.find(student => student.id === id);

    if(!student){
        return res.status(404).json({
            message: "Student not found"
        });
    }
    res.status(200).json(student);
});

app.post("/api/students", (req, res) => {
    const {name, course, age} = req.body;

    if(!name || !course || !age){
        return res.status(400).json({
            message: "Name, Course and age are required"
        });
    }
    const newStudent = {
        id: students.length+1,
        name,
        course,
        age
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

app.listen(port, () =>{
    console.log(`Rest API running at http://localhost:${port}`);
});