import { Route, Routes } from "react-router-dom";
import "./App.css";
import AttendanceInformation from "./Components/Pages/AttendanceInformation";
import LoginForm from "./Components/Pages/LoginForm";
import SignUpForm from "./Components/Pages/SignUpForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup-from" element={<SignUpForm />} />
        <Route
          path="/attendance-information"
          element={<AttendanceInformation />}
        />
      </Routes>
    </div>
  );
}

export default App;
