# Commit Your Talk - Design System

## Overview
A modern, clean design system focused on clarity, accessibility, and encouraging introverted developers to practice public speaking. The design emphasizes progress, community, and a supportive environment.

---

## Color Palette

### Primary Colors
```css
--primary-blue: #3685ff;      /* Primary actions, links, active states */
--primary-blue-hover: #2870E5; /* Hover state for primary blue */
--primary-blue-light: #E8F1FF; /* Light blue backgrounds */

--accent-pink: #FF5F87;        /* Accents, confidence metrics, highlights */
--accent-pink-hover: #E5416E;  /* Hover state for pink */
--accent-pink-light: #FFE8EE;  /* Light pink backgrounds */
```

### Semantic Colors
```css
--success-green: #19C37D;      /* Success states, completion */
--success-green-light: #E6F9F0;

--warning-orange: #FFB020;     /* Warnings, attention */
--warning-orange-light: #FFF4E5;

--destructive-red: #F04438;    /* Errors, destructive actions */
--destructive-red-light: #FFEBE9;
```

### Neutral Colors
```css
--text-primary: #0A0911;       /* Main headings, strong text */
--text-secondary: #4B5563;     /* Body text, secondary content */
--text-muted: #9CA3AF;         /* Disabled, placeholder text */

--surface-white: #FFFFFF;      /* Card backgrounds */
--surface-gray: #F9FAFB;       /* Page backgrounds */
--surface-gray-light: #F3F4F6; /* Subtle backgrounds */

--border-light: #E5E7EB;       /* Default borders */
--border-medium: #D1D5DB;      /* Emphasized borders */

--surface-dark: #1E1B2E;       /* Dark card backgrounds (feedback cards) */
--surface-dark-alt: #16142B;   /* Alternative dark surface */
/* Slate-based dark section backgrounds (hero/CTA/sections) */
--surface-slate-900: #0F172A;  /* Dark slate background */
--surface-slate-800: #1E293B;  /* Slightly lighter slate */
```

### State Colors
```css
--focus-ring: rgba(54, 133, 255, 0.3);  /* Focus outlines */
--overlay: rgba(0, 0, 0, 0.5);          /* Modal overlays */
```

---

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

### Font Sizes
```css
--text-xs: 12px;      /* Small labels, badges */
--text-sm: 14px;      /* Secondary text, captions */
--text-base: 16px;    /* Body text, default */
--text-lg: 18px;      /* Emphasized body text */
--text-xl: 20px;      /* Small headings */
--text-2xl: 24px;     /* Section headings */
--text-3xl: 30px;     /* Page titles */
--text-4xl: 36px;     /* Hero headings */
--text-5xl: 48px;     /* Large hero text */
```

### Font Weights
```css
--font-normal: 400;   /* Body text */
--font-medium: 500;   /* Emphasized text */
--font-semibold: 600; /* Subheadings */
--font-bold: 700;     /* Headings */
```

### Line Heights
```css
--leading-tight: 1.25;   /* Headings */
--leading-normal: 1.5;   /* Body text */
--leading-relaxed: 1.75; /* Comfortable reading */
```

---

## Spacing System

Based on 4px increments:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

---

## Border Radius

```css
--radius-sm: 6px;     /* Small elements (badges) */
--radius-md: 8px;     /* Buttons, inputs */
--radius-lg: 12px;    /* Cards, larger components */
--radius-xl: 16px;    /* Large cards, modals */
--radius-2xl: 20px;   /* Extra large cards */
--radius-full: 9999px; /* Circular (avatars, pills) */
```

---

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

---

## Components

### Buttons

#### Primary Button
```css
background: var(--primary-blue);
color: white;
padding: 12px 24px;
border-radius: var(--radius-md);
font-weight: var(--font-semibold);
font-size: var(--text-base);
transition: background 200ms ease;

hover: background: var(--primary-blue-hover);
focus: ring: 3px solid var(--focus-ring);
```

#### Secondary Button
```css
background: var(--surface-gray-light);
color: var(--text-primary);
padding: 12px 24px;
border-radius: var(--radius-md);
font-weight: var(--font-semibold);
font-size: var(--text-base);

hover: background: var(--border-light);
```

#### Ghost Button
```css
background: transparent;
color: var(--primary-blue);
padding: 12px 24px;
border: 1px solid var(--primary-blue);
border-radius: var(--radius-md);
font-weight: var(--font-semibold);

hover: background: var(--primary-blue-light);
```

