package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
public class StudentController {
    private final StudentService studentService;
@Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping(path = "/students")
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @GetMapping(path = "/student/{studentId}")
    public Student findStudentById(long id) {
        return studentService.findStudentById(id);
    }

    @PostMapping(path = "/students")
    public void registerNewStudent(@RequestBody Student student){
    studentService.addNewStudent(student);
    }
    @DeleteMapping(path = "/student/{studentId}")
    public void deleteStudent(@PathVariable("studentId") Long studentId){
    studentService.deleteStudent(studentId);
    }

    @PutMapping(path = "/student/{studentId}")
    public void updateStudent(@PathVariable Long studentId, @RequestBody Student student){
    studentService.updateStudent(studentId, student);
    }

}
