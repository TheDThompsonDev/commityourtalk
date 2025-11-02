# Component Library

Common reusable components following the Commit Your Talk design system.

---

## Buttons

### Primary Button
```tsx
<button className="bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Join Now
</button>
```

### Secondary Button
```tsx
<button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  Details
</button>
```

### Ghost Button
```tsx
<button className="border-2 border-[#3685ff] text-[#3685ff] hover:bg-[#E8F1FF] font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
  View More
</button>
```

### Small Button
```tsx
<button className="bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold py-2 px-4 rounded-md text-sm transition-colors duration-200">
  Save
</button>
```

### Button with Icon
```tsx
<button className="bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center">
  <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
  Add New
</button>
```

---

## Cards

### Basic Light Card
```tsx
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
  <h3 className="text-xl font-bold text-gray-900 mb-2">Card Title</h3>
  <p className="text-gray-600">Card content goes here</p>
</div>
```

### Dark Feedback Card
```tsx
<div className="bg-[#1E1B2E] rounded-xl p-6 shadow-lg">
  <div className="flex items-start justify-between mb-4">
    <div>
      <h3 className="text-white font-bold">From Jane Doe</h3>
      <p className="text-white/70 text-sm">Senior Software Engineer</p>
    </div>
    <span className="text-white/50 text-sm">2 days ago</span>
  </div>
  <p className="text-white/90 mb-4">Great job on the technical depth! The diagrams were super clear.</p>
  <div className="flex gap-2">
    <span className="px-3 py-1 bg-[#FF5F87]/20 text-[#FF5F87] text-xs font-semibold rounded-md">
      👍 Praise
    </span>
    <span className="px-3 py-1 bg-[#FFB020]/20 text-[#FFB020] text-xs font-semibold rounded-md">
      💡 Suggestion
    </span>
  </div>
</div>
```

### Stat Card
```tsx
<div className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm">
  <div className="text-4xl font-bold text-[#3685ff] mb-2">65%</div>
  <div className="text-gray-600 font-medium">Overall Completion</div>
  <p className="text-sm text-gray-500 mt-1">Keep up the great work!</p>
</div>
```

### Card with Colored Border
```tsx
<div className="bg-white border-l-4 border-[#3685ff] rounded-lg p-6 shadow-sm">
  <h3 className="text-xl font-bold text-gray-900 mb-2">Next Challenge</h3>
  <p className="text-gray-600">Deep Dive Demo (5-7 min)</p>
</div>
```

---

## Badges

### Status Badges
```tsx
<span className="px-3 py-1 bg-[#E8F1FF] text-[#3685ff] text-xs font-bold rounded-full uppercase">
  Conference Prep
</span>

<span className="px-3 py-1 bg-[#FFE8EE] text-[#FF5F87] text-xs font-bold rounded-full uppercase">
  Impromptu Speaking
</span>

<span className="px-3 py-1 bg-[#E6F9F0] text-[#19C37D] text-xs font-bold rounded-full uppercase">
  Completed
</span>

<span className="px-3 py-1 bg-[#FFF4E5] text-[#FFB020] text-xs font-bold rounded-full uppercase">
  In Progress
</span>
```

### Level Badge
```tsx
<div className="w-16 h-16 bg-[#3685ff] rounded-full flex items-center justify-center text-white text-2xl font-bold">
  2
</div>
```

---

## Progress Indicators

### Circular Progress
```tsx
<div className="relative w-32 h-32">
  <svg className="w-full h-full" viewBox="0 0 100 100">
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="#F3F4F6"
      strokeWidth="8"
      fill="none"
    />
    <circle
      cx="50"
      cy="50"
      r="40"
      stroke="#3685ff"
      strokeWidth="8"
      fill="none"
      strokeDasharray={`${65 * 2.51} ${100 * 2.51}`}
      strokeLinecap="round"
      transform="rotate(-90 50 50)"
    />
  </svg>
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="text-3xl font-bold text-gray-900">65%</span>
  </div>
</div>
```

