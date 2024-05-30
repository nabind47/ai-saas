import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="space-y-6 py-12 sm:py-20 lg:py-20">
      <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px] inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          AI-Powered Solutions for <br />
          fastest Copywriting
        </h1>

        {/* BUTTONS */}
        <div className="flex items-center gap-4 my-4">
          <Button className="rounded-md">Get Started</Button>
          <Button className="rounded-md" variant="outline">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
