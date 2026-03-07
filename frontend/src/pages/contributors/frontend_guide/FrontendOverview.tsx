import React from 'react';
import ReactMarkdown from 'react-markdown';

const markdownContent = `
# Frontend Architecture: Atomic Design

Welcome to the frontend documentation. This guide serves as the source of truth for our design system. We follow the **Atomic Design** methodology to create a consistent, scalable, and maintainable UI.

---

## The Methodology

We break our interface down into five distinct levels. This biological metaphor helps us think about our UI as a coherent system rather than a collection of disparate pages.

### 1. Atoms
**Basic building blocks.**
These are the foundational elements that cannot be broken down further without losing their meaning. They include HTML tags like labels, inputs, and buttons, as well as abstract elements like color palettes and fonts.
*   *Examples:* Buttons, Input fields, Icons, Badges.
*   *Rule:* Atoms should not import other components.

### 2. Molecules
**Groups of atoms functioning together.**
Molecules are relatively simple groups of UI elements functioning together as a unit. For example, a form label, search input, and button can join together to create a search form molecule.
*   *Examples:* Search Form, Profile Card (Image + Name + Title).
*   *Rule:* Molecules do one thing and do it well.

### 3. Organisms
**Complex UI components.**
Organisms are distinct sections of an interface formed by groups of molecules and/or atoms. They form robust, complex, and distinct parts of an interface.
*   *Examples:* Navigation Bar, Footer, Sidebar, Product Grid.
*   *Rule:* Organisms define a distinct section of the layout.

### 4. Templates
**Page-level layout structures.**
Templates consist of groups of organisms generic enough to articulate a page's underlying structure. They are essentially the "skeleton" of a page.
*   *Examples:* \`MainLayout\` (Navbar + Content + Footer), \`AuthLayout\`.
*   *Rule:* Templates handle the positioning of organisms.

---

## Strategy: Building from the Bottom Up

When adding a new feature, follow this workflow to ensure consistency:

1.  **Check Atoms:** Can you use existing buttons, inputs, or typography?
2.  **Compose Molecules:** If you need a reusable component (like a custom card), build it from atoms.
3.  **Assemble Organisms:** Combine molecules to build the main sections of your feature.
4.  **Place in Template:** Finally, put your organisms into a page component.

---

## TypeScript Best Practices

Because our codebase is written in **TypeScript**, follow these rules to maintain a professional, reliable, and clean codebase:

1.  **Explicit Typing:** Always define an \`interface\` for the \`props\` taken by your component.
2.  **Functional Components:** Use the \`React.FC\` (or \`React.FunctionComponent\`) type for all React components.
3.  **Avoid \`any\`:** Avoid using \`any\` wherever possible. If you don't know the exact shape of an object yet, consider using \`unknown\` or typing out the specific fields you intend to access.
4.  **Global vs Local Types:** Shared entity types (like \`User\`, \`Opportunity\`, \`TeamMember\`) should live in \`src/types/index.ts\`, while component-specific shapes (like \`ButtonProps\`) should stay in the file where they are used.

For practical examples on how to implement this in code, see the **[How-To Guide](./how-to)**.
`;

const FrontendOverview: React.FC = () => {
    return (
        <div className="prose prose-blue max-w-none">
            <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </div>
    );
};

export default FrontendOverview;
