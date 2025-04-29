// import React from "react";
// import { Bar, Pie, Line } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement } from "chart.js";
// import "tailwindcss/tailwind.css";

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement, PointElement, LineElement);

// const Dashboard = () => {
//   const barData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Sales ($)",
//         data: [5000, 7000, 4000, 8000, 10000, 12000],
//         backgroundColor: "#4F46E5",
//       },
//     ],
//   };

//   const pieData = {
//     labels: ["New Customers", "Returning Customers"],
//     datasets: [
//       {
//         data: [60, 40],
//         backgroundColor: ["#10B981", "#EF4444"],
//       },
//     ],
//   };

//   const lineData = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
//     datasets: [
//       {
//         label: "Active Users",
//         data: [200, 400, 600, 500, 800, 1000],
//         borderColor: "#F59E0B",
//         fill: false,
//       },
//     ],
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//       <h1 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Sales Overview</h2>
//           <Bar data={barData} />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Customer Distribution</h2>
//           <Pie data={pieData} />
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow-md">
//           <h2 className="text-lg font-semibold mb-2">Active Users Trend</h2>
//           <Line data={lineData} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
