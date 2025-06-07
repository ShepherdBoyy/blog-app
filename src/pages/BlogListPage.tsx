import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { Link } from "react-router-dom";

function BlogListPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const LIMIT = 5;

  const fetchBlogs = async () => {
    setLoading(true);
    const from = (page - 1) * LIMIT;
    const to = from + LIMIT - 1;

    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .range(from, to)
      .order("created_at", { ascending: false });

    if (!error) setBlogs(data || []);
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]);

  const handleDelete = async (id: number) => {
    const { error } = await supabase.from("blogs").delete().eq("id", id);

    if (!error) {
      window.location.reload(); // This reloads the entire page
    } else {
      console.error("Failed to delete blog:", error.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Posts</h1>
        <Link
          to="/blog-app/create"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition inline-flex items-center gap-2"
        >
          📝 <span>New Blog</span>
        </Link>
      </div>

      {loading && <p>Loading...</p>}

      <ul className="space-y-6">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="border p-6 rounded-xl shadow-md bg-white"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {blog.title}
            </h2>
            <p className="text-gray-600 mt-2">{blog.content}</p>
            <div className="mt-4 flex gap-4">
              <Link
                to={`/blog-app/edit/${blog.id}`}
                className="inline-block bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
              >
                ✏️ Edit
              </Link>
              <button
                onClick={() => handleDelete(blog.id)}
                className="inline-block bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              >
                🗑️ Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-between mt-8">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="bg-gray-300 px-4 py-2 rounded disabled:opacity-50"
        >
          ◀ Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Next ▶
        </button>
      </div>
    </div>
  );
}

export default BlogListPage;
