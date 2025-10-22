import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Dashboardpage from "./dashboard-page/page";

export default function Home() {
  return (
    <div className="py-4 px-4 mt-32">
      <Dashboardpage />
    </div>
  );
}
