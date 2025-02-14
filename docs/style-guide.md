# Databanken Theme

# Style Guidelines for the Computerbank Demo Site "Databanken"

The design of *Databanken* reflects a balance of modern sophistication and reliability, with a strong color palette emphasizing stability, trust, and innovation.

---

## 1. Color Palette

The color scheme is inspired by iconic hues representing resilience, nature, and technology.

| Role         | Color Name          | Hex Code   | Notes |
|-------------|---------------------|------------|-------|
| **Primary**  | Golden Gate Bridge  | `#EF540E`  | Main theme color (buttons, highlights) |
| **Secondary** | Forest Green       | `#1C8D20`  | Accent color (hover effects, links) |
| **Background** | Platinum          | `#E7E1DE`  | Light neutral backdrop |
| **Dark**      | Navy Blue         | `#0F0074`  | Strong contrast for text, headers |
| **Accent**    | Tekhelet          | `#42327D`  | Used for subtle highlights |

---

## 2. Typography

The typography reflects a modern, clean, and legible style, ensuring accessibility and readability.

- **Primary Font:** Open Sans, sans-serif
- **Headers:** Bold and uppercase for emphasis.
- **Body Text:** Regular weight, ensuring clarity.
- **Buttons & Links:** Slightly larger, bold for visibility.

---

## 3. UI Components

### Buttons

- **Primary Buttons:** Background in Golden Gate Bridge (`#EF540E`), text in Platinum (`#E7E1DE`).
- **Secondary Buttons:** Background in Forest Green (`#1C8D20`), text in Platinum (`#E7E1DE`).
- **Hover Effects:** Slight darkening of the background color with a smooth transition.

### Links

- Default: Navy Blue (`#0F0074`)
- Hover: Tekhelet (`#42327D`), underline appears on hover.

### Forms & Inputs

- Borders in Navy Blue (`#0F0074`), focus state changes to Forest Green (`#1C8D20`).
- Placeholder text in a lighter shade of Navy Blue.

---

## 4. Layout & Spacing

- Generous whitespace for a clean, modern look.
- Grid-based structure ensuring responsiveness across devices.
- Consistent padding and margins applied to maintain visual hierarchy.

---

## 5. Iconography

- Icons will follow a minimalist, outlined style.
- Primary icons use Forest Green for action items.
- Alert and warning icons will use Golden Gate Bridge for visibility.

---

## 6. Accessibility

- Contrast ratio maintained for readability.
- Keyboard navigation supported.
- Focus indicators for interactive elements.

---

This guide ensures a cohesive design language for *Databanken*, promoting usability and aesthetic consistency.


# 📖 HTML Headings Style Guide

## 🎯 Overview
This guide establishes **consistent heading styles** for HTML markup to ensure a **clear document structure**, **improved accessibility**, and **maintainable code**.

---

## 🛠 **Heading Hierarchy & Spacing**
Each page should follow a **logical structure** using the correct heading levels (`h1` to `h4`) and Bootstrap spacing classes (`mt-*`, `mb-*`).

| **Heading Level** | **Purpose** | **Bootstrap Classes** |
|------------------|------------|----------------------|
| `h1` | **(Rarely used)** – Page titles (handled in `<title>`) | _(N/A)_ |
| `h2` | Section Titles | `mt-5 mb-3 fw-bold` |
| `h3` | Subsections | `mt-5 mb-3 fw-bold` |
| `h4` | Subsection Details | `mt-4 mb-2 fw-bold` |

✅ **Use `mt-5 mb-3` for major headings (`h2`, `h3`)**  
✅ **Use `mt-4 mb-2` for `h4` subheadings**  
✅ **Avoid skipping heading levels (e.g., `h2` → `h4`)**  
✅ **Ensure headings clearly describe the content below**

---

## 🔤 **Example HTML Markup**
```html
<h2 class="mt-5 mb-3 fw-bold">Volunteer Positions Available</h2>

<h3 class="mt-5 mb-3 fw-bold">Front Desk & Customer Service</h3>
<p class="mb-3">A great way to <strong>gain IT retail experience</strong>!</p>

<h4 class="mt-4 mb-2 fw-bold">Duties</h4>
<ul class="mb-3">
  <li><strong>Assist customers</strong> in-store and over the phone.</li>
  <li><strong>Explain Databanken’s low-cost Linux computers</strong>.</li>
  <li><strong>Help with administrative tasks</strong>.</li>
</ul>

<h4 class="mt-4 mb-2 fw-bold">Volunteer Requirements</h4>
<ul class="mb-4">
  <li><strong>Comfortable using Linux desktops</strong>.</li>
  <li>Willing to <strong>learn Databanken’s custom Linux distribution</strong>.</li>
</ul>
```

---

## ❌ **Common Mistakes to Avoid**
### 🚫 **Inconsistent Spacing**
```html
<h2 class="mt-3 mb-2">Volunteer Positions Available</h2>  <!-- ❌ Use mt-5 mb-3 instead -->
<h3 class="mt-2 mb-1">Technical Support</h3>  <!-- ❌ Use mt-5 mb-3 -->
```
**✅ Fix:**
```html
<h2 class="mt-5 mb-3 fw-bold">Volunteer Positions Available</h2>
<h3 class="mt-5 mb-3 fw-bold">Technical Support</h3>
```

### 🚫 **Skipping Heading Levels**
```html
<h2>Volunteer Positions</h2>
<h4>Technical Support</h4>  <!-- ❌ Should be an h3 -->
```
**✅ Fix:**
```html
<h2 class="mt-5 mb-3 fw-bold">Volunteer Positions</h2>
<h3 class="mt-5 mb-3 fw-bold">Technical Support</h3>
```

---

## ✅ **Best Practices Summary**
1. **Always use `mt-5 mb-3` for `h2` & `h3` headings.**
2. **Use `mt-4 mb-2` for `h4` subheadings.**
3. **Never skip heading levels (`h2` → `h4` is incorrect).**
4. **Ensure each heading describes its content properly.**
5. **Avoid unnecessary heading nesting (only go deeper when needed).**

---

### 🎯 **Final Thoughts**
Following this **HTML heading style guide** will:
- ✅ Improve **readability**.
- ✅ Maintain **consistent formatting**.
- ✅ Ensure **accessibility best practices**.

🚀 **Keep your heading structure clean, readable, and accessible!**



