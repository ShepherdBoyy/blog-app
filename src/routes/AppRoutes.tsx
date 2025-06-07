import { Routes, Route } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import BlogListPage from "../pages/BlogListPage";
import CreateBlogPage from "../pages/CreateBlogPage";
import EditBlogPage from "../pages/EditBlogPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/blog-app" element={<BlogListPage />} />
      <Route path="/blog-app/login" element={<LoginPage />} />
      <Route path="/blog-app/register" element={<RegisterPage />} />
      <Route path="/blog-app/create" element={<CreateBlogPage />} />
      <Route path="/blog-app/edit/:id" element={<EditBlogPage />} />
    </Routes>
  );
}
