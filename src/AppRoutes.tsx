import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/DashboardPage/DashboardPage";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/dashboard" />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default AppRoutes;
