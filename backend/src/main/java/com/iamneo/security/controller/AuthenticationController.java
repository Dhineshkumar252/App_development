package com.iamneo.security.controller;



import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.iamneo.security.dto.request.AuthenticationRequest;
import com.iamneo.security.dto.request.RegisterRequest;
import com.iamneo.security.dto.response.AuthenticationResponse;
import com.iamneo.security.service.AuthenticationService;


import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin(origins="*")

public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
    	System.out.println("req: "+ request);
        return ResponseEntity.ok(authenticationService.register(request));
    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(authenticationService.authenticate(request));
    }
    private final RestTemplate rest;
    @PostMapping("/send")
       public ResponseEntity<String> sendDataToServerA(@RequestBody String data) {
           // Prepare the data to be sent to Server A
           HttpHeaders headers = new HttpHeaders();
           headers.setContentType(MediaType.APPLICATION_JSON);

           HttpEntity<String> request = new HttpEntity<>(data, headers);

           String serverAResponse = rest.postForObject("http://localhost:8182/send-data", request, String.class);

           return ResponseEntity.ok(serverAResponse);
       }
}