### Progress Bar
```tsx
<div>
  <div className="flex justify-between mb-2">
    <span className="text-sm font-medium text-gray-700">Progress</span>
    <span className="text-sm font-bold text-[#3685ff]">75% Complete</span>
  </div>
  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
    <div 
      className="h-full bg-[#3685ff] rounded-full transition-all duration-300"
      style={{ width: '75%' }}
    />
  </div>
</div>
```

---

## Session/Event Cards

### Upcoming Session Card
```tsx
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
  <div className="flex justify-between items-start mb-4">
    <div>
      <span className="px-3 py-1 bg-[#E8F1FF] text-[#3685ff] text-xs font-bold rounded-full">
        Conference Prep
      </span>
      <h3 className="text-xl font-bold text-gray-900 mt-2">Mastering the Technical Demo</h3>
      <p className="text-sm text-gray-500 mt-1">09:00 AM - 10:30 AM PST</p>
    </div>
  </div>
  <p className="text-gray-600 mb-4">
    Learn how to deliver compelling and flawless technical demos that captivate your audience and showcase your product's value.
  </p>
  <div className="flex items-center justify-between">
    <div className="flex items-center text-sm text-gray-500">
      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      3/5 Slots Open
    </div>
    <button className="bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-200">
      Register
    </button>
  </div>
</div>
```

### Session Full Card
```tsx
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm opacity-75">
  <div className="flex justify-between items-start mb-4">
    <div>
      <span className="px-3 py-1 bg-[#FFE8EE] text-[#FF5F87] text-xs font-bold rounded-full">
        Impromptu Speaking
      </span>
      <h3 className="text-xl font-bold text-gray-900 mt-2">Thinking on Your Feet</h3>
      <p className="text-sm text-gray-500 mt-1">11:00 AM - 12:00 PM PST</p>
    </div>
  </div>
  <p className="text-gray-600 mb-4">
    Practice exercises to improve your ability to speak confidently and coherently without preparation.
  </p>
  <div className="flex items-center justify-between">
    <div className="flex items-center text-sm text-gray-500">
      <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      5/5 Slots Full
    </div>
    <button className="bg-gray-200 text-gray-600 font-semibold py-2 px-5 rounded-lg cursor-not-allowed" disabled>
      Session Full
    </button>
  </div>
</div>
```

---

## Forms

### Text Input
```tsx
<div className="space-y-2">
  <label className="block text-sm font-semibold text-gray-700">
    Email Address
  </label>
  <input
    type="email"
    placeholder="you@example.com"
    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-3 focus:ring-[#3685ff]/30 focus:border-[#3685ff] transition-all"
  />
</div>
```

### Search Input
```tsx
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input
    type="search"
    placeholder="Search sessions by topic..."
    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-3 focus:ring-[#3685ff]/30 focus:border-[#3685ff] transition-all"
  />
</div>
```

### Select Dropdown
```tsx
<div className="space-y-2">
  <label className="block text-sm font-semibold text-gray-700">
    Filter by Level
  </label>
  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-3 focus:ring-[#3685ff]/30 focus:border-[#3685ff] transition-all bg-white">
    <option>All Levels</option>
    <option>Level 1</option>
    <option>Level 2</option>
    <option>Level 3</option>
  </select>
</div>
```

---

## Navigation

### Top Nav Bar
```tsx
<nav className="bg-white border-b border-gray-200 h-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
    <div className="flex items-center justify-between h-full">
      <div className="flex items-center">
        <span className="text-2xl">🎙️</span>
        <span className="ml-2 text-xl font-bold text-gray-900">Commit Your Talk</span>
      </div>
      
      <div className="hidden md:flex items-center space-x-6">
        <a href="#" className="text-[#3685ff] font-semibold">Dashboard</a>
        <a href="#" className="text-gray-600 hover:text-[#3685ff] font-medium">Pathways</a>
        <a href="#" className="text-gray-600 hover:text-[#3685ff] font-medium">Sessions</a>
        <a href="#" className="text-gray-600 hover:text-[#3685ff] font-medium">Resources</a>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <img src="/avatar.jpg" alt="User" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" />
      </div>
    </div>
  </div>
</nav>
```

