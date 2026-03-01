// Thanh menu trên cùng

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  // Xử lý đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("token"); // Xóa token
    navigate("/"); // Quay về login
  };

  return (
    <div style={styles.navbar}>
      <h3>🏢 Hệ Thống Văn Phòng Số</h3>

      <button onClick={handleLogout} style={styles.logoutBtn}>
        Đăng xuất
      </button>
    </div>
  );
};

const styles = {
  navbar: {
    height: "60px",
    backgroundColor: "#1976d2",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px",
  },
  logoutBtn: {
    padding: "6px 12px",
    cursor: "pointer",
  },
};

export default Navbar;