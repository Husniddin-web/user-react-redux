// utils/CheckPermission.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckPermission = ({ permission, children }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (!user || !user.permissions.includes(permission)) {
      Swal.fire({
        icon: "error",
        title: "Access Denied",
        text: "You do not have permission to view this page.",
      }).then(() => {
        navigate("/dashboard", { replace: true });
      });
      setHasPermission(false);
    } else {
      setHasPermission(true);
    }
  }, [permission, navigate]);

  if (hasPermission === null) return null; // Wait for check
  if (hasPermission === false) return null; // Already handled

  return children;
};

export default CheckPermission;
