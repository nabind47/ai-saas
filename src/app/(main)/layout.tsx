import Navbar from "@/components/layout/navbar";
import SiteFooter from "@/components/layout/site-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MarketingLayoutProps) => {
  return (
    <div>
      <Navbar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
};

export default MainLayout;
