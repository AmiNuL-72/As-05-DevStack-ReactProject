import BannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full py-16 bg-white/95">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-12">
        
        {/* Left Side: Text & Buttons */}
        <div className="max-w-xl space-y-6">
          <h1 className="text-[54px] font-extrabold text-gray-900">
            Build Your Ideal{" "}
            <span className="block mt-1 text-brand-gradient">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-600 text-lg">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex items-center gap-4 pt-2">
            <a
              href="#technologies"
              className="px-6 py-3 rounded-lg text-base font-semibold text-white bg-brand-gradient hover:opacity-90 transition-all shadow-md"
            >
              Explore Technologies
            </a>
            <a
              href="#learn-more"
              className="px-6 py-3 rounded-lg text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-end">
          <img
            src={BannerStack}
            alt="Development Stack 3D Visual"
            className="w-[420px] h-auto object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;