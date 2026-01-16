import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
      {/* <main className="min-h-screen max-w-screen-2xl mx-auto px-6 scale-[1.02] origin-center"> */}

      {/* <main className="min-h-screen w-full max-w-screen-2xl mx-auto px-6"> */}

      {/* <main className="min-h-screen max-w-screen-2xl mx-auto px-6 scale-[1.15] origin-center"> */}

        <Header />
        <Outlet />
      </main>
      <div className="mt-10 py-4 text-center text-sm text-gray-400 bg-gray-900 font-inter">
        
        © 2026 MyURL — Om Kumar
      </div>
    </div>
  );
};

export default AppLayout;
