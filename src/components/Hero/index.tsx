// src/components/Hero.tsx

import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrix Graph | 3Spans",
  description: "Explore and visualize matrix graphs with 3Spans.",
  // other metadata as needed
};

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Visualize Vectors in 3D Space with 3Spans
                </h1>
                <p className="mb-12 text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  3Spans is an interactive tool for modeling vectors, performing operations, and exploring 3D space. Enhance your understanding of vector mathematics with our intuitive platform.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  {/* Get Started Button */}
                  <Link
                    href="https://nextjstemplates.com/templates/saas-starter-startup"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-primary-dark transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  >
                    Get Started
                  </Link>
                  
                  {/* Learn More Button */}
                  <Link
                    href="https://github.com/NextJSTemplates/startup-nextjs"
                    className="inline-flex items-center justify-center rounded-full border border-primary px-8 py-4 text-base font-semibold text-primary bg-transparent hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Decorative SVGs or Styling */}
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content remains unchanged */}
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            {/* ... other SVG elements ... */}
            <defs>
              {/* SVG definitions remain unchanged */}
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              {/* ... other gradient definitions ... */}
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content remains unchanged */}
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            {/* ... other SVG elements ... */}
            <defs>
              {/* SVG definitions remain unchanged */}
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              {/* ... other gradient definitions ... */}
            </defs>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
