import EarningSummaryChart from "@/components/EarningSummaryChart";
import MetricCard from "@/components/MetricCard";
import PendingActionsTable from "@/components/PendingActionsTabile";
import NewReservationTable from "@/components/PendingActionsTabile";

const Admin = () => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <div className="bg-[#010642] w-full min-h-screen">
        <div className=" p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  <MetricCard title="Total User" value={287905} percentageChange={5} />
  <MetricCard title="Daily Visitors" value={1200} percentageChange={3.2} />
  <MetricCard title="Monthly Visitors" value={25600} percentageChange={8.7} />
  <MetricCard title="New Videos" value={345} percentageChange={8} />
</div>  
        </div>

        <div className=" p-4">
          {/* Earning Summary Chart */}
          <div className=" w-full">
            {/* Ensure minimum height for chart visibility */}
            <EarningSummaryChart />
          </div>
        </div>

        <div className="p-4">
          <PendingActionsTable />
        </div>
      </div>
    </>
  );
};
export default Admin;
