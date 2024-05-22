import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { Grid } from "@/components/Grid";
import Image from "next/image";
import { Projects } from "@/components/Projects";
import { TracingBeam } from "@/components/ui/TracingBeam";
import { navItems } from "@/data";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          className="py-4 bg-black-200 px-8 font-semibold"
          navItems={navItems}
        />
        <Hero />
        <Grid />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
