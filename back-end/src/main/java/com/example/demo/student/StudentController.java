package com.example.demo.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
@CrossOrigin(origins = {"http://localhost:4200", "http://localhost:3000"})
public class StudentController {
    private final StudentService studentService;
@Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @GetMapping(path = "/{studentId}")
    public Student findStudentById(long id) {
        return studentService.findStudentById(id);
    }

    @PostMapping
    public void registerNewStudent(@RequestBody Student student){
    studentService.addNewStudent(student);
    }
    @DeleteMapping(path = "{studentId}")
    public void deleteStudent(@PathVariable("studentId") Long studentId){
    studentService.deleteStudent(studentId);
    }

    @PutMapping(path = "/{studentId}")
    public void updateStudent(@PathVariable("studentId") Long studentId, @RequestBody Student student){
    studentService.updateStudent(studentId, student);
    }

}
