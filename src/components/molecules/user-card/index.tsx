import { useToggle } from "../../../hooks/useToggle";
import Avatar from "../../atomics/avatar";
import Button from "../../atomics/Button";
import { UserCardContainer } from "./style";

interface UserCardProps {
  src: string;
}

const UserCard = ({ src }: UserCardProps) => {
  const { active, toggle } = useToggle(false);

  return (
    <UserCardContainer>
      <Avatar src={src} size="large" />
      <Button onClick={toggle}>{active ? "Voted" : "Vote"}</Button>
    </UserCardContainer>
  );
};

export default UserCard;
