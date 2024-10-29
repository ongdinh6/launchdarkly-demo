import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage } from "@/pages/LoginPage";
import { UserDataPage } from "@/pages/UserDataPage";
import { LandingPage } from "@/pages/LandingPage";

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route index path={"/"} element={<LandingPage />} />
      <Route path={"login"} element={<LoginPage />} />
      <Route path={"users"} element={<UserDataPage />} />
    </Routes>
  </BrowserRouter>;
};

export default App;
