import * as React from "react";

import { cn } from "@/lib/utils";

const SiteFooter = ({ className }: React.HTMLAttributes<HTMLElement>) => {
  return (
    <footer className={cn("border-t", className)}>
      <div className="border-t py-4 text-center">
        <span className="text-muted-foreground text-sm">
          Copyright &copy; 2024. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default SiteFooter;
