package app;
import java.sql.*;
import java.util.*;
public class Electric {
	
	 private static Connection connection;
	    private static Statement statement;
      static Scanner sc=new Scanner(System.in);
	    public static void main(String[] args) {
	        try {
	          
	            String username = "root";
	            String password = "Dhinesh007#";
	            String url = "jdbc:mysql://localhost:3306/electricitybill";
	            Class.forName("com.mysql.cj.jdbc.Driver");
	            connection = DriverManager.getConnection(url, username, password);
	            statement = connection.createStatement();

	            
	            createTables();

	            
	            showMenu();

	            connection.close();
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }

	    private static void createTables() throws SQLException {
	        String createCustomerTableSQL = "CREATE TABLE IF NOT EXISTS customers (" +
	                "id INT AUTO_INCREMENT PRIMARY KEY," +
	                "name VARCHAR(255) NOT NULL," +
	                "phone VARCHAR(20) NOT NULL," +
	                "address VARCHAR(255) NOT NULL," +
	                "cust_mail VARCHAR(255) NOT NULL," +
	                "aadhar_number VARCHAR(20) NOT NULL)";
	        statement.executeUpdate(createCustomerTableSQL);

	        String createBillTableSQL = "CREATE TABLE IF NOT EXISTS bills (" +
	                "bill_number INT AUTO_INCREMENT PRIMARY KEY," +
	                "customer_id INT NOT NULL," +
	                "month VARCHAR(10) NOT NULL," +
	                "units_consumed DOUBLE NOT NULL," +
	                "amount DOUBLE NOT NULL," +
	                "payment_status VARCHAR(10) NOT NULL)";
	        statement.executeUpdate(createBillTableSQL);
	    }
	    

	    private static void showMenu() {
	        while (true) {
	            System.out.println("\n1. Add new customer");
	            System.out.println("2. Generate the bill");
	            System.out.println("3. View customer details");
	            System.out.println("4. View bill Description");
	            System.out.println("5. Update payment status");
	            System.out.println("6. Exit");
	            System.out.print("Enter your choice: ");

	            int choice = sc.nextInt();
	            switch (choice) {
	                case 1:
	                    addNewCustomer();
	                    break;
	                case 2:
	                    generateBill();
	                    break;
	                case 3:
	                    viewCustomerDetails();
	                    break;
	                case 4:
	                    viewBillDetails();
	                    break;
	                case 5:
	                    updatePaymentStatus();
	                    break;
	                case 6:
	                    System.out.println("Terminating...");
	                    return;
	                default:
	                    System.out.println("Invalid choice. Please try again.");
	            }
	        }
	    }

	    private static void addNewCustomer() {
	        try {
	            System.out.print("Enter name: ");
	            String name = sc.next();

	            System.out.print("Enter contact no: ");
	            String phone = sc.next();;

	            System.out.print("Enter address: ");
	            String address = sc.next();
	            
	            System.out.print("Enter mail: ");
	            String cust_mail = sc.next();

	            System.out.print("Enter Aadhar: ");
	            String aadharNumber = sc.next();

	            String insertCustomerSQL = "INSERT INTO customers (name, phone, address, cust_mail, aadhar_number) VALUES (?, ?, ?, ?, ?)";
	            PreparedStatement insertCustomerStmt = connection.prepareStatement(insertCustomerSQL, Statement.RETURN_GENERATED_KEYS);
	            insertCustomerStmt.setString(1, name);
	            insertCustomerStmt.setString(2, phone);
	            insertCustomerStmt.setString(3, address);
	            insertCustomerStmt.setString(4, cust_mail);
	            insertCustomerStmt.setString(5, aadharNumber);
	            int affectedRows = insertCustomerStmt.executeUpdate();

	            if (affectedRows > 0) {
	                ResultSet generatedKeys = insertCustomerStmt.getGeneratedKeys();
	                if (generatedKeys.next()) {
	                    int customerId = generatedKeys.getInt(1);
	                    System.out.println("Customer added successfully! Customer ID: " + customerId);
	                }
	            } else {
	                System.out.println("Failed to add new customer.");
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }

	    private static void generateBill() {
	        try {
	            System.out.print("Enter customer ID: ");
	            int customerId = sc.nextInt();

	            System.out.print("Enter month: ");
	            String month = sc.next();

	            System.out.print("Enter units consumed: ");
	            double unitsConsumed = sc.nextDouble();
                
	            
	            String pstat="Not Done";
	           
	            double unitRate = 0.50; 
	            double amount = unitsConsumed * unitRate;

	            String insertBillSQL = "INSERT INTO bills (customer_id, month, units_consumed, amount, payment_status) VALUES (?, ?, ?, ?, ?)";
	            PreparedStatement insertBillStmt = connection.prepareStatement(insertBillSQL, Statement.RETURN_GENERATED_KEYS);
	            insertBillStmt.setInt(1, customerId);
	            insertBillStmt.setString(2, month);
	            insertBillStmt.setDouble(3, unitsConsumed);
	            insertBillStmt.setDouble(4, amount);
	            insertBillStmt.setString(5, pstat);
	            int affectedRows = insertBillStmt.executeUpdate();

	            if (affectedRows > 0) {
	                ResultSet generatedKeys = insertBillStmt.getGeneratedKeys();
	                if (generatedKeys.next()) {
	                    int billNumber = generatedKeys.getInt(1);
	                    System.out.println("Bill generated successfully! Bill ID: " + billNumber);
	                }
	            } else {
	                System.out.println("Failed to generate bill.");
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }

	    private static void viewCustomerDetails() {
	        try {
	            System.out.print("Enter customer ID: ");
	            int customerId = sc.nextInt();

	            String selectCustomerSQL = "SELECT * FROM customers WHERE id = ?";
	            PreparedStatement selectCustomerStmt = connection.prepareStatement(selectCustomerSQL);
	            selectCustomerStmt.setInt(1, customerId);
	            ResultSet resultSet = selectCustomerStmt.executeQuery();

	            if (resultSet.next()) {
	                Customer customer = new Customer(
	                        resultSet.getString("name"),
	                        resultSet.getString("phone"),
	                        resultSet.getString("address"),
	                        resultSet.getString("cust_mail"),
	                        resultSet.getString("aadhar_number")
	                );
	                customer.setId(customerId);
	                System.out.println("Customer Details:");
	                System.out.println(customer.toString());
	            } else {
	                System.out.println("Customer not found.");
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }

	    private static void viewBillDetails() {
	        try {
	            System.out.print("Enter customer ID: ");
	            int customerId = sc.nextInt();

	            String selectBillSQL = "SELECT * FROM bills WHERE customer_id = ?";
	            PreparedStatement selectBillStmt = connection.prepareStatement(selectBillSQL);
	            selectBillStmt.setInt(1, customerId);
	            ResultSet resultSet = selectBillStmt.executeQuery();

	            while (resultSet.next()) {
	                Bill bill = new Bill(
	                        resultSet.getInt("customer_id"),
	                        resultSet.getString("month"),
	                        resultSet.getDouble("units_consumed"),
	                        resultSet.getDouble("amount")
	                );
	                bill.setBillNumber(resultSet.getInt("bill_number"));
	                bill.setPaymentStatus(resultSet.getString("payment_status"));

	                System.out.println("Bill Details:");
	                System.out.println(bill.toString());
	                System.out.println("-----------------------------------");
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }

	    private static void updatePaymentStatus() {
	        try {
	            System.out.print("Enter bill number: ");
	            int billNumber = sc.nextInt();

	            System.out.print("Enter new payment status (Done/Not Done): ");
	            String newPaymentStatus = sc.next();

	            String updatePaymentStatusSQL = "UPDATE bills SET payment_status = ? WHERE bill_number = ?";
	            PreparedStatement updatePaymentStatusStmt = connection.prepareStatement(updatePaymentStatusSQL);
	            updatePaymentStatusStmt.setString(1, newPaymentStatus);
	            updatePaymentStatusStmt.setInt(2, billNumber);
	            int affectedRows = updatePaymentStatusStmt.executeUpdate();

	            if (affectedRows > 0) {
	                System.out.println("Payment status updated successfully!");
	            } else {
	                System.out.println("Failed to update payment status.");
	            }
	        } catch (Exception e) {
	            e.printStackTrace();
	        }
	    }
	}



