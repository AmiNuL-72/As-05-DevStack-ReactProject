import BannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="w-full pt-8 pb-16 md:pt-14 md:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Headings & Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Two-tone Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-gray-900 tracking-tight leading-tight">
              Build Your Ideal{" "}
              <span className="block mt-1 text-brand-gradient">
                Development Stack
              </span>
            </h1>

            {/* Description Text */}
            <p className="text-gray-600 text-base sm:text-lg max-w-xl">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#technologies"
                className="px-6 py-3 rounded-lg text-sm sm:text-base font-semibold text-white bg-brand-gradient hover:opacity-90 transition-all shadow-md"
              >
                Explore Technologies
              </a>
              <a
                href="#learn-more"
                className="px-6 py-3 rounded-lg text-sm sm:text-base font-semibold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Side: 3D Stack Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <img
              src={BannerStack}
              alt="Development Stack 3D Visual"
              className="w-full max-w-[420px] h-auto object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
