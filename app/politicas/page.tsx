import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

import { politicasContent } from "./politicas-content";
import { politicasStyles } from "./politicas-styles";

export default async function PoliticasPrivacidad() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <style dangerouslySetInnerHTML={{ __html: politicasStyles }} />
        <div dangerouslySetInnerHTML={{ __html: politicasContent }} />
      </main>
      <Footer />
    </div>
  );
}

