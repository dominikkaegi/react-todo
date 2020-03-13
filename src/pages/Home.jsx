import React from "react";

import Tabs from "../components/Tabs";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

export default function Page() {
  const tabData = [
    {
      label: "Login",
      content: <LoginForm />
    },
    {
      label: "Signup",
      content: <SignupForm />
    }
  ];

  return (
    <div>
      <Tabs data={tabData} />
    </div>
  );
}
