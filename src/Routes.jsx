import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const OperationTeamProfileSetting = React.lazy(
  () => import("pages/OperationTeamProfileSetting"),
);
const TechnicalSupportProfileSetting = React.lazy(
  () => import("pages/TechnicalSupportProfileSetting"),
);
const OperationTeamProfileFeedback = React.lazy(
  () => import("pages/OperationTeamProfileFeedback"),
);
const TechnicalSupportProfileFeedback = React.lazy(
  () => import("pages/TechnicalSupportProfileFeedback"),
);
const OperationTeamPerformance = React.lazy(
  () => import("pages/OperationTeamPerformance"),
);
const AdminProfileSetting = React.lazy(
  () => import("pages/AdminProfileSetting"),
);
const TechnicalSupportPerformance = React.lazy(
  () => import("pages/TechnicalSupportPerformance"),
);
const UserProfileSetting = React.lazy(() => import("pages/UserProfileSetting"));
const AdminProfileFeedback = React.lazy(
  () => import("pages/AdminProfileFeedback"),
);
const TechnicalSupportMyticketCloseTicketOne = React.lazy(
  () => import("pages/TechnicalSupportMyticketCloseTicketOne"),
);
const OperationTeamMyticketCloseticket = React.lazy(
  () => import("pages/OperationTeamMyticketCloseticket"),
);
const UserProfileFeedback = React.lazy(
  () => import("pages/UserProfileFeedback"),
);
const OperationTeamMyticketTicketdetails = React.lazy(
  () => import("pages/OperationTeamMyticketTicketdetails"),
);
const UserMyTicketViewTicket = React.lazy(
  () => import("pages/UserMyTicketViewTicket"),
);
const TechnicalSupportMyticketCloseTicket = React.lazy(
  () => import("pages/TechnicalSupportMyticketCloseTicket"),
);
const AdminUserLogHistory = React.lazy(
  () => import("pages/AdminUserLogHistory"),
);
const AdminSetting = React.lazy(() => import("pages/AdminSetting"));
const TechnicalSupportMyticketticketdetails = React.lazy(
  () => import("pages/TechnicalSupportMyticketticketdetails"),
);
const OperationTeamMyticket = React.lazy(
  () => import("pages/OperationTeamMyticket"),
);
const UserMyTicket = React.lazy(() => import("pages/UserMyTicket"));
const AdminDatabase = React.lazy(() => import("pages/AdminDatabase"));
const TechnicalSupportMyticket = React.lazy(
  () => import("pages/TechnicalSupportMyticket"),
);
const OperationTeamTicketApproval = React.lazy(
  () => import("pages/OperationTeamTicketApproval"),
);
const UserNewTicket = React.lazy(() => import("pages/UserNewTicket"));
const Guidelinetemplate = React.lazy(() => import("pages/Guidelinetemplate"));
const AdminDashboard = React.lazy(() => import("pages/AdminDashboard"));
const TechnicalSupportDashboard = React.lazy(
  () => import("pages/TechnicalSupportDashboard"),
);
const OperationTeamDashboard = React.lazy(
  () => import("pages/OperationTeamDashboard"),
);
const UserDashboard = React.lazy(() => import("pages/UserDashboard"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route
            path="/operationteamdashboard"
            element={<OperationTeamDashboard />}
          />
          <Route
            path="/technicalsupportdashboard"
            element={<TechnicalSupportDashboard />}
          />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/guidelinetemplate" element={<Guidelinetemplate />} />
          <Route path="/usernewticket" element={<UserNewTicket />} />
          <Route
            path="/operationteamticketapproval"
            element={<OperationTeamTicketApproval />}
          />
          <Route
            path="/technicalsupportmyticket"
            element={<TechnicalSupportMyticket />}
          />
          <Route path="/admindatabase" element={<AdminDatabase />} />
          <Route path="/usermyticket" element={<UserMyTicket />} />
          <Route
            path="/operationteammyticket"
            element={<OperationTeamMyticket />}
          />
          <Route
            path="/technicalsupportmyticketticketdetails"
            element={<TechnicalSupportMyticketticketdetails />}
          />
          <Route path="/adminsetting" element={<AdminSetting />} />
          <Route
            path="/adminuserloghistory"
            element={<AdminUserLogHistory />}
          />
          <Route
            path="/technicalsupportmyticketcloseticket"
            element={<TechnicalSupportMyticketCloseTicket />}
          />
          <Route
            path="/usermyticketviewticket"
            element={<UserMyTicketViewTicket />}
          />
          <Route
            path="/operationteammyticketticketdetails"
            element={<OperationTeamMyticketTicketdetails />}
          />
          <Route
            path="/userprofilefeedback"
            element={<UserProfileFeedback />}
          />
          <Route
            path="/operationteammyticketcloseticket"
            element={<OperationTeamMyticketCloseticket />}
          />
          <Route
            path="/technicalsupportmyticketcloseticketone"
            element={<TechnicalSupportMyticketCloseTicketOne />}
          />
          <Route
            path="/adminprofilefeedback"
            element={<AdminProfileFeedback />}
          />
          <Route path="/userprofilesetting" element={<UserProfileSetting />} />
          <Route
            path="/technicalsupportperformance"
            element={<TechnicalSupportPerformance />}
          />
          <Route
            path="/adminprofilesetting"
            element={<AdminProfileSetting />}
          />
          <Route
            path="/operationteamperformance"
            element={<OperationTeamPerformance />}
          />
          <Route
            path="/technicalsupportprofilefeedback"
            element={<TechnicalSupportProfileFeedback />}
          />
          <Route
            path="/operationteamprofilefeedback"
            element={<OperationTeamProfileFeedback />}
          />
          <Route
            path="/technicalsupportprofilesetting"
            element={<TechnicalSupportProfileSetting />}
          />
          <Route
            path="/operationteamprofilesetting"
            element={<OperationTeamProfileSetting />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
