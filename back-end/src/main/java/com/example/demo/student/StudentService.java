package com.example.demo.student;

import com.example.demo.exception.ApiRequestException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.yaml.snakeyaml.representer.BaseRepresenter;

import java.time.LocalDate;
import java.time.Month;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    List<Student> list = new ArrayList<>();
    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents() {
        return this.studentRepository.findAll();

    }

    //TODO: add new method named findByIdStudent()

    public void addNewStudent(Student student) {
        Optional<Student> studentOptional = studentRepository.findStudentByEmail(student.getEmail());
        if (studentOptional.isPresent()) {
            throw new IllegalStateException("email taken");
        }
        studentRepository.save(student);
    }


    public void deleteStudent(Long studentId) {
        boolean exists = studentRepository.existsById(studentId);
        if (!exists){
            throw  new IllegalStateException("student with id : "+ studentId + "does not exists");
        }
        studentRepository.deleteById(studentId);
    }

    public void updateStudent(long studentId, Student student){
        Student studentOptional = studentRepository.findStudentById(studentId);
        if (studentOptional != null){
            studentOptional.setName(student.getName());
            studentOptional.setDob(student.getDob());
            studentOptional.setEmail(student.getEmail());
            studentRepository.save(studentOptional);
        }
        if (studentOptional == null){
            throw new ApiRequestException();
        }
    }

    public Student findStudentById(long id) {
        return studentRepository.findStudentById(id);
    }
}
