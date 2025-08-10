
import AdminLoanApproval from "./pages/Employee/AdminLoanApproval";
import EmpAnnouncements from "./pages/Employee/EmpAnnouncements";
import EmpMeetings from "./pages/Employee/EmpMeeting";
import EmpNoticePeriod from "./pages/Employee/EmpNoticePeriod";
import EmpPosition from "./pages/Employee/EmpPosition";
import EmpTasks from "./pages/Employee/EmpTasks";
import LoanApplication from "./pages/Employee/LoanApplication";
import NoticeApproval from "./pages/Employee/NoticeApproval";
import HomePage from "./pages/HomePage";



import SignIn from "./pages/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/position" element={<EmpPosition/>} />
          <Route path="/tasks" element={<EmpTasks/>} />
          <Route path="/announcements" element={<EmpAnnouncements/>} />
          <Route path="/meeting" element={<EmpMeetings/>} />
          <Route path="/loan-application" element={<LoanApplication/>} />
          <Route path="/admin/loan-approvals" element={<AdminLoanApproval/>} />
          <Route path="/notice-period" element={<EmpNoticePeriod/>} />
          <Route path="/admin/notice-approvals" element={<NoticeApproval />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