#### Buttons on Dark Surfaces
```css
/* Primary on dark */
background: var(--surface-white);
color: var(--text-primary);
border: 1px solid rgba(255,255,255,0.2);
box-shadow: var(--shadow-sm);

/* Secondary on dark (ghost) */
background: transparent;
color: #FFFFFF;
border: 1px solid rgba(255,255,255,0.3);

/* Hover states should increase contrast slightly */
```

#### Button Sizes
- **Small:** padding: 8px 16px; font-size: 14px;
- **Medium:** padding: 12px 24px; font-size: 16px; (default)
- **Large:** padding: 16px 32px; font-size: 18px;

---

### Cards

#### Light Card (Default)
```css
background: var(--surface-white);
border: 1px solid var(--border-light);
border-radius: var(--radius-lg);
padding: var(--space-6);
box-shadow: var(--shadow-sm);

hover: box-shadow: var(--shadow-md);
transition: box-shadow 200ms ease;
```

#### Dark Card (Feedback)
```css
background: var(--surface-dark);
color: white;
border-radius: var(--radius-lg);
padding: var(--space-6);
box-shadow: var(--shadow-lg);
```

#### Card with Colored Border
```css
border-left: 4px solid var(--primary-blue);
/* or any semantic color */
```

### Page Sections (Premium)

#### Dark Slate Section
```css
Background: linear gradient from --surface-slate-900 to --surface-slate-800;
Text: white on headings; slate-300 on body; accents use var(--primary-blue);
Cards inside: use translucent surfaces (e.g., white/5) with subtle borders (white/10).
```

#### Outcomes Row
```css
Grid of 2–4 light cards:
  Card: Light background, border: var(--border-light), radius: var(--radius-lg)
  Title: font-bold, text-primary; Subtext: text-secondary
  Optional small label (Outcome 1, etc.) in var(--primary-blue)
```

#### Roadmap Snapshot Card
```css
Header: title (left) + small meta (right)
List Items: number pill (primary-blue), title, small note
Progress Bar: 8px height, primary-blue progress
```

#### Roadmap Stepper
```css
Horizontal on desktop, vertical on mobile
Step: circular number (primary-blue), title, small note
Connector: subtle track (border-light) between steps
```

#### Persona Cards (Who this is for)
```css
Three light cards with title + short description
Label: small, primary-blue; Emphasis on clarity and scannability
```

#### Testimonials (Dark)
```css
Section: Dark slate background
Card: white/5 background, border white/10, italic quote, name in slate-300
```

#### FAQ (Divided)
```css
Container: light background, rounded-xl, border: var(--border-light)
Items: details/summary with divider lines; summary bold; caret rotates on open
```

---

### Progress Indicators

#### Circular Progress
```css
Size: 120px x 120px
Stroke Width: 8px
Track Color: var(--surface-gray-light)
Progress Color: var(--primary-blue) or var(--accent-pink)
Center Text: var(--text-4xl), var(--font-bold)
```

#### Progress Bar
```css
height: 8px;
background: var(--surface-gray-light);
border-radius: var(--radius-full);

progress:
  background: var(--primary-blue);
  height: 100%;
  border-radius: var(--radius-full);
  transition: width 300ms ease;
```

---

### Badges

#### Status Badge
```css
padding: 4px 12px;
border-radius: var(--radius-full);
font-size: var(--text-xs);
font-weight: var(--font-semibold);
text-transform: uppercase;
letter-spacing: 0.5px;
```

**Variants:**
- **Conference Prep:** bg: var(--primary-blue-light); color: var(--primary-blue);
- **Impromptu:** bg: var(--accent-pink-light); color: var(--accent-pink);
- **Success:** bg: var(--success-green-light); color: var(--success-green);
- **Warning:** bg: var(--warning-orange-light); color: var(--warning-orange);

#### Feedback Tag (on dark cards)
```css
padding: 6px 12px;
border-radius: var(--radius-md);
font-size: var(--text-xs);
font-weight: var(--font-medium);

Praise: bg: rgba(255, 95, 135, 0.2); color: var(--accent-pink);
Suggestion: bg: rgba(255, 176, 32, 0.2); color: var(--warning-orange);
Body Language: bg: rgba(240, 68, 56, 0.2); color: var(--destructive-red);
```

### Session Agenda (Variants)
Props:
```ts
accentColor?: string;        // hex color for accents
variant?: 'light' | 'dark';  // background/text styling
showHeader?: boolean;        // toggles internal header
```

Light Variant:
```css
Item backgrounds use subtle tints by type (blue/yellow/gray)
Timeline dot: accentColor with white border
```

Dark Variant:
```css
Card: white/5 background, border: white/10
Text: white (titles), slate-300 (body)
Pills: low-opacity brand tints (blue/yellow)
```

