


import { Footer } from "@/components/Footer-main";
import { politicasContent } from "./politicas-content";
import { politicasStyles } from "./politicas-styles";
  import { Navbar } from "@/components/navbar";

export default async function PoliticasPrivacidad() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar calendlyUrl={process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/silver-5-ai/silver-5-p2p'} />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <style dangerouslySetInnerHTML={{ __html: politicasStyles }} />
        <div dangerouslySetInnerHTML={{ __html: politicasContent }} />
      </main>
      <Footer />
    </div>
  );
}

