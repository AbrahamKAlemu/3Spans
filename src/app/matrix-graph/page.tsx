// src/app/matrix-graph/page.tsx

import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matrix Graph | 3Spans",
  description: "Explore and visualize matrix graphs with 3Spans.",
  // other metadata as needed
};

const MatrixGraphPage = () => {
  return (
    <>
      <section className="relative z-10 pb-16 pt-36 md:pb-20 lg:pb-28 lg:pt-[180px]">
        <div className="container">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[530px] text-center">
                <h3 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl">
                  Matrix Graph Visualization
                </h3>
                <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Explore and visualize complex matrix graphs with 3Spans' intuitive tools.
                </p>
                <Link
                  href="/"
                  className="px-8 py-3 text-base font-bold text-white duration-300 rounded-md bg-primary shadow-signUp hover:bg-white hover:text-primary md:px-9 lg:px-8 xl:px-9"
                >
                  Back to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Add additional SVGs or styling as needed */}
      </section>
    </>
  );
};

export default MatrixGraphPage;
