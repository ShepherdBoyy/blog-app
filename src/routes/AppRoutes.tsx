import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import BlogListPage from "../pages/BlogListPage";
import CreateBlogPage from "../pages/CreateBlogPage";
import EditBlogPage from "../pages/EditBlogPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<BlogListPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreateBlogPage />} />
      <Route path="/edit/:id" element={<EditBlogPage />} />
    </Routes>
  );
}
