import { type NextPage } from "next";

import { Button, ButtonVariant } from "../components/Button";
import { Login } from "./Login";

const Home: NextPage = () => {

  return (
    <>
      <Login />
      <Button variant={ButtonVariant.SECONDARY}>Teste</Button>
    </>
  );
};

Home.displayName = "HomePage";
export default Home;
