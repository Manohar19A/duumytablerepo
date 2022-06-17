package org.DEP.BranchAdmin;

import org.DEP.BranchAdmin.model.BranchAdminResponse;
import org.DEP.BranchAdmin.model.BranchAdminStatus;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.reactive.config.EnableWebFlux;
import org.springframework.web.reactive.function.client.WebClient;

@SpringBootApplication
@EnableEurekaClient
public class BranchAdminApplication {

    @Bean
    public WebClient getWebClient() {
        return WebClient.builder()
                .baseUrl("http://localhost:8989/login")
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .build();
    }

    @Bean
    public BranchAdminResponse branchAdminResponse(){
        return new BranchAdminResponse();
    }

    @Bean
    public BranchAdminStatus branchAdminStatus(){
        return new BranchAdminStatus();
    }

    public static void main(String[] args) {
        SpringApplication.run(BranchAdminApplication.class, args);
    }

}
