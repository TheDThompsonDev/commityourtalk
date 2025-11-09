import { PlaybookScript } from '@/lib/types/curriculum';
import ScriptConversation from './ScriptConversation';

interface ScriptCardProps {
  script: PlaybookScript;
  accentColor: string;
}

export default function ScriptCard({ script, accentColor }: ScriptCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="border-l-4 pl-6" style={{ borderColor: accentColor }}>
        <h3 className="text-xl font-bold text-gray-900 mb-4">{script.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ScriptConversation 
            response={script.defaultResponse} 
            type="default"
            accentColor={accentColor}
          />
          <ScriptConversation 
            response={script.cytApproach} 
            type="cyt"
            accentColor={accentColor}
          />
        </div>
      </div>
    </div>
  );
}

