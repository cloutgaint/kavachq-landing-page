import HeroSection from "../components/HeroSection";
import MetricsGrid from "../components/MetricsGrid";
import ScannerHealth from "../components/ScannerHealth";
import RiskOverview from "../components/RiskOverview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <HeroSection />

        <MetricsGrid />

        <section className="grid gap-6 lg:grid-cols-3">
          <ScannerHealth />
          <RiskOverview />
        </section>

        <Footer />
      </div>
    </main>
  );
}