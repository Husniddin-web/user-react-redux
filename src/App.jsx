import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Auth from "./utils/Auth";
import MainLayout from "./layout/MainLayout";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Statistics from "./pages/Statistics";
import Order from "./pages/Orders";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFounPage";
import DashBoardHome from "./pages/DashBoardHome";
import CheckPermission from "./utils/CheckPermission"; // ✅ import it

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Auth>
              <MainLayout />
            </Auth>
          }
        >
          <Route index element={<DashBoardHome />} />
          <Route
            path="admin"
            element={
              <CheckPermission permission="edit_users">
                <Admin />
              </CheckPermission>
            }
          />
          <Route
            path="orders"
            element={
              <CheckPermission permission="view_orders">
                <Order />
              </CheckPermission>
            }
          />
          <Route
            path="statistics"
            element={
              <CheckPermission permission="view_stats">
                <Statistics />
              </CheckPermission>
            }
          />
          <Route
            path="user"
            element={
              <CheckPermission permission="view_users">
                <User />
              </CheckPermission>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
