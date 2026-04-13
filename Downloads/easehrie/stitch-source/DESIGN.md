# Design System Documentation: The Fluid Precision Framework

## 1. Overview & Creative North Star: "The Digital Concierge"
This design system is built on the philosophy of **The Digital Concierge**: an experience that feels invisibly supportive, impeccably organized, and prestigiously calm. We are moving away from the "boxy" constraints of traditional SaaS and toward a high-end editorial feel inspired by the technical precision of Linear and the fluid motion of Stripe.

The system rejects the "standard" grid in favor of **Intentional Asymmetry** and **Tonal Depth**. By utilizing wide margins, dramatic typography scales, and overlapping glass layers, we create an interface that feels like a curated workspace rather than a database.

**Key Principles:**
*   **Aero-Elasticity:** Elements should feel like they have physical weight but are suspended in a pressurized, fluid environment.
*   **Invisible Boundaries:** We define space through light and shadow, never through rigid lines.
*   **Editorial Authority:** High-contrast typography weights make every header feel like a statement.

---

## 2. Color & Surface Philosophy
The palette is rooted in a sophisticated Emerald and Gold narrative, executed through Material Design's tonal logic to ensure accessibility without sacrificing the premium "boutique" aesthetic.

### Surface Hierarchy & The "No-Line" Rule
**Explicit Directive:** You are prohibited from using `1px` solid borders to section off content. Boundaries must be established through **Background Color Shifts** or **Tonal Transitions**.

*   **The Layering Principle:** Treat the UI as a series of nested physical layers. 
    *   **Level 0 (Base):** `surface` (#f7f9fb) with the signature soft gradient background.
    *   **Level 1 (Sectioning):** Use `surface-container-low` (#f2f4f6) for large layout blocks.
    *   **Level 2 (Interaction):** Place `surface-container-lowest` (#ffffff) cards on top of Level 1 to create a natural "pop" without a single line of stroke.

### The Glass & Gradient Rule
To achieve the signature "EaseHire" look, floating elements (Modals, Pill Navbars, Dropdowns) must use **Glassmorphism**:
*   **Background:** `surface-container-lowest` at 70% opacity.
*   **Backdrop Blur:** 12px to 20px.
*   **Edge Highlight:** A "Ghost Border" using `outline-variant` (#bbcabf) at 15% opacity.

### Signature Textures
Main CTAs and Hero backgrounds should not be flat. Use a linear gradient:
*   **Direction:** 135deg
*   **Start:** `primary` (#006c49)
*   **End:** `primary-container` (#10b981)

---

## 3. Typography: Editorial Authority
We utilize **Inter** with a specific focus on weight contrast. The hierarchy is designed to guide the eye through "glanceable" layers of information.

*   **Display & Headlines:** Set to **700 or 800 weight**. These are the "anchors." Use `display-lg` (3.5rem) for hero moments to create a sense of scale.
*   **Body Text:** Set to **400 weight** with a generous line-height (1.6+). Use `body-lg` (1rem) for general reading to maintain a premium, spacious feel.
*   **Letter Spacing:** Apply `-0.022em` to headlines (tracking) to tighten the "ink" and give it a professional, printed-press look.

---

## 4. Elevation & Depth
Depth in this system is achieved through **Tonal Layering** and **Ambient Light simulation**.

*   **Ambient Shadows:** For "Floating" states (Active cards, Modals), use extra-diffused shadows.
    *   *Shadow Recipe:* `box-shadow: 0 20px 40px rgba(25, 28, 30, 0.04), 0 10px 10px rgba(25, 28, 30, 0.02);`
    *   *Note:* The shadow color is a tinted version of `on-surface`, never pure black.
*   **Corner Radii:** We embrace extreme softness. 
    *   **Cards:** `xl` (3rem) or `lg` (2rem) for a friendly, modern feel.
    *   **Interactive Elements:** `full` (pill-style) for buttons and navbars.

---

## 5. Components

### Pill-Style Navbar
A floating element centered at the top of the viewport.
*   **Background:** Glassmorphic `surface-container-lowest` (70% opacity).
*   **Radius:** `full`.
*   **Shadow:** Medium Ambient Shadow.
*   **Layout:** Minimalist links in `label-md`, using `secondary` (#855300) for active states.

### Buttons: The "Soft-Touch" Interaction
*   **Primary:** `primary` background, `on-primary` text, `full` radius. On hover, transition to a `primary-container` gradient.
*   **Secondary:** `secondary-fixed` background, `on-secondary-fixed` text. Provides the "Gold" accent without overwhelming the green primary.
*   **Tertiary:** No background. `primary` text. Use for low-emphasis actions.

### Cards & Lists
*   **Strict Rule:** No dividers. Use **Vertical White Space** (from the 1rem/2rem/3rem scale) to separate list items.
*   **Hover State:** Shift background from `surface` to `surface-container-high` (#e6e8ea) to indicate interactivity. Do not use borders.

### Input Fields
*   **Style:** Minimalist. `surface-container-low` background. 
*   **Focus State:** A soft 2px outer glow of `primary_fixed` (#6ffbbe), not a harsh solid line.
*   **Corners:** `md` (1.5rem) to balance the pill buttons.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use the background grid (faint `outline-variant` at 5% opacity) to align elements, but let some elements "break" the grid for visual interest.
*   **Do** prioritize whitespace. If a section feels crowded, double the padding.
*   **Do** use Lucide-style icons with a `1.5px` stroke weight to match the Inter typography.

### Don’t
*   **Don’t** use pure black (#000000) for text. Use `on-surface` (#191c1e) to maintain the "soft-minimalist" tone.
*   **Don’t** use standard `1px` borders. If you feel you need one, use a background color shift instead.
*   **Don’t** use sharp corners. Everything in this system is designed to feel approachable and "human-centric."