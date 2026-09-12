import { Suspense, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import TechnologiesSection from "./components/TechnologiesSection";
import Footer from "./components/Footer";
import type { Technology } from "./types/technology";


const techPromise: Promise<Technology[]> = fetch("/data.json").then((res) => {
  if (!res.ok) throw new Error("Failed to load technologies data");
  return res.json();
});

// Loading fallback
const LoadingSpinner = () => (
  <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col items-center justify-center gap-3">
    <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-600 rounded-full animate-spin"></div>
    <p className="text-gray-500 font-medium text-sm">Loading technologies...</p>
  </div>
);

function App() {
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  // Add technology to stack
  const handleAddToStack = (tech: Technology) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  // Remove single
  const handleRemove = (id: string) => {
    const updatedStack = selectedStack.filter((item) => item.id !== id);
    
    setSelectedStack(updatedStack);
    
  };

  //  Remove all 
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    
    setSelectedStack([]);
    
  };



  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">
      <Nav />

      <main>
        <Banner />

        <Suspense fallback={<LoadingSpinner />}>
          <TechnologiesSection
            techPromise={techPromise}
            selectedStack={selectedStack}
            handleAddToStack={handleAddToStack}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </Suspense>
        
      </main>

      <Footer />
    </div>
  );
}

export default App;
