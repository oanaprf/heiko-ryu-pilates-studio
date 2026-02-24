# Heiko Ryu Pilates Studio

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Runtime:** React 19
- **Linting:** ESLint with eslint-config-next
- **Formatting:** Prettier with prettier-plugin-tailwindcss

## UI Guidelines

Follow the design principles in [design-principles.md](./design-principles.md) for all UI work.

Key principles to keep in mind:
- Use Tailwind CSS utility classes; define design tokens in the Tailwind config
- Mobile-first responsive design
- WCAG AA accessibility (contrast, keyboard nav, screen reader support)
- 8px base spacing unit — use multiples for all padding/margins
- Consistent border radii: small (4–6px) for inputs/buttons, medium (8–12px) for cards/modals
- Animations should be quick (150–300ms) with ease-in-out easing
- Clean sans-serif typography (e.g., Inter or system-ui)
