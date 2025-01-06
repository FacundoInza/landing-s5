import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { terminosStyles } from "./terminos-styles";
import { terminosContent } from "./terminos-content";

export default function TerminosCondiciones() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <style dangerouslySetInnerHTML={{ __html: terminosStyles }} />
        <div dangerouslySetInnerHTML={{ __html: terminosContent }} />
      </main>
      <Footer />
    </div>
  );
}

