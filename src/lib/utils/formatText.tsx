import { ReactNode } from 'react';

export function formatMarkdownText(text: string): ReactNode {
  const formatted = text.replace(/^\d+\.\s*/, '');
  
  const processFormatting = (str: string): ReactNode[] => {
    const result: ReactNode[] = [];
    let currentIndex = 0;
    
    const regex = /(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(`([^`]+)`)/g;
    let match;
    
    while ((match = regex.exec(str)) !== null) {
      if (match.index > currentIndex) {
        result.push(str.substring(currentIndex, match.index));
      }
      
      if (match[1]) {
        result.push(
          <strong key={match.index} className="font-semibold text-gray-900">
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        result.push(
          <em key={match.index} className="italic">
            {match[4]}
          </em>
        );
      } else if (match[5]) {
        result.push(
          <code key={match.index} className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded text-xs font-mono">
            {match[6]}
          </code>
        );
      }
      
      currentIndex = match.index + match[0].length;
    }
    
    if (currentIndex < str.length) {
      result.push(str.substring(currentIndex));
    }
    
    return result;
  };
  
  return <>{processFormatting(formatted)}</>;
}

