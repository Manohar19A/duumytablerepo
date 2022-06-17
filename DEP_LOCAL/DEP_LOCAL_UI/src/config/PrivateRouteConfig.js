import {
  FcBusinessman,
  FcSurvey,
  FcDataSheet,
  FcDepartment,
  FcTimeline,
  FcOvertime,
  FcManager,
  FcReading,
  FcSportsMode,
  FcCollaboration,
  FcConferenceCall,
  FcCalendar,
  FcLeave,
  FcMultipleInputs,
  FcNeutralTrading,
  FcAdvance,
} from "react-icons/fc";

//Data Imports
import Roles from "./Roles";

//Custom Component Imports

// Super Admin imports starts
import AdminDashboard from "../pages/SuperAdmin/pages/Dashboard/AdminDashboard";
import ContentCreator from "../pages/SuperAdmin/pages/ContentCreatorManagement/CreationContentCreator/ContentCreator"
import CreatorTable from "../pages/SuperAdmin/pages/ContentCreatorManagement/ContentCreatorData/CreatorTable";
import CourseManagement from "../pages/SuperAdmin/pages/CourseManagement/CourseManagement"
import ClientAdmintable from "../pages/SuperAdmin/pages/Client Management/Client/Clienttable";
import ClientAdmin from "../pages/SuperAdmin/pages/Client Management/Client/ClientAdmin";
import LearningPlan from "../pages/SuperAdmin/pages/Learning/LearningPlan"
import Reports from "../pages/SuperAdmin/pages/Reports/Reports"
import UsersManagement from "../pages/SuperAdmin/pages/UsersManagement/UsersManagement"
import ContentCreatorData from "../pages/SuperAdmin/pages/ContentCreatorManagement/ContentCreatorData/CreatorTable";
import CreatorDashboard from "../pages/Creator/Pages/CreatorDashboard";
import CreatorStudio from "../pages/Creator/Pages/CreatorStudio";
import Feedback from "../pages/Creator/Pages/Feedback";
//Learnerdashboard 
import LearnerDashBoard  from "../pages/Learner/pages/Dashboard/LearnerDashboard";
import LearnerCourses from "../pages/Learner/pages/Courses/LearnerCourses";




// client imports start..
import ClientDashBoard from "../pages/client/components/DashBoard/ClientDashBoard";
import ClientLearner from "../pages/client/pages/LearnerManagement/ClientLearner";
import ClientCourse from "../pages/client/pages/CourseManagement/ClientCourse";
import ClientPayment from "../pages/client/pages/PaymentInfo/ClientPayment";
import ClientProfile from "../pages/client/pages/ClientProfile/ClientProfile";
import ClientReports from "../pages/client/pages/ClientReports/ClientReports";
import BranchCreationMain from "../pages/client/pages/BranchManagement/BranchCreation/BranchCreationMain";
import BranchManagerMain from "../pages/client/pages/BranchManagement/BranchManagerCreation/BranchManagerMain"
// client imports ends..



import ManagerDashboard from "../pages/BranchManager/Pages/ManagerDashboard";
import Courses from "../pages/BranchManager/Pages/CreateLearner";
import { SiBookstack } from "react-icons/si";
import CreateLearner from "../pages/BranchManager/Pages/CreateLearner";



  export default [
   
    {
      component: AdminDashboard,
      path: "/",
      icon: <FcManager />,
      title: "Dashboard",
      permission: [Roles.admin],
      exact:true,
    },

    // {
    //   component: ContentCreator,
    //   path: "/adminCreatorManagement",
    //   permission: [Roles.admin],
    // },

     {
       component: ContentCreatorData,
       path: "/adminCreatorData",
        icon: <FcManager />,
      title: "Creator  Management",
      permission: [Roles.admin],
     },

    {
      component: CourseManagement,
      path: "/adminCourseManagement",
      icon: <FcManager />,
      title: "Course Management",
      permission: [Roles.admin],
    },


    {
      component: LearningPlan,
      path: "/adminLearning",
      icon: <FcManager />,
      title: "Learning Plans",
      permission: [Roles.admin],
    },

    {
      component: Reports,
      path: "/adminReports",
      icon: <FcManager />,
      title: "Reports",
      permission: [Roles.admin],
    },


    // {
    //   component: ClientAdmin,
    //   path: "/adminClientManagement",
    //   permission: [Roles.admin],
    // },

    {
      component: ClientAdmintable,
      path: "/adminClientData",
      icon: <FcManager />,
      title: "Client Management",
      permission: [Roles.admin],
    },


    {
      component: UsersManagement,
      path : "/adminUsersManagement",
      icon : <FcManager />,
      title: "Users Management",
      permission : [Roles.admin]
    },

// admin routes ends
    {
      component: CreatorDashboard,
      path: "/creatorDashboard",
      icon: <FcCalendar />,
      title: "Dashboard",
      permission: [Roles.creator],
    },

    {
      component: CreatorStudio,
      path : "/creatorstudio",
      icon : <FcManager />,
      title: "Creator Studio",
      permission : [Roles.creator]
    },


    {
      component: Feedback,
      path: "/creatorFeedback",
      icon: <FcCalendar />,
      title: "Feedback",
      permission: [Roles.creator],
    },
   // creator routes ends 
    
    {
      component: ClientDashBoard,
      path: "/clientDashboard",
      icon: <FcNeutralTrading />,
      title: "Dashboard",
      permission: [Roles.client],
    },    
{
  component: ClientLearner,
  path: "/clientLearnerManagement",
  icon: <FcReading />,
  title: "Learner Management",
  permission: [Roles.client],  
  },
  {
  component: ClientCourse,
  path: "/clientCourseManagement",
  icon: <FcReading />,
  title: "Course Management",
  permission: [Roles.client],
  },
  {
  component: ClientPayment,
  path: "/clientPaymentInfo",
  icon: <FcReading />,
  title: "Payment Info",
  permission: [Roles.client], 
  },
  {
  component: ClientProfile,
  path: "/clientProfile",
  icon: <FcReading />,
  title: "Client Profile",
  permission: [Roles.client],
  },
  {
  component: ClientReports,
  path: "/clientReports",
  icon: <FcReading />,
  title: "Client Reports",
  permission: [Roles.client], 
  },
  {
    component: BranchCreationMain,
    path: "/branchcreation",
    icon: <FcReading />,
    title: "Branches",
    permission: [Roles.client], 
    },

  {
    component: BranchManagerMain,
    path: "/clientBranchManagement",
    icon: <FcReading />,
    title: "Branch Management",
    permission: [Roles.client], 
    },

//client routes ends
    {
      component: ManagerDashboard,
      path: "/managerDashboard",
      icon: <FcDepartment />,
      title: "Dashboard",
      permission: [Roles.manager],
      
    },
    {
      component: CreateLearner,
      path: "/managerCreateLearner",
      icon: <FcDepartment />,
      title: "Create Learner",
      permission: [Roles.manager],
    },
//branch manager routes ends
    {
      component: LearnerDashBoard,
      path : "/learnerDashboard",
      icon : <FcManager/>,
      title: "Dashboard",
      permission: [Roles.learner],
    },

    {
      component: LearnerCourses,
      path : "/learnerCourses",
      icon : <FcManager/>,
      title: "Courses",
      permission: [Roles.learner]
    }
  ];