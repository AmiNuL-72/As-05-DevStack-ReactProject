import { Suspense } from "react";
import type { Technology } from "./types/technology";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import TechList from "./components/TechList";


const techPromise: Promise<Technology[]> = fetch("/data.json").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <Nav />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 py-12">
        <h2 className="text-3xl font-bold text-brand-gradient mb-8">All Technologies</h2>

    
        <Suspense fallback={<p className="text-center py-10 text-gray-500">Loading...</p>}>
          <TechList techPromise={techPromise} />
        </Suspense>
        
      </main>

      <Footer />
    </>
  );
}

export default App;
