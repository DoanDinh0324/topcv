import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/login", {
                email,
                password,
            });
            localStorage.setItem('token', response.data.token); // Lưu token
            setMessage("Đăng nhập thành công!"); // Thông báo thành công
            navigate('/dashboard'); // Chuyển hướng đến trang dashboard hoặc trang khác
        } catch (error) {
            console.error("Đăng nhập không thành công:", error);
            setMessage("Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin.");
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-50">
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl">
                <h2 className="text-center text-xl font-semibold text-green-600 mb-4">
                    Chào mừng bạn đã quay trở lại
                </h2>
                <p className="text-center text-gray-600 mb-6">
                    Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
                </p>

                {message && <div className="mb-4 text-center text-red-600">{message}</div>}

                <form onSubmit={handleLogin}>
                    {/* Email Input */}
                    <div className="mb-4">
                        <label className="block text-gray-500">Email</label>
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Email"
                                required
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label className="block text-gray-500">Mật khẩu</label>
                        <div className="relative">
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                placeholder="Mật khẩu"
                                required
                            />
                        </div>
                    </div>

                    {/* Forgot Password */}
                    <div className="flex justify-end mb-4">
                        <a href="#" className="text-green-600">Quên mật khẩu</a>
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                    >
                        Đăng nhập
                    </button>

                    {/* Social Login */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-500 mb-4">Hoặc đăng nhập bằng</p>
                        <div className="flex justify-center space-x-4">
                            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Google</button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Facebook</button>
                            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg">LinkedIn</button>
                        </div>
                    </div>

                    {/* Register and Support */}
                    <div className="mt-6 text-center text-gray-600">
                        <p>Bạn chưa có tài khoản? <a href="#" className="text-green-600">Đăng ký ngay</a></p>
                        <p className="mt-4">Bạn gặp khó khăn khi tạo tài khoản?</p>
                        <p className="text-green-600">Gọi (+84) 123456789</p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
