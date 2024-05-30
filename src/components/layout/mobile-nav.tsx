import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <nav className="md:hidden gap-6 flex">
      <Menu className="w-5 h-5" />
    </nav>
  );
};

export default MobileNav;
