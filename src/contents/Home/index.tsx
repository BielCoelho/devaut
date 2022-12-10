import { Button } from "../../components/Button";
import { useLoginMutation } from "../../hooks/ReactQuery/useUsers";
import { withAuth } from "../../utils/withAuth";
// import { Login } from "../Login";
import Sidebar from "../Dashboard/Sidebar";

const HomeContentBase = () => {
  const { mutateAsync } = useLoginMutation();

  const handleLogin = () => {
    mutateAsync({
      email: "teste@teste.com",
      password: "123456",
    });
  };

  return (
    <>
      <Sidebar />
      <Button onClick={handleLogin}>Login</Button>
    </>
  );
};

export const HomeContent = withAuth(HomeContentBase);
