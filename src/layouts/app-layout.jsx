import Header from "@/components/header";
import {Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      {/* <main className="min-h-screen container"> */}
      <main className="min-h-screen max-w-screen-2xl mx-auto px-6 scale-[1.02] origin-center">

      {/* <main className="min-h-screen w-full max-w-screen-2xl mx-auto px-6"> */}

      {/* <main className="min-h-screen max-w-screen-2xl mx-auto px-6 scale-[1.15] origin-center"> */}

        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        
        Made with @OM KUMAR
      </div>
    </div>
  );
};

export default AppLayout;
