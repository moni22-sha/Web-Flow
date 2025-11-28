

"use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function LoginPage() {
//   const router = useRouter();

//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: any) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     // Dummy login check
//     if (form.email === "test@gmail.com" && form.password === "12345") {
//       // SAVE USER IN LOCAL STORAGE
//       localStorage.setItem("user", JSON.stringify(form));

//       // REDIRECT TO PROFILE PAGE
//       router.push("/profile");
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-slate-900">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-slate-800 p-8 rounded-xl w-full max-w-md"
//       >
//         <h2 className="text-white text-3xl font-bold text-center">Login</h2>

//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           className="mt-6 w-full p-3 bg-slate-700 text-white rounded-lg"
//           onChange={handleChange}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           className="mt-4 w-full p-3 bg-slate-700 text-white rounded-lg"
//           onChange={handleChange}
//         />

//         <button
//           type="submit"
//           className="mt-6 w-full bg-blue-600 p-3 text-white rounded-lg"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // If already authenticated → go to dashboard
    const auth = sessionStorage.getItem("admin_auth");
    if (auth === "true") {
      navigate("/dashboard");
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (password === "1234") {
      sessionStorage.setItem("admin_auth", "true");
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      alert("Incorrect password (hint: 1234)");
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-slate-800">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p className="text-xs text-slate-400 mt-1">Hint: 1234</p>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors font-medium"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-slate-500 hover:text-indigo-600"
          >
            Back to Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
