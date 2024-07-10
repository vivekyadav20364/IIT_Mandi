import { LuMessageCircle } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function Button({
  title = "Stock Analysis",
  Icon = LuMessageCircle,
  className = "",
  onClick = () => {}
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    const token=localStorage.getItem("userToken");
    console.log("Token in button",token)
    onClick();
    if(token){
    navigate("/stockAnalysis");
    }
    else{
    navigate("/login")
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`bg-gradient-lr flex items-center gap-2 rounded-full px-7 py-4 text-lg font-semibold text-white transition hover:-rotate-3 ${className}`}
    >
      <Icon className="size-6" />
      {title}
    </button>
  );
}
