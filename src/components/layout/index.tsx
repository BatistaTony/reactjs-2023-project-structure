import { PageLayoutContainer } from "./style";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <PageLayoutContainer>{children}</PageLayoutContainer>;
};

export default PageLayout;
