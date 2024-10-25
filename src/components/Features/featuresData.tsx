// src/components/Features/featuresData.ts

import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg
        width="40"
        height="41"
        viewBox="0 0 40 41"
        className="fill-current"
        aria-label="Interactive Vector Modeling Icon"
      >
        <title>Interactive Vector Modeling</title>
        <g>
          <circle cx="20" cy="20.5" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="5" y1="5" x2="35" y2="35" stroke="currentColor" strokeWidth="2" />
          <line x1="35" y1="5" x2="5" y2="35" stroke="currentColor" strokeWidth="2" />
          <circle cx="20" cy="20.5" r="4" fill="currentColor" />
        </g>
      </svg>
    ),
    title: "Interactive Vector Modeling",
    paragraph:
      "Engage with a dynamic 3D environment to create and manipulate vectors, facilitating comprehensive multicalculus modeling and spatial analysis. 3Spans empowers you to visualize and explore complex mathematical constructs with precision and ease.",
  },
  {
    id: 2,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="fill-current"
        aria-label="Real-time Calculus Operations Icon"
      >
        <title>Real-time Calculus Operations</title>
        <g>
          <path
            d="M20 5V35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M5 20H35"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="20" cy="20" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
          <path
            d="M20 20L25 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M20 20L15 25"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    ),
    title: "Real-time Calculus Operations",
    paragraph:
      "Utilize advanced computational algorithms to perform complex calculus operations in real-time. 3Spans enhances your mathematical modeling workflow, enabling instantaneous feedback and deeper analytical insights into vector calculus.",
  },
  {
    id: 3,
    icon: (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        className="fill-current"
        aria-label="Probability Model Visualization Icon"
      >
        <title>Probability Model Visualization</title>
        <g>
          {/* Bell Curve */}
          <path
            d="M5 30 Q15 10 25 30 T35 30"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
          {/* Data Points */}
          <circle cx="10" cy="30" r="2" fill="currentColor" />
          <circle cx="20" cy="15" r="2" fill="currentColor" />
          <circle cx="30" cy="30" r="2" fill="currentColor" />
          {/* Vertical Line */}
          <line x1="20" y1="15" x2="20" y2="35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </g>
      </svg>
    ),
    title: "Probability Model Visualization",
    paragraph:
      "Visualize and analyze complex probability models with 3Spans' intuitive interface. Whether you're exploring statistical distributions or constructing probabilistic frameworks, our tool provides the clarity and precision needed for in-depth multicalculus modeling and data-driven decision-making.",
  },
];

export default featuresData;
