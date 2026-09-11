import { use } from "react";
import type { Technology } from "../types/technology";
import TechCard from "./TechCard";

interface TechListProps {
  techPromise: Promise<Technology[]>;
}

const TechList = ({ techPromise }: TechListProps) => {
  const technologies = use(techPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard key={tech.id} technology={tech} />
      ))}
    </div>
  );
};

export default TechList;
