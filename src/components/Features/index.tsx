// src/components/Features/Features.tsx

import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Main Features"
          paragraph="3Spans offers a robust multicalculus modeling environment, enabling mathematicians and students to visualize and solve complex problems with precision."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
