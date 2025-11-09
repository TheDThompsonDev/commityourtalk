import MainLayout from "@/components/layout/MainLayout";
import { curriculum } from "@/lib/data/curriculum";
import ScriptsClient from "./ScriptsClient";

export const metadata = {
  title: "CYT Script Library - Commit Your Talk",
  description: "Browse all conversation scripts from the complete CYT curriculum. Learn the difference between default responses and the CYT approach.",
};

export default function ScriptLibraryPage() {
  const totalScripts = curriculum.reduce((acc, level) => acc + level.playbook.length, 0);

  return (
    <MainLayout>
      <div className="bg-gray-50 min-h-screen">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-bold text-white mb-2">CYT Script Library</h1>
            <p className="text-lg text-slate-300">
              {totalScripts} conversation scripts from the complete curriculum
            </p>
          </div>
        </div>
        
        <ScriptsClient curriculum={curriculum} />
      </div>
    </MainLayout>
  );
}
