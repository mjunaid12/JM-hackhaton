import CARD from "@/components/CARD";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Category() {
    return (
        <div className="flex flex-col ">
            {/* Navbar */}
            <Navbar />
        
            <div className="flex w-full h-full pl-[250px] ">
                {/* Sidebar */}
                <div className="w-[250px] bg-gray-200 h-[100vh] fixed top-0 left-0 ">
                    <Sidebar />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-10 p-4">
                    <CARD />
                    
            {/* Footer */}
            <Footer />
                </div>
            </div>

        </div>
    );
}