---

### Form Inputs

#### Text Input
```css
padding: 12px 16px;
border: 1px solid var(--border-light);
border-radius: var(--radius-md);
font-size: var(--text-base);
background: var(--surface-white);
color: var(--text-primary);

focus:
  border-color: var(--primary-blue);
  ring: 3px solid var(--focus-ring);
  outline: none;

disabled:
  background: var(--surface-gray-light);
  color: var(--text-muted);
  cursor: not-allowed;
```

#### Search Input
```css
/* Same as text input, but with icon */
padding-left: 40px; /* Space for search icon */
```

---

### Navigation

#### Top Navigation Bar
```css
background: var(--surface-white);
border-bottom: 1px solid var(--border-light);
padding: var(--space-4) var(--space-6);
height: 64px;
```

#### Nav Link
```css
color: var(--text-secondary);
font-size: var(--text-base);
font-weight: var(--font-medium);
padding: var(--space-2) var(--space-4);

hover:
  color: var(--primary-blue);
  
active:
  color: var(--primary-blue);
  font-weight: var(--font-semibold);
```

#### Sticky In-Page Subnav (Scrollspy)
```css
Container:
  position: sticky; top: 64px; /* below top nav */
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--border-light);

Links:
  font-weight: var(--font-medium);
  color: var(--text-secondary);
  padding: var(--space-2) var(--space-2);
  border-bottom: 2px solid transparent;

Active:
  color: var(--text-primary);
  border-bottom-color: var(--primary-blue);

Behavior:
  html: scroll-behavior: smooth;
  Sections: add scroll-margin-top ~96px (e.g., Tailwind `scroll-mt-24`).
```

---

### Avatars

#### Sizes
- **Small:** 32px x 32px
- **Medium:** 40px x 40px (default)
- **Large:** 56px x 56px
- **XL:** 80px x 80px

```css
border-radius: var(--radius-full);
border: 2px solid var(--surface-white);
box-shadow: var(--shadow-sm);
```

#### Avatar Group (Overlapping)
```css
margin-left: -8px; /* Overlap */
z-index: [decreasing by 1];
```

---

### Session/Event Cards

```css
background: var(--surface-white);
border: 1px solid var(--border-light);
border-radius: var(--radius-xl);
padding: var(--space-6);
box-shadow: var(--shadow-sm);

Structure:
  - Badge (top-left, colored by type)
  - Time (small, muted)
  - Title (text-2xl, bold)
  - Description (text-base, muted)
  - Footer:
    - Slots indicator (with avatar group)
    - Action button (right-aligned)
```

---

### Calendar

#### Calendar Grid
```css
Cell Size: 40px x 40px
Gap: var(--space-1)
Border: None on cells
```

#### Date Cell
```css
Default:
  background: transparent;
  color: var(--text-primary);
  
Selected:
  background: var(--primary-blue);
  color: white;
  border-radius: var(--radius-md);
  
Has Event (dot indicator):
  &::after {
    content: '';
    width: 4px;
    height: 4px;
    background: var(--primary-blue);
    border-radius: var(--radius-full);
    position: absolute;
    bottom: 4px;
  }
```

---

### Tables

#### Speaking History Table
```css
Header:
  background: var(--surface-gray-light);
  color: var(--text-secondary);
  font-size: var(--text-sm);
  font-weight: var(--font-semibold);
  text-transform: uppercase;
  padding: var(--space-3) var(--space-4);
  
Row:
  border-bottom: 1px solid var(--border-light);
  padding: var(--space-4);
  
  hover:
    background: var(--surface-gray);
    
Cell:
  color: var(--text-primary);
  font-size: var(--text-base);
```

---

### Achievements/Badges

#### Achievement Icon
```css
Size: 80px x 80px
Border: 3px solid [color]
Border Radius: var(--radius-full)
Background: var(--surface-white)
Icon Color: [matching border color]

Locked State:
  opacity: 0.3;
  border-color: var(--border-medium);
```

---

## Layout Patterns

### Page Container
```css
max-width: 1280px; /* 7xl */
margin: 0 auto;
padding: var(--space-4) var(--space-6);

@media (min-width: 768px) {
  padding: var(--space-6) var(--space-8);
}
```

### Two-Column Layout
```css
display: grid;
grid-template-columns: 2fr 1fr; /* Main content + Sidebar */
gap: var(--space-8);

@media (max-width: 1024px) {
  grid-template-columns: 1fr;
}
```

