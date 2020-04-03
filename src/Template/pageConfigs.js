import HomePage from "./Pages/Home";
import LoginPage from "./Pages/Login";
import SignupPage from "./Pages/Signup";
import ProfilePage from "./Pages/Profile";

const pageConfigs = [
  {
    path: "/",
    component: HomePage,
    exact: true,
    private: false
  },
  {
    path: "/login",
    component: LoginPage,
    exact: true,
    private: false
  },
  {
    path: "/signup",
    component: SignupPage,
    exact: true,
    private: false
  },
  {
    path: "/profile",
    component: ProfilePage,
    exact: true,
    private: true
  }
];

export default pageConfigs;
