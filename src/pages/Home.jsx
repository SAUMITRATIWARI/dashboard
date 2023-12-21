import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>WeAnalyz Technologies Private Limited</h1>
      <p className="headline">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        Create the UI Design for some of the frames (as many as you can) using
        ReactJS <br></br>following are the figma frames provided by you
      </p>
      <ul>
        <li>
          <Link to="/userdashboard">UserDashboard</Link>
        </li>
        <li>
          <Link to="/operationteamdashboard">OperationTeamDashboard</Link>
        </li>
        <li>
          <Link to="/technicalsupportdashboard">TechnicalSupportDashboard</Link>
        </li>
        <li>
          <Link to="/admindashboard">AdminDashboard</Link>
        </li>
        <li>
          <Link to="/guidelinetemplate">Guidelinetemplate</Link>
        </li>
        <li>
          <Link to="/usernewticket">UserNewTicket</Link>
        </li>
        <li>
          <Link to="/operationteamticketapproval">
            OperationTeamTicketApproval
          </Link>
        </li>
        <li>
          <Link to="/technicalsupportmyticket">TechnicalSupportMyticket</Link>
        </li>
        <li>
          <Link to="/admindatabase">AdminDatabase</Link>
        </li>
        <li>
          <Link to="/usermyticket">UserMyTicket</Link>
        </li>
        <li>
          <Link to="/operationteammyticket">OperationTeamMyticket</Link>
        </li>
        <li>
          <Link to="/technicalsupportmyticketticketdetails">
            TechnicalSupportMyticketticketdetails
          </Link>
        </li>
        <li>
          <Link to="/adminsetting">AdminSetting</Link>
        </li>
        <li>
          <Link to="/adminuserloghistory">AdminUserLogHistory</Link>
        </li>
        <li>
          <Link to="/technicalsupportmyticketcloseticket">
            TechnicalSupportMyticketCloseTicket
          </Link>
        </li>
        <li>
          <Link to="/usermyticketviewticket">UserMyTicketViewTicket</Link>
        </li>
        <li>
          <Link to="/operationteammyticketticketdetails">
            OperationTeamMyticketTicketdetails
          </Link>
        </li>
        <li>
          <Link to="/userprofilefeedback">UserProfileFeedback</Link>
        </li>
        <li>
          <Link to="/operationteammyticketcloseticket">
            OperationTeamMyticketCloseticket
          </Link>
        </li>
        <li>
          <Link to="/technicalsupportmyticketcloseticketone">
            TechnicalSupportMyticketCloseTicketOne
          </Link>
        </li>
        <li>
          <Link to="/adminprofilefeedback">AdminProfileFeedback</Link>
        </li>
        <li>
          <Link to="/userprofilesetting">UserProfileSetting</Link>
        </li>
        <li>
          <Link to="/technicalsupportperformance">
            TechnicalSupportPerformance
          </Link>
        </li>
        <li>
          <Link to="/adminprofilesetting">AdminProfileSetting</Link>
        </li>
        <li>
          <Link to="/operationteamperformance">OperationTeamPerformance</Link>
        </li>
        <li>
          <Link to="/technicalsupportprofilefeedback">
            TechnicalSupportProfileFeedback
          </Link>
        </li>
        <li>
          <Link to="/operationteamprofilefeedback">
            OperationTeamProfileFeedback
          </Link>
        </li>
        <li>
          <Link to="/technicalsupportprofilesetting">
            TechnicalSupportProfileSetting
          </Link>
        </li>
        <li>
          <Link to="/operationteamprofilesetting">
            OperationTeamProfileSetting
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
