import AnimatedSlideButton from "@/lib/components/common/AnimatedSlideButton";
import { Icon } from "@iconify/react/dist/offline";
import arrowRight from "@iconify/icons-lucide/arrow-right";
import Footer from "@/lib/components/common/Footer";

export default function NotFound() {
  return (
    <main>
      <div className="text-center min-h-screen flex flex-col items-center justify-center px-6 space-y-6">
        <div>
          <div className="relative">
            <h1 className="text-9xl md:text-[200px] leading-none">
              <span className="text-[#080808]">4</span>
              <span className="text-[#25276C]">0</span>
              <span className="text-[#080808]">4</span>
            </h1>
            <p className="absolute top-3 md:top-4 right-5 md:right-12 left-1/2 text-[#25276C] text-lg md:text-xl">
              ops!
            </p>
          </div>

          <p className="text-lg md:text-xl font-normal text-[#2A2A2A]">
            Page not found
          </p>
        </div>

        <div className="mt-4 flex flex-col md:flex-row items-center bg-[#F4F4F4] p-8 w-full md:w-3xl justify-between gap-8 rounded-lg">
          <p className="text-lg text-[#2A2A2A] max-w-sm text-start">
            The page you are looking for doesn’t exist or another error
            occurred.
          </p>

          <AnimatedSlideButton
            icon={<Icon icon={arrowRight} width={24} height={24} />}
            text="Back to Homepage"
            className="inline-flex text-[#1C1E55] hover:bg-[#1C1E55] border border-[#1C1E55] hover:text-white rounded-lg bg-[#F4F4F4] text-xl tracking-[-0.05em] p-5 max-w-max "
            variant="link"
            href="/"
          />
        </div>
      </div>
      <div className="bg-[linear-gradient(to_bottom,black_10%,#25276C_100%)] w-full mt-5">
        <Footer />
      </div>
    </main>
  );
}
