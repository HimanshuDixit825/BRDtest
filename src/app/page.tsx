import { Sidebar } from "@/components/sidebar";
import { MainContent } from "@/components/main-content";
import { RightPanel } from "@/components/right-panel";
import SignInPage from "./signin/signin";

export default function Home() {
  return (
    // <>
    //   <SignInPage></SignInPage>
    // </>
    <div className="flex min-h-screen bg-black">
      <Sidebar />
      <div className="flex flex-1 bg-white rounded-3xl my-2 mr-4">
        <MainContent />
        <RightPanel />
      </div>
    </div>
  );
}
