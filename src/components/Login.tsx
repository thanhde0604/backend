import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Thực hiện xác thực người dùng ở đây.
    // Nếu có lỗi, đặt nó trong setError.

    setError("Lỗi xác thực"); // Ví dụ lỗi đơn giản
      
    // Nếu xác thực thành công, bạn có thể điều hướng tới trang chính hoặc thực hiện các hành động khác.
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Form onSubmit={handleSubmit}>
        <div style={{ width: "300px" }}>
          <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Đăng nhập</h1>

          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: "10px" }}
            />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: "20px" }}
            />
          </Form.Group>

          <Link to="/home"> {/* Sử dụng Link để điều hướng */}
            <Button variant="primary" type="submit" style={{ borderRadius: "20px", padding: "10px 20px", width: "100%" }}>
              Đăng nhập
            </Button>
          </Link>

          <p style={{ marginTop: "10px", textAlign: "center" }}>
            Không có tài khoản? <a href="#">Đăng ký</a>
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Login;
