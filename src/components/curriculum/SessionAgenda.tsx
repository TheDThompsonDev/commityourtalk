interface SessionAgendaProps {
  accentColor?: string;
}

export default function SessionAgenda({ accentColor = '#3685ff' }: SessionAgendaProps) {
  const agendaItems = [
    {
      time: '5 min',
      icon: '👋',
      title: 'Warm-Up Intros',
      description: 'Quick introductions to get everyone engaged and comfortable speaking early',
      type: 'full-group'
    },
    {
      time: '10 min',
      icon: '🎯',
      title: 'Topic Setup',
      description: 'Review the task/topic of the day and prepare for practice',
      type: 'full-group'
    },
    {
      time: '2-3 min',
      icon: '⚡',
      title: 'Impromptu Lightning Talk',
      description: 'One volunteer speaks on a completely random topic with no preparation',
      type: 'spotlight'
    },
    {
      time: '15 min',
      icon: '🎤',
      title: 'Breakout Rooms (Groups of 4)',
      description: 'Everyone presents for 3+ minutes and receives immediate peer feedback',
      type: 'breakout'
    },
    {
      time: '5 min',
      icon: '🌟',
      title: 'Spotlight Presentations',
      description: '2 randomly selected members share with the full group',
      type: 'full-group'
    },
    {
      time: '15 min',
      icon: '🎤',
      title: 'Second Breakout Round',
      description: 'New groups of 4 for more practice and diverse feedback',
      type: 'breakout'
    },
    {
      time: '8 min',
      icon: '🎬',
      title: 'Wrap-Up & Takeaways',
      description: 'Reflect on key learnings, share insights, and preview next session',
      type: 'full-group'
    }
  ];

  const totalTime = 60; // minutes

  return (
    <div className="bg-white dark:bg-card rounded-2xl p-8 border border-gray-100 dark:border-custom shadow-lg">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-strong mb-2">
            Weekly Session Structure
          </h2>
          <p className="text-gray-600 dark:text-muted">
            Every Discord session follows this proven format
          </p>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold" style={{ color: accentColor }}>
            {totalTime}
          </div>
          <div className="text-sm text-gray-600 dark:text-muted font-semibold">
            minutes
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {agendaItems.map((item, index) => (
          <div
            key={index}
            className={`relative pl-12 pr-4 py-4 rounded-xl transition-all hover:shadow-md ${
              item.type === 'breakout'
                ? 'bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-900/20'
                : item.type === 'spotlight'
                ? 'bg-gradient-to-r from-yellow-50 to-transparent dark:from-yellow-900/20'
                : 'bg-gray-50 dark:bg-surface-2'
            }`}
          >
            {/* Timeline dot and line */}
            <div className="absolute left-4 top-6">
              <div
                className="w-4 h-4 rounded-full border-4 border-white dark:border-card"
                style={{ backgroundColor: accentColor }}
              />
              {index < agendaItems.length - 1 && (
                <div
                  className="absolute left-1/2 top-4 w-0.5 h-16 -translate-x-1/2"
                  style={{ backgroundColor: `${accentColor}30` }}
                />
              )}
            </div>

            {/* Content */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{item.icon}</span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-strong">
                    {item.title}
                  </h3>
                  {item.type === 'breakout' && (
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full">
                      Small Groups
                    </span>
                  )}
                  {item.type === 'spotlight' && (
                    <span className="px-2 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-xs font-bold rounded-full">
                      Challenge
                    </span>
                  )}
                </div>
                <p className="text-gray-700 dark:text-muted text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div
                className="shrink-0 text-right px-3 py-1 rounded-lg font-bold text-sm"
                style={{ backgroundColor: `${accentColor}15`, color: accentColor }}
              >
                {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-white dark:from-surface-2 dark:to-card rounded-xl border border-gray-200 dark:border-custom">
        <div className="flex items-start gap-4">
          <div className="text-3xl">💡</div>
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 dark:text-strong mb-2">
              Why This Structure Works
            </h4>
            <ul className="space-y-2 text-sm text-gray-700 dark:text-muted">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span><strong>Multiple practice opportunities:</strong> Everyone speaks at least twice in small, supportive groups</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span><strong>Immediate feedback:</strong> Get constructive input right after presenting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span><strong>Low pressure environment:</strong> Small breakout groups reduce anxiety</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span><strong>Variety of challenges:</strong> Mix of prepared and impromptu speaking builds adaptability</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

