package com.example.demo.student;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class StudentConfig {
    @Bean
    CommandLineRunner commandLineRunner(StudentRepository repository) {
        return args -> {
            Student mariam = new Student(

                    "Mariam",
                    "mariam.jamal@gmail.com",
                    LocalDate.of(2000, Month.JANUARY, 5)

            );
            Student alex = new Student(

                    "Alex",
                    "alex@gmail.com",
                    LocalDate.of(2004, Month.JANUARY, 5)

            );
            Student youssef = new Student(

                    "Youssef",
                    "youssef@gmail.com",
                    LocalDate.of(1999, Month.DECEMBER, 10)

            );

            Student ali = new Student(

                    "Ali",
                    "Ali@gmail.com",
                    LocalDate.of(1998, Month.JULY, 12)

            );

            Student zakaria = new Student(

                    "Zakaria",
                    "Zakaria@gmail.com",
                    LocalDate.of(1997, Month.MAY, 5)

            );

            Student ahmed = new Student(

                    "Ahmed",
                    "Ahmed@gmail.com",
                    LocalDate.of(1994, Month.JANUARY, 10)

            );

            Student mohammed = new Student(

                    "Mohammed",
                    "Mohammed@gmail.com",
                    LocalDate.of(1995, Month.MAY, 5)

            );

            Student ayman = new Student(

                    "Ayman",
                    "Ayman@gmail.com",
                    LocalDate.of(1994, Month.JULY, 15)

            );

            Student yassine = new Student(

                    "Yassine",
                    "Yassine@gmail.com",
                    LocalDate.of(1987, Month.SEPTEMBER, 7)

            );

            Student yahya = new Student(

                    "Yahya",
                    "Yahya@gmail.com",
                    LocalDate.of(1997, Month.APRIL, 2)

            );
            repository.saveAll(
                    List.of(mariam, alex, youssef, ali, zakaria, ahmed, mohammed, ayman, yassine, yahya )
            );
        };
    }
}
