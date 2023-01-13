package config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CrosConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        .allowedHeaders("*")
                        .allowedOrigins("http://localhost:4200");
            }
        };
    }
}


//package in.keepgrowing.springbootangularscaffolding.config;
//
//        import org.springframework.context.annotation.Configuration;
//        import org.springframework.context.annotation.Profile;
//        import org.springframework.web.servlet.config.annotation.CorsRegistry;
//        import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
//
//@Configuration
//@Profile("development")
//public class DevCorsConfiguration implements WebMvcConfigurer {
//
//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/api/**");
//    }
//}