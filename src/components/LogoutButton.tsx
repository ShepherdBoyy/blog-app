import { supabase } from "../supabase/client";
import { useDispatch } from "react-redux";
import { clearUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    dispatch(clearUser());
    navigate("/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}
