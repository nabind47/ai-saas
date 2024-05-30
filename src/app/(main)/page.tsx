import SectionHeader from "@/components/global/section-header";
import HeroSection from "@/components/hero-section";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <HeroSection />

      <section>
        <div className="w-full dark:bg-grid-zinc-900 bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <Image
            src="/hero.jpg"
            alt=""
            width={1080}
            height={1080}
            className="px-4 py-20 rounded-md"
          />
        </div>
      </section>

      <section className="w-11/12 mx-auto my-10">
        <SectionHeader label="Efficient Techniques for Crafting Compelling Website Copy" />

        {/* CARDS */}
        <div className="grid sm:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i}>
              <CardHeader></CardHeader>
              <CardDescription></CardDescription>
              <CardFooter></CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
