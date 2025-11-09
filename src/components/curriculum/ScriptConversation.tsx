import { ScriptResponse } from '@/lib/types/curriculum';
import { formatMarkdownText } from '@/lib/utils/formatText';

interface ScriptConversationProps {
  response: ScriptResponse;
  type: 'default' | 'cyt';
  accentColor?: string;
}

const icons = {
  default: (
    <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
  ),
  cyt: (
    <svg className="w-5 h-5 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
};

const styles = {
  default: {
    container: 'bg-red-50 p-4 rounded-lg border border-red-100',
    text: 'text-gray-700 italic',
    border: 'border-red-200',
    label: <>The {'"'}Default{'"'} Conversation</>,
    analysisLabel: 'Why this fails:',
  },
  cyt: {
    container: 'bg-green-50 p-4 rounded-lg border border-green-100',
    text: 'text-gray-800',
    border: 'border-green-200',
    label: <>The {'"'}CYT Approach{'"'}</>,
    analysisLabel: 'Why this works:',
  },
};

export default function ScriptConversation({ response, type }: ScriptConversationProps) {
  const style = styles[type];

  return (
    <div>
      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
        {icons[type]}
        {style.label}
      </h4>
      <div className={style.container}>
        <div className={`${style.text} space-y-2 text-sm`}>
          {response.conversation.map((line, i) => (
            <p key={i} className={`leading-relaxed ${type === 'default' ? 'italic' : ''}`}>
              {formatMarkdownText(line)}
            </p>
          ))}
        </div>
        <div className={`mt-4 pt-3 border-t ${style.border}`}>
          <p className="text-xs font-semibold text-gray-700 mb-1">{style.analysisLabel}</p>
          <p className="text-sm text-gray-600">{response.analysis}</p>
        </div>
      </div>
    </div>
  );
}

