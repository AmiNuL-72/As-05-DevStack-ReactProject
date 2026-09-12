import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedStack: Technology[];
}

const YourStack = ({ selectedStack }: YourStackProps) => {
  const count = selectedStack.length;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm sticky top-24">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        <p className="text-sm text-slate-400 mt-1">
          {count === 0 ? "No technologies selected yet." : `${count} Technology Selected`}
        </p>
      </div>

      {/* Empty List */}
      {count === 0 ? (
        <div className="border border-dashed border-slate-200 rounded-2xl py-12 px-4 flex items-center justify-center text-center">
          <p className="text-sm text-slate-400 font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
          {selectedStack.map((tech) => (
            <div
              key={tech.id}
              className="bg-white rounded-xl border border-slate-200 p-3 flex items-center gap-3 shadow-xs"
            >
              {/* Tech Icon & Info */}
              <div className="w-9 h-9 flex items-center justify-center p-1 bg-gray-50 rounded-lg border border-gray-100">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">{tech.name}</h4>
                <p className="text-xs text-slate-400 capitalize">{tech.category}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default YourStack;
