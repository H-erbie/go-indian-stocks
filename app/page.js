
import MainSection from "@/components/main-section";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex backdrop:h-screen ">
      <Sidebar />
      <MainSection/>
    </main>
  );
}
