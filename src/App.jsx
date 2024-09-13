import { Route, Routes } from "react-router";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import ProtectedRoute from "./component/ProtectedRoute";
import { Password } from "./pages/Password";
import { NvoUser } from "./pages/NvoUser";
import { AllUsers } from "./pages/AllUsers";
import { UpdateUSer } from "./pages/UpdateUSer";
import { CreateIncidencia } from "./pages/CreateIncidencia";
import { AllIncidence } from "./pages/AllIncidence";

export default function App() {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register"  element={<NvoUser />} />
        <Route path="/users"   element={<AllUsers />} />
        <Route path="/update" element={<UpdateUSer/>}/>
        <Route path='/incidencia' element={<CreateIncidencia />}/>
        <Route path='/allincidencias' element={<AllIncidence />}/>
      </Route>
      <Route path="/" element={<LoginPage />} />
      <Route path="/recuperar" element={<Password />}/>

    </Routes>
  );
}
