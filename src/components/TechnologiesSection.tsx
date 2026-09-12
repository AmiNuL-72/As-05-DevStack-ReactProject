import { use } from "react";
import type { Technology } from "../types/technology";
import TechCard from "./TechCard";
import YourStack from "./YourStack";

interface TechnologiesSectionProps {
  techPromise: Promise<Technology[]>;
  selectedStack: Technology[];
  handleAddToStack: (tech: Technology) => void;
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}

const TechnologiesSection = ({
  techPromise,
  selectedStack,
  handleAddToStack,
  handleRemove,
  handleRemoveAll,
}: TechnologiesSectionProps) => {
  const technologies: Technology[] = use(techPromise);

  return (
    <section id="technologies" className="w-full py-12">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Explore the{" "}
            <span className="text-brand-gradient">Technologies</span>
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Cards (Left) + YourStack (Right) */}
        <div className="grid grid-cols-12 gap-8 items-start">

          {/* Left */}
          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = selectedStack.some((item) => item.id === tech.id);

                return (
                  <TechCard
                    key={tech.id}
                    technology={tech}
                    handleAddToStack={handleAddToStack}
                    isAdded={isAdded}
                  />
                );
              })}
            </div>
          </div>

          {/* Your Stack Sidebar */}
          <div className="col-span-3">
            <YourStack 
            selectedStack={selectedStack} 
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
