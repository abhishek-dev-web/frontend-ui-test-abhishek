"use client";
import DashboardCards from "../components/dashboard/DashboardCards";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import SalesOverview from "../components/dashboard/SalesOverview";
import ActiveUsers from "../components/dashboard/ActiveUsers";
import ProjectsTable from "@/components/dashboard/ProjectsTable";
import OrdersOverview from "@/components/dashboard/OrdersOverview";
import TeamCard from "@/components/dashboard/team";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardCards />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 items-stretch">
        <div className="md:col-span-2 xl:col-span-3 h-50">
          <WelcomeCard />
        </div>

        <div className="md:col-span-2 xl:col-span-2 h-50">
          <TeamCard />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
        <div className="xl:col-span-2">
          <ActiveUsers />
        </div>
        <div className="xl:col-span-3">
          <SalesOverview />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <ProjectsTable />
        <OrdersOverview />
      </div>
    </div>
  );
}
