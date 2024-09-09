import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import ProtectedRoute from "./component/ProtectedRoute";
import { Password } from "./pages/Password";
import { NvoUser } from "./pages/NvoUser";
import { Header } from "./component/Header";

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register"  element={<NvoUser />} />
      </Route>
      <Route path="/" element={<LoginPage />} />
      <Route path="/recuperar" element={<Password />}/>

    </Routes>
  );
}
