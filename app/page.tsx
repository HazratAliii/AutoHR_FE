"use client";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  console.log("This is home pagdsde");
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 h-[calc(100vh-50px)] overflow-auto">
        {/* {renderComponent} */}
        This is home page
      </div>
    </div>
  );
}