### Tab Navigation
```tsx
<div className="border-b border-gray-200">
  <div className="flex space-x-8">
    <button className="py-4 px-1 border-b-2 border-[#3685ff] text-[#3685ff] font-semibold">
      My Feedback
    </button>
    <button className="py-4 px-1 border-b-2 border-transparent text-gray-600 hover:text-gray-900 font-medium">
      Give Feedback
    </button>
    <button className="py-4 px-1 border-b-2 border-transparent text-gray-600 hover:text-gray-900 font-medium">
      Find a Coach
    </button>
  </div>
</div>
```

---

## Avatars

### Single Avatar
```tsx
<img 
  src="/avatar.jpg" 
  alt="User Name" 
  className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
/>
```

### Avatar Group (Overlapping)
```tsx
<div className="flex -space-x-2">
  <img src="/avatar1.jpg" alt="User 1" className="w-10 h-10 rounded-full border-2 border-white shadow-sm z-30" />
  <img src="/avatar2.jpg" alt="User 2" className="w-10 h-10 rounded-full border-2 border-white shadow-sm z-20" />
  <img src="/avatar3.jpg" alt="User 3" className="w-10 h-10 rounded-full border-2 border-white shadow-sm z-10" />
</div>
```

### Avatar with Initials
```tsx
<div className="w-10 h-10 bg-[#3685ff] rounded-full flex items-center justify-center text-white font-bold text-sm">
  JD
</div>
```

---

## Tables

### Speaking History Table
```tsx
<div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
  <table className="w-full">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Talk Title
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Event
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Date
        </th>
        <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
          Actions
        </th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-gray-900 font-medium">The Future of UI</td>
        <td className="px-6 py-4 text-gray-600">Global Dev Conf</td>
        <td className="px-6 py-4 text-gray-600">2024-05-20</td>
        <td className="px-6 py-4 text-right">
          <button className="text-[#3685ff] hover:text-[#2870E5] font-semibold text-sm">
            View
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

---

## Achievements

### Achievement Badge
```tsx
<div className="text-center">
  <div className="w-20 h-20 border-3 border-[#FF5F87] rounded-full bg-white flex items-center justify-center mx-auto mb-3 shadow-sm">
    <svg className="w-10 h-10 text-[#FF5F87]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  </div>
  <h3 className="font-bold text-gray-900 mb-1">First Talk Logged</h3>
  <p className="text-sm text-gray-600">You started your journey!</p>
</div>
```

### Locked Achievement
```tsx
<div className="text-center opacity-30">
  <div className="w-20 h-20 border-3 border-gray-400 rounded-full bg-white flex items-center justify-center mx-auto mb-3">
    <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  </div>
  <h3 className="font-bold text-gray-900 mb-1">Conference Pro</h3>
  <p className="text-sm text-gray-600">Speak at a major conference</p>
</div>
```

---

## Modals

### Basic Modal
```tsx
<div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
  <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
    <div className="flex items-start justify-between mb-6">
      <h2 className="text-2xl font-bold text-gray-900">Confirm Registration</h2>
      <button className="text-gray-400 hover:text-gray-600">
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <p className="text-gray-600 mb-8">
      Are you sure you want to register for "Mastering the Technical Demo" on October 5, 2024?
    </p>
    <div className="flex gap-3">
      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-colors">
        Cancel
      </button>
      <button className="flex-1 bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
        Confirm
      </button>
    </div>
  </div>
</div>
```

---

## Loading States

### Skeleton Card
```tsx
<div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
  <div className="h-4 bg-gray-200 rounded w-2/3"></div>
</div>
```

### Spinner
```tsx
<div className="inline-block w-8 h-8 border-4 border-gray-200 border-t-[#3685ff] rounded-full animate-spin"></div>
```

---

## Empty States

### No Results
```tsx
<div className="text-center py-16">
  <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
  </svg>
  <h3 className="text-xl font-bold text-gray-900 mb-2">No sessions scheduled yet</h3>
  <p className="text-gray-600 mb-6">Be the first to join an upcoming practice session!</p>
  <button className="bg-[#3685ff] hover:bg-[#2870E5] text-white font-semibold py-3 px-6 rounded-lg transition-colors">
    Browse Sessions
  </button>
</div>
```

---

This component library provides ready-to-use code snippets following the design system. All components use the established color palette, spacing, and styling conventions.

