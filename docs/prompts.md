# 📖 Reusable Prompt for Reviewing Handlebars Templates

## 🎯 Purpose
Use this prompt to ensure **UK spelling, grammar, and readability** consistency in Handlebars templates.

---

## ✅ **Reusable Prompt**
```
Review this Handlebars template for:
✔ **UK spelling consistency** (e.g., "organisation" instead of "organization")
✔ **Grammar correctness** (sentence structure, punctuation)
✔ **Logical clarity** (concise, natural phrasing)
✔ **Bootstrap spacing** (consistent `mt-*` / `mb-*` classes)
✔ **Avoiding redundant or unclear phrasing**

### **Deliverables:**
1️⃣ **List of key corrections** with explanations  
2️⃣ **Corrected and enhanced Handlebars template** (fully formatted)  
3️⃣ **Concise summary of fixes**  

---
### **Example Use:**
```
Review this Handlebars template for UK spelling, grammar, and readability improvements:

```
{{#> layouts/simple }}

  {{> navbar}}

  {{#> hero title='<span class="fw-bold text-primary">Shop</span> In-Store'}}
    <p class="lead mb-4">
      <span class="fw-semibold">{{siteMetadata.name}}</span> is committed to the environmentally-friendly recycling of e-waste.
      However, due to logistical constraints, we cannot accept all donations. Please see below for more details.
    </p>
  {{/hero}}

  <section class="container py-1">

    <!-- Desktops -->
    <h2 class="mt-5 mb-3 fw-bold">Desktops</h2>

    <p class="mb-3">
      A valid concession card is required to access the concession price. Without one, desktops are available at the standard retail price.
    </p>

    {{#if stock.length}}
      <div class="row">
        {{#each stock}}
          {{> stock-item}}
        {{/each}}
      </div>
    {{else}}
      <p class="text-muted">No stock available at the moment.</p>
    {{/if}}

  </section>

{{/layouts/simple}}
```
```

---

## 🔹 **How to Use This Prompt**
1. **Copy & paste** the prompt whenever you need a **Handlebars template review**.  
2. **Replace the example template** with your actual code.  
3. **Receive a formatted response** with proper UK spelling, grammar, and structure.  

📌 **Now ready for your notes!** 🚀 Let me know if you'd like any refinements. 🎯