import java.sql.*;

public class BankTransfer {
    public static void main(String[] args) throws SQLException {
        Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/bankdb", "root", "password");
        conn.setAutoCommit(false);

        try (
            PreparedStatement debit = conn.prepareStatement("UPDATE accounts SET balance = balance - ? WHERE id = ?");
            PreparedStatement credit = conn.prepareStatement("UPDATE accounts SET balance = balance + ? WHERE id = ?");
        ) {
            debit.setDouble(1, 100.0);
            debit.setInt(2, 1);
            debit.executeUpdate();

            credit.setDouble(1, 100.0);
            credit.setInt(2, 2);
            credit.executeUpdate();

            conn.commit();
            System.out.println("Transfer successful.");
        } catch (SQLException e) {
            conn.rollback();
            System.out.println("Transaction failed: " + e.getMessage());
        }
    }
}
