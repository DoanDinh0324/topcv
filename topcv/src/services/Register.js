import React, { useState } from "react";
import axios from "axios"; // Import Axios

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [message, setMessage] = useState(""); // Thêm state để lưu thông báo

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/api/register", formData);
            setMessage("Đăng ký thành công!"); // Cập nhật thông báo thành công
        } catch (error) {
            console.error("Error submitting form:", error);
            setMessage("Đăng ký không thành công. Vui lòng thử lại."); // Thông báo lỗi
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-2xl w-full">
                <h2 className="text-2xl font-bold text-center mb-4 text-green-600">
                    Chào mừng bạn đến với TopCV
                </h2>
                <p className="text-center mb-6">
                    Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                </p>

                {message && ( // Hiển thị thông báo nếu có
                    <div className="mb-4 text-center text-green-600">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex items-center border rounded-md px-3 py-2">
                        <span className="text-green-500 mr-3">
                            {/* Icon */}
                        </span>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nhập họ tên"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-md px-3 py-2">
                        <span className="text-green-500 mr-3">
                            {/* Icon */}
                        </span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Nhập email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-md px-3 py-2">
                        <span className="text-green-500 mr-3">
                            {/* Icon */}
                        </span>
                        <input
                            type="password"
                            name="password"
                            placeholder="Nhập mật khẩu"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-center border rounded-md px-3 py-2">
                        <span className="text-green-500 mr-3">
                            {/* Icon */}
                        </span>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Nhập lại mật khẩu"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full focus:outline-none"
                        />
                    </div>

                    <div className="flex items-start">
                        <input type="checkbox" className="mr-2 mt-1" />
                        <p className="text-sm">
                            Tôi đã đọc và đồng ý với{" "}
                            <a href="#" className="text-green-500 underline">
                                Điều khoản dịch vụ
                            </a>{" "}
                            và{" "}
                            <a href="#" className="text-green-500 underline">
                                Chính sách bảo mật
                            </a>{" "}
                            của TopCV
                        </p>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white rounded-md py-2 font-semibold hover:bg-green-600"
                    >
                        Đăng ký
                    </button>
                </form>

                <div className="flex items-center justify-center my-4">
                    <span className="px-2 text-gray-500">Hoặc đăng nhập bằng</span>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    <button className="bg-red-500 text-white py-2 rounded-md">Google</button>
                    <button className="bg-blue-500 text-white py-2 rounded-md">Facebook</button>
                    <button className="bg-blue-600 text-white py-2 rounded-md">LinkedIn</button>
                </div>

                <p className="mt-4 text-center">
                    Bạn đã có tài khoản?{" "}
                    <a href="/login" className="text-green-500 underline">
                        Đăng nhập ngay
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
