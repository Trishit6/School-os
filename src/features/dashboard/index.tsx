import StatsGrid from "./stats-grid";
import Announcements from "./announcements";
import QuickActions from "./quick-actions";
import RecentActivities from "./recent-activities";
import UpcomingEvents from "./upcoming-events";

import AttendanceChart from "#/components/charts/attendance-chart";
import AttendanceBars from "#/components/charts/attendance-bars";
import DashboardHeader from "./dashboard-header";

export default function DashboardPage() {
  return (
    <div
      className="
        space-y-6
        pb-6
      "
    >
      {/* Welcome Section */}
      <DashboardHeader />

      {/* KPI Section */}
      <StatsGrid />

      {/* Analytics */}
      <section
        className="
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-6
        "
      >
        <div className="xl:col-span-8">
          <AttendanceChart />
        </div>

        <div className="xl:col-span-4">
          <AttendanceBars />
        </div>
      </section>

      {/* Actions + Announcements */}
      <section
        className="
          grid
          grid-cols-1
          xl:grid-cols-12
          gap-6
        "
      >
        <div className="xl:col-span-8">
          <Announcements />
        </div>

        <div className="xl:col-span-4">
          <QuickActions />
        </div>
      </section>

      {/* Activity + Events */}
      <section
        className="
          grid
          grid-cols-1
          xl:grid-cols-2
          gap-6
        "
      >
        <RecentActivities />

        <UpcomingEvents />
      </section>
    </div>
  );
}