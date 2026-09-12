import type { Technology } from "../types/technology";

interface YourStackProps {
  selectedStack: Technology[];
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({ 
  selectedStack,
  handleRemove,
  handleRemoveAll,
}: YourStackProps) => {
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
        <div className="space-y-3">
          <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
            {selectedStack.map((tech) => (
              <div
                key={tech.id}
                className="bg-white rounded-xl border border-slate-200 p-3 flex items-center  shadow-xs justify-between"
              >
                {/* Tech Icon & Info */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 flex items-center justify-center p-1 bg-gray-50 rounded-lg border border-gray-100">
                      <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">{tech.name}</h4>
                      <p className="text-xs text-slate-400 capitalize">{tech.category}</p>
                    </div>
                </div>
                {/* Remove Single Item */}
                <button
                    type="button"
                    onClick={() => handleRemove(tech.id)}
                    className="p-1.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    title="Remove"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
              </div>
            ))}
          </div>
            {/* Remove All Button */}
          <button
            type="button"
            onClick={handleRemoveAll}
            className="w-full mt-4 py-2.5 px-4 rounded-xl border border-rose-200 text-rose-600 font-semibold text-sm hover:bg-rose-50 active:scale-95 transition-all cursor-pointer text-center"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default YourStack;
