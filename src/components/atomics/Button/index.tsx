import { ClassAttributes, HTMLAttributes } from "react";
import { ButtonContainer } from "./style";

type HTMLProps<T> = ClassAttributes<T> & HTMLAttributes<T>;

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <ButtonContainer {...props}> {children}</ButtonContainer>;
};

export default Button;
