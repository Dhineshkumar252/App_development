package app;

public class Customer {
    private int id;
    public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getAadharNumber() {
		return aadharNumber;
	}

	public void setAadharNumber(String aadharNumber) {
		this.aadharNumber = aadharNumber;
	}

	private String name;
    private String phone;
    private String address;
    private String cust_mail;
    public String getCust_mail() {
		return cust_mail;
	}

	public void setCust_mail(String cust_mail) {
		this.cust_mail = cust_mail;
	}

	private String aadharNumber;

    public Customer(String name, String phone, String address,String cust_mail, String aadharNumber) {
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.cust_mail=cust_mail;
        this.aadharNumber = aadharNumber;
    }

    @Override
    public String toString() {
        return "Customer ID: " + id +
                "\nName: " + name +
                "\nPhone: " + phone +
                "\nAddress: " + address +
                "\nAadhar Number: " + aadharNumber;
    }
}
