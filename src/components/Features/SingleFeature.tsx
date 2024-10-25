// src/components/Features/SingleFeature.tsx

import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <article className="w-full">
      <div className="transition-transform duration-300 ease-in-out transform hover:-translate-y-2">
        <div
          className="mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
          role="img"
          aria-hidden="true"
        >
          {icon}
        </div>
        <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
          {title}
        </h3>
        <p className="text-base font-medium text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      </div>
    </article>
  );
};

export default SingleFeature;
