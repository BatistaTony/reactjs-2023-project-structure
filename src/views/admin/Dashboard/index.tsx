import { useEffect, useState } from "react";
import PageLayout from "../../../components/layout";
import UserCard from "../../../components/molecules/user-card";
import { getUserAvatar } from "../../../services/user";

const DashboardView = () => {
  const [userAvatar, setAvatar] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGetSomeAvatar = async () => {
    setIsLoading(true);

    const response = await getUserAvatar(10);

    setAvatar(response);

    setIsLoading(false);
  };

  useEffect(() => {
    handleGetSomeAvatar();
  }, []);

  if (isLoading) return <h1>loading....</h1>;

  return (
    <PageLayout>
      <UserCard src={userAvatar} />
    </PageLayout>
  );
};

export default DashboardView;
