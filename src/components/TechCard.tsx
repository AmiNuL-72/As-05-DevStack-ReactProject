import type { Technology } from "../types/technology";

interface TechCardProps {
  technology: Technology;
}

// Badge color 
const getBadgeColor = (badge: string) => {
  const text = badge.toLowerCase();
  if (text.includes("popular") || text.includes("top") || text.includes("essential")) {
    return "text-sky-600 bg-sky-50 border-sky-200";
  }
  if (text.includes("versatile") || text.includes("standard") || text.includes("fast api")) {
    return "text-emerald-600 bg-emerald-50 border-emerald-200";
  }
  if (text.includes("fast") || text.includes("cache") || text.includes("nosql")) {
    return "text-amber-600 bg-amber-50 border-amber-200";
  }
  return "text-cyan-600 bg-cyan-50 border-cyan-200";
};

const TechCard = ({ technology }: TechCardProps) => {
  const { name, category, description, icon, rating, difficulty, badge } = technology;

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 flex flex-col justify-between h-full transition-all">
      <div>
        {/* Card Header: Icon & Badge */}
        <div className="flex items-center justify-between">
          <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center p-1.5 border border-gray-100">
            <img src={icon} alt={name} className="w-full h-full object-contain" />
          </div>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getBadgeColor(badge)}`}>
            {badge}
          </span>
        </div>

        {/* Title & Description */}
        <div className="mt-4 mb-3">
          <h3 className="text-lg font-bold text-gray-900">{name}</h3>
          <p className="text-xs sm:text-sm text-gray-500 line-clamp-3 mt-1 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div>
        {/* Category, Difficulty & Rating */}
        <div className="flex items-center justify-between text-xs py-3 border-t border-gray-50 mt-2 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-700">
              {category}
            </span>
            <span className="text-gray-500 text-xs">{difficulty}</span>
          </div>

          <div className="flex items-center gap-1 font-semibold text-gray-800">
            <span className="text-amber-400">★</span>
            <span>{rating}</span>
          </div>
        </div>

        {/* Add to Stack Button */}
        <button
          type="button"
          className="w-full py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg bg-[#0d131f] hover:bg-black text-white cursor-pointer active:scale-95 transition-all"
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechCard;
