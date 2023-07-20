package com.unkownkoder.models;

public class RegistrationDTO {
    private String username;
    private String password;
    private String email;
    private long contactNumber;
    private String confirmpassword;
    public RegistrationDTO(){
        super();
    }

    public RegistrationDTO(String username, String password,String email,long contactNumber,String confirmpassword){
        super();
        this.username = username;
        this.password = password;
        this.email=email;
		this.contactNumber=contactNumber;
		this.confirmpassword=confirmpassword;
    }

    public String getUsername(){
        return this.username;
    }

    public void setUsername(String username){
        this.username = username;
    }
    public String getEmail() {
    	return email;
    }
    
    public void setEmail(String email) {
    	this.email = email;
    }
    
    public long getContactNumber() {
    	return contactNumber;
    }
    
    public void setContactNumber(long contactNumber) {
    	this.contactNumber = contactNumber;
    }
    
    public String getConfirmpassword() {
    	return confirmpassword;
    }
    
    public void setConfirmpassword(String confirmpassword) {
    	this.confirmpassword = confirmpassword;
    }

    public String getPassword(){
        return this.password;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String toString(){
        return "Registration info: username: " + this.username + " password: " + this.password;
    }
}
