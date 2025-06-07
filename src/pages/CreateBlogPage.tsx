import { useState, type FormEvent } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

function CreateBlogPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error } = await supabase.from("blogs").insert([
      {
        title,
        content,
        user_id: user?.id, // important!
      },
    ]);

    if (!error) navigate("/blog-app");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Create Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full p-3 border rounded-md"
        />
        <textarea
          placeholder="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full p-3 border rounded-md h-48"
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition inline-flex items-center gap-2"
        >
          ✅ <span>Publish</span>
        </button>
      </form>
    </div>
  );
}

export default CreateBlogPage;
