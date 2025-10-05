import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import Footer from "@/lib/components/common/Footer";

export default function NotFound() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-7xl font-bold text-[#1C1E55] mb-4">404</h1>
        <p className="text-lg mb-4">Page Not Found</p>
        <AnimatedSlideButton
          icon={<Icon icon={arrowRight} width={24} height={24} />}
          text="Go to Home"
          className=" items-center gap-2 text-white bg-[#1C1E55] hover:bg-[#151347] transition-colors p-3 rounded-lg text-xl tracking-[-0.05em] max-w-max md:inline-flex"
          variant="link"
          href="/"
        />
      </div>
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-5">
        <Footer />
      </div>
    </main>
  );
}