### Card Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap: var(--space-6);
```

---

## Animations & Transitions

### Standard Transitions
```css
--transition-fast: 150ms ease;
--transition-normal: 200ms ease;
--transition-slow: 300ms ease;
```

### Hover Effects
```css
/* Cards */
hover:
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-normal);

/* Buttons */
hover:
  transform: translateY(-1px);
  transition: all var(--transition-fast);
```

### Loading States
```css
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.loading {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

---

## Icons

### Style
- **Type:** Outline/Stroke icons (Heroicons style)
- **Stroke Width:** 2px
- **Sizes:**
  - Small: 16px
  - Medium: 20px (default)
  - Large: 24px
  - XL: 32px

### Color Usage
- **Default:** var(--text-secondary)
- **Active:** var(--primary-blue)
- **Success:** var(--success-green)
- **Warning:** var(--warning-orange)
- **Destructive:** var(--destructive-red)

---

## Accessibility

### Focus States
```css
*:focus-visible {
  outline: 3px solid var(--focus-ring);
  outline-offset: 2px;
}
```

### Minimum Touch Targets
- All interactive elements: minimum 44px x 44px
- Padding can extend beyond visual size

### Color Contrast
- Text on white: minimum 4.5:1 ratio
- Large text (18px+): minimum 3:1 ratio
- UI components: minimum 3:1 ratio

### Screen Reader Text
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

---

## Responsive Breakpoints

```css
--breakpoint-sm: 640px;   /* Mobile landscape */
--breakpoint-md: 768px;   /* Tablet portrait */
--breakpoint-lg: 1024px;  /* Tablet landscape / Small desktop */
--breakpoint-xl: 1280px;  /* Desktop */
--breakpoint-2xl: 1536px; /* Large desktop */
```

---

## Usage Guidelines

### Do's ✅
- Use consistent spacing from the spacing scale
- Maintain color contrast ratios for accessibility
- Use semantic colors (green for success, red for errors)
- Keep card shadows subtle
- Use icons sparingly and consistently
- Provide clear hover states for interactive elements
- Use progress indicators to show user advancement

### Don'ts ❌
- Avoid harsh, high-contrast gradients; allow subtle linear gradients only for large section backgrounds (hero/CTA/section bands)
- Don't use custom spacing outside the scale
- Don't use pure black (#000000) for text
- Don't create buttons smaller than 44px height
- Don't use more than 3 typeface weights in a single view
- Don't add borders to everything - use shadows for elevation

---

## Component Examples

### Dashboard Stats Card
```
┌─────────────────────────┐
│  Overall Completion     │
│                         │
│      ╱─────╲           │
│     │  65%  │          │
│      ╲─────╱           │
│                         │
└─────────────────────────┘

Styles:
- Card: light background, subtle shadow
- Title: text-base, font-medium, text-secondary
- Progress: 120px circle, primary-blue
- Percentage: text-4xl, font-bold
```

### Upcoming Session Card
```
┌────────────────────────────────────┐
│ OCT                                │
│ 28   Practice Pitch                │
│      4:00 PM - 4:30 PM            │
│                                    │
│      [Join Now]  Details          │
└────────────────────────────────────┘

Styles:
- Date: text-lg, font-bold, accent-pink
- Title: text-xl, font-semibold
- Time: text-sm, text-muted
- Primary button + text link
```

### Feedback Card (Dark)
```
┌─────────────────────────────────────┐
│ From Jane Doe            2 days ago │
│ Senior Software Engineer            │
│                                     │
│ "Great job on the technical depth!  │
│ The diagrams were super clear..."   │
│                                     │
│ [👍 Praise]  [💡 Suggestion]       │
└─────────────────────────────────────┘

Styles:
- Background: surface-dark
- Text: white
- Badges: colored with opacity backgrounds
- Timestamp: text-sm, opacity-70
```

---

## File Organization

Recommended CSS/Tailwind structure:
```
styles/
├── globals.css          # CSS variables, base styles
├── components/          # Component-specific styles
│   ├── buttons.css
│   ├── cards.css
│   ├── forms.css
│   └── navigation.css
└── utilities.css        # Utility classes
```

---

## Design Principles

1. **Clarity Over Complexity:** Clear, simple layouts that guide users
2. **Progress Visibility:** Always show users where they are and what's next
3. **Encouragement:** Use positive language and celebrate small wins
4. **Community Feel:** Show avatars, user activity, social proof
5. **Low Pressure:** Design feels supportive, not demanding
6. **Tech-Focused:** Visual language resonates with developers

---

## Next Steps

1. Create a Tailwind config file with these design tokens
2. Build a Storybook/component library
3. Create reusable React components following these patterns
4. Document component props and usage
5. Create dark mode variants (future phase)

