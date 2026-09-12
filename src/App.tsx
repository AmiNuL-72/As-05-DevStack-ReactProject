import { Suspense, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    const alreadyExists = selectedStack.some((item) => item.id === tech.id);
    if (alreadyExists) {
      toast.warn(`"${tech.name}" is already in your stack!`);
      return;
    }
    setSelectedStack([...selectedStack, tech]);
    toast.success(`Added ${tech.name} to your stack!`);
  };

  // Remove single
  const handleRemove = (id: string) => {
    const itemToRemove = selectedStack.find((item) => item.id === id);
    const updatedStack = selectedStack.filter((item) => item.id !== id);
    
    setSelectedStack(updatedStack);
    
    if (itemToRemove) {
      toast.info(`Removed ${itemToRemove.name} from your stack`);
    }
  };

  //  Remove all 
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    
    setSelectedStack([]);
    toast.error("Removed all technologies from your stack");
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

      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
}

export default App;
