# Dependencies Guide

This document lists all external and internal dependencies required for the Vemio Dashboard components to work in a new project.

## NPM Packages Required

### Core Dependencies
```json
{
  "flatpickr": "^4.6.13",
  "react": "^19.0.0",
  "react-dom": "^19.0.0"
}
```

### Peer Dependencies (Used but not bundled)
These components expect certain UI components and utilities to exist in the parent project:

- **UI Components Library** (or equivalent)
  - `Badge` - For status indicators
  - `Button` - For actions
  - `Alert` - For notifications
  - `ProgressBar` - For progress visualization
  - `Select` - For dropdown selections

- **Icons Library**
  - The components import various icons from `@/icons`
  - You can replace these with your own icon library

- **Styling**
  - Tailwind CSS (required)
  - Custom theme colors (see below)

## CSS/Styling Dependencies

### Tailwind CSS
The components use Tailwind CSS utility classes. Ensure Tailwind is configured.

### Flatpickr CSS
Import in your global CSS or component:
```css
@import "flatpickr/dist/flatpickr.min.css";
```

### Required Tailwind Theme Colors
Add these to your `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#ecf3ff',
          100: '#dde9ff',
          200: '#c2d6ff',
          300: '#9cb9ff',
          400: '#7592ff',
          500: '#465fff',
          600: '#3641f5',
          700: '#2a31d8',
          800: '#252dae',
          900: '#262e89',
        },
        gray: {
          // ... standard gray scale
        },
        success: {
          // ... green scale for success states
        },
        error: {
          // ... red scale for error states
        },
        warning: {
          // ... yellow/orange scale for warnings
        }
      }
    }
  }
}
```

## Internal Component Dependencies

The Vemio Dashboard components expect these UI components to exist in your project at `@/components/`:

### 1. Badge Component
**Path:** `@/components/ui/badge/Badge`

**Props Interface:**
```typescript
interface BadgeProps {
  children: React.ReactNode;
  color?: "success" | "error" | "warning" | "light" | "default";
  variant?: "solid" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
}
```

### 2. Button Component
**Path:** `@/components/ui/button/Button`

**Props Interface:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}
```

### 3. ProgressBar Component
**Path:** `@/components/progress-bar/ProgressBar`

**Props Interface:**
```typescript
interface ProgressBarProps {
  progress: number; // 0-100
  size?: "sm" | "md" | "lg";
  label?: "none" | "inline" | "bottom";
  color?: "brand" | "success" | "error";
}
```

### 4. Select Component
**Path:** `@/components/form/Select`

**Props Interface:**
```typescript
interface SelectProps {
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  onChange: (value: string) => void;
  defaultValue?: string;
  className?: string;
}
```

## Icon Dependencies

The components use these icons from `@/icons`:
- `AlertIcon`
- `AngleLeftIcon`
- `ArrowUpIcon` (can be removed, no longer used)
- `ArrowDownIcon` (can be removed, no longer used)
- `BoltIcon`
- `BoxIconLine`
- `BoxTapped`
- `CalenderIcon`
- `CheckCircleIcon`
- `CloseIcon`
- `DollarLineIcon`
- `DownloadIcon`
- `InfoIcon`
- `PieChartIcon`
- `TimeIcon`

You can either:
1. Copy your existing icon components
2. Replace with your own icon library (e.g., Heroicons, Lucide, etc.)
3. Use inline SVGs

## File Structure After Moving

After copying to a new project, your structure should look like:

```
src/
├── components/
│   ├── vemio-dashboard/          # ← Copy this entire folder
│   │   ├── README.md
│   │   ├── DEPENDENCIES.md
│   │   ├── index.tsx
│   │   ├── types.ts
│   │   ├── ReabastecimientoLayout.tsx
│   │   ├── DashboardContent.tsx
│   │   ├── OportunidadesContent.tsx
│   │   ├── AnalisisCausasContent.tsx
│   │   ├── NavigationFilters.tsx
│   │   ├── NavigationBreadcrumb.tsx
│   │   ├── CoDisenoModal.tsx
│   │   └── DatePicker.tsx
│   ├── ui/                       # Your UI components library
│   │   ├── badge/
│   │   ├── button/
│   │   └── ...
│   ├── form/
│   │   └── Select.tsx
│   └── progress-bar/
│       └── ProgressBar.tsx
└── icons/                        # Your icons
    └── index.tsx
```

## Quick Start Checklist

- [ ] Install `flatpickr` package
- [ ] Import flatpickr CSS in global styles
- [ ] Ensure Tailwind CSS is configured with required theme colors
- [ ] Verify Badge component exists and matches interface
- [ ] Verify Button component exists and matches interface
- [ ] Verify Select component exists and matches interface
- [ ] Verify ProgressBar component exists and matches interface
- [ ] Ensure all required icons are available
- [ ] Update import paths if your project structure differs
- [ ] Replace mock data with real API calls

## Optional Enhancements

### Data Layer
Consider creating a data context or hooks for:
- Navigation state management
- API data fetching
- Real-time updates

### Styling Customization
- Adjust spacing and sizing via Tailwind classes
- Modify color schemes in types.ts badge colors
- Customize card shadows and borders

### Additional Features
- Add error boundaries
- Implement loading states
- Add data export functionality
- Integrate analytics tracking




