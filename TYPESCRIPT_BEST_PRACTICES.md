# TypeScript Best Practices

This document outlines the TypeScript best practices implemented in this project.

## Configuration (`tsconfig.json`)

### Strict Mode
```json
{
  "strict": true,
  "noUnusedLocals": true,
  "noUnusedParameters": true,
  "noImplicitReturns": true,
  "noFallthroughCasesInSwitch": true,
  "forceConsistentCasingInFileNames": true
}
```

**Why?**
- `strict`: Enables all strict type-checking options
- `noUnusedLocals`: Catches unused variables early
- `noUnusedParameters`: Prevents unused function parameters
- `noImplicitReturns`: Ensures all code paths return a value
- `noFallthroughCasesInSwitch`: Prevents fallthrough bugs in switch statements
- `forceConsistentCasingInFileNames`: Ensures import path consistency

## Type Definitions

### 1. **Always Define Interfaces for Complex Objects**

✅ **Good:**
```typescript
interface AnimatedStats {
  confidence: number;
  talks: number;
  members: number;
}

const [stats, setStats] = useState<AnimatedStats>({
  confidence: 0,
  talks: 0,
  members: 0,
});
```

❌ **Bad:**
```typescript
const [stats, setStats] = useState({
  confidence: 0,
  talks: 0,
  members: 0,
});
```

### 2. **Use Specific Union Types Instead of Strings**

✅ **Good:**
```typescript
interface AgendaItem {
  type: "full-group" | "breakout" | "spotlight";
}
```

❌ **Bad:**
```typescript
interface AgendaItem {
  type: string;
}
```

### 3. **Document Interfaces with JSDoc Comments**

✅ **Good:**
```typescript
/**
 * Represents a learning pathway level in the curriculum
 */
export interface Pathway {
  /** Unique identifier for the pathway */
  id: string;
  /** Numeric level (1-5) */
  level: number;
}
```

### 4. **Use `readonly` for Immutable Data**

✅ **Good:**
```typescript
export const pathways: readonly Pathway[] = [...];

interface FeedbackFramework {
  elements: readonly FeedbackElement[];
}
```

### 5. **Avoid `any` Type**

❌ **Bad:**
```typescript
function process(data: any) { ... }
```

✅ **Good:**
```typescript
function process(data: unknown) {
  // Type guard
  if (typeof data === 'object' && data !== null) {
    // Now you can safely use data
  }
}
```

## Component Props

### Always Define Props Interfaces

✅ **Good:**
```typescript
interface PathwayCardProps {
  pathway: Pathway;
}

export default function PathwayCard({ pathway }: PathwayCardProps) {
  return <div>...</div>;
}
```

### Optional Props with Defaults

✅ **Good:**
```typescript
interface SessionAgendaProps {
  accentColor?: string;
  variant?: "light" | "dark";
  showHeader?: boolean;
}

export default function SessionAgenda({
  accentColor = "#3685ff",
  variant = "light",
  showHeader = true,
}: SessionAgendaProps) {
  // Implementation
}
```

## Function Types

### Type Function Parameters and Return Values

✅ **Good:**
```typescript
const animateValue = (
  start: number,
  end: number,
  duration: number,
  setValue: (value: number) => void
): void => {
  // Implementation
};
```

## Async/Await with Next.js

### Type Async Params

✅ **Good:**
```typescript
interface PathwayPageProps {
  params: Promise<{ id: string }>;
}

export default async function PathwayDetailPage({ params }: PathwayPageProps) {
  const { id } = await params;
  // Implementation
}
```

## Type Exports

### Export Types for Reusability

✅ **Good:**
```typescript
// types/curriculum.ts
export interface Pathway { ... }
export interface Challenge { ... }

// components/PathwayCard.tsx
import { Pathway } from "@/lib/types/curriculum";
```

## Const Assertions

### Use `as const` for Literal Types

✅ **Good:**
```typescript
export const config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
} as const;

// Type: { readonly apiUrl: "https://api.example.com"; readonly timeout: 5000 }
```

## Type Guards

### Create Type Guards for Runtime Checks

✅ **Good:**
```typescript
function isPathway(obj: unknown): obj is Pathway {
  return (
    typeof obj === "object" &&
    obj !== null &&
    "id" in obj &&
    "level" in obj &&
    typeof (obj as Pathway).id === "string" &&
    typeof (obj as Pathway).level === "number"
  );
}
```

## Utility Types

### Leverage Built-in Utility Types

```typescript
// Partial - makes all properties optional
type PartialPathway = Partial<Pathway>;

// Pick - selects specific properties
type PathwaySummary = Pick<Pathway, "id" | "title" | "level">;

// Omit - excludes specific properties
type PathwayWithoutChallenges = Omit<Pathway, "challenges">;

// Required - makes all properties required
type RequiredUser = Required<User>;

// Readonly - makes all properties readonly
type ImmutablePathway = Readonly<Pathway>;
```

## Best Practices Summary

1. ✅ Always enable `strict` mode in `tsconfig.json`
2. ✅ Define explicit interfaces for all component props
3. ✅ Use union types for constrained string values
4. ✅ Document types with JSDoc comments
5. ✅ Avoid `any` type; use `unknown` instead
6. ✅ Use `readonly` for immutable data
7. ✅ Export and reuse types across the application
8. ✅ Type all function parameters and return values
9. ✅ Use const assertions (`as const`) for literal types
10. ✅ Leverage TypeScript utility types

## Additional Configuration

### ESLint TypeScript Rules

Ensure your `eslint.config.mjs` includes TypeScript-specific rules:
```javascript
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextTs,
  // ... other config
]);
```

## Resources

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Next.js TypeScript](https://nextjs.org/docs/app/building-your-application/configuring/typescript)

