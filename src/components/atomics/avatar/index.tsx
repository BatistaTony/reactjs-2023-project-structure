import { AvatarContainer } from "./style";

interface AvatarProps {
  src: string;
  size: "large" | "small" | "midium";
}

const Avatar = ({ src, size }: AvatarProps) => {
  return <AvatarContainer src={src} />;
};

export default Avatar;
