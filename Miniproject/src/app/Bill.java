package app;

public class Bill {
    private int billNumber;
    public int getBillNumber() {
		return billNumber;
	}

	public void setBillNumber(int billNumber) {
		this.billNumber = billNumber;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public double getUnitsConsumed() {
		return unitsConsumed;
	}

	public void setUnitsConsumed(double unitsConsumed) {
		this.unitsConsumed = unitsConsumed;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	private int customerId;
    private String month;
    private double unitsConsumed;
    private double amount;
    private String paymentStatus;

    public Bill(int customerId, String month, double unitsConsumed, double amount) {
        this.customerId = customerId;
        this.month = month;
        this.unitsConsumed = unitsConsumed;
        this.amount = amount;
        this.paymentStatus = "Unpaid"; // Set default payment status to "Unpaid"
    }
    @Override
    public String toString() {
        return "Bill Number: " + billNumber +
                "\nCustomer ID: " + customerId +
                "\nMonth: " + month +
                "\nUnits Consumed: " + unitsConsumed +
                "\nAmount: " + amount +
                "\nPayment Status: " + paymentStatus;
    }
}

