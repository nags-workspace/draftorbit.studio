// assets/js/blog-data.js
// This is your blog's "database".
// Add new blog post objects to this array to grow your blog.

const blogData = [
    {
        slug: 'choosing-the-right-filament', // URL-friendly identifier
        title: 'Choosing the Right Filament for Your Project',
        author: 'The DraftOrbit Team',
        date: 'September 15, 2025',
        imageUrl: 'https://via.placeholder.com/800x400.png?text=Filament+Types',
        excerpt: 'A deep dive into the properties and best uses for common 3D printing materials like PLA, PETG, and ABS.',
        content: `
![Filament Spools](https://via.placeholder.com/800x400.png?text=Filament+Types)

Choosing the right material is one of the most critical decisions in 3D printing. The filament you select determines the strength, durability, flexibility, and appearance of your final part. Let's break down the most common materials we offer at DraftOrbit Studio.

### PLA (Polylactic Acid)
PLA is the go-to filament for most general-purpose 3D printing, and for good reason. It's easy to print, comes in a vast array of colors, and is derived from renewable resources like corn starch, making it biodegradable under industrial composting conditions.

*   **Pros:** Easy to print with, low warping, good detail, wide color selection, eco-friendly.
*   **Cons:** Lower heat resistance (can deform in a hot car), more brittle than other materials.
*   **Best For:** Detailed models, cosmetic prototypes, and objects that won't be exposed to high stress or temperatures.

### PETG (Polyethylene Terephthalate Glycol)
PETG is a fantastic all-around filament that offers a great balance of strength, durability, and ease of printing. It's the same type of plastic used to make water bottles. It's more durable and heat-resistant than PLA.

*   **Pros:** Strong and durable, good heat resistance, food-safe (check manufacturer specs), low shrinkage.
*   **Cons:** Can be "stringy" if not printed with optimized settings, can be difficult to glue.
*   **Best For:** Functional parts, mechanical components, protective casings, and items that need to withstand some impact.

### ABS (Acrylonitrile Butadiene Styrene)
ABS is a strong, durable engineering plastic known for its toughness and high-temperature resistance. It's the same material LEGO bricks are made from. Printing with ABS can be more challenging as it requires a heated bed and often an enclosure to prevent warping.

*   **Pros:** Very strong and tough, high heat resistance, can be smoothed with acetone vapor.
*   **Cons:** Prone to warping without a heated bed/enclosure, emits fumes during printing.
*   **Best For:** Durable parts that need to withstand high temperatures and mechanical stress, like car parts or tool handles.

Choosing the right filament is a key step to a successful project. If you're ever unsure, feel free to [contact us](contact.html) to discuss your specific needs!
        `
    },
    {
        slug: '5-tips-for-better-designs',
        title: '5 Tips for Better 3D Printable Designs',
        author: 'The DraftOrbit Team',
        date: 'September 18, 2025',
        imageUrl: 'https://via.placeholder.com/800x400.png?text=CAD+Design+Tips',
        excerpt: 'Optimize your CAD models for stronger, cleaner prints with these essential design considerations.',
        content: `
![CAD Model on Screen](https://via.placeholder.com/800x400.png?text=CAD+Design+Tips)

A great 3D print starts with a great 3D model. While modern printers are incredibly capable, designing with the printing process in mind can dramatically improve the quality, strength, and success rate of your parts. Here are five essential tips for creating better 3D-printable designs.

### 1. Mind Your Overhangs (The 45-Degree Rule)
FDM 3D printers build objects layer by layer. Each new layer must be supported by the one beneath it. If a layer extends too far out—an "overhang"—it can droop or fail. As a general rule, try to keep overhangs less than 45 degrees from the vertical. For steeper angles, you'll need to add support structures.

### 2. Wall Thickness Matters
Walls that are too thin may not print correctly or will be extremely fragile. A good rule of thumb is to ensure your walls are at least twice the nozzle diameter of the printer. For a standard 0.4mm nozzle, this means a minimum wall thickness of 0.8mm, though 1.2mm or 1.6mm is often better for strength.

### 3. Avoid Sharp Corners on the Z-Axis
Sharp corners on the bottom of your model (the part touching the build plate) can be prone to lifting and warping, especially with materials like ABS. Adding a small fillet or chamfer to these edges can help relieve stress and improve bed adhesion.

### 4. Know Your Tolerances
When designing parts that need to fit together, you must account for tolerances. A peg designed to be exactly 10mm in diameter will not fit into a 10mm hole due to slight material expansion and printing inaccuracies. A typical tolerance for FDM printing is around 0.2mm to 0.3mm, so you might design the hole to be 10.3mm for a snug fit.

### 5. Optimize Print Orientation
The orientation of your model on the build plate has a massive impact on its strength. Because parts are built in layers, they are weakest along these layer lines. If you're printing a structural part like a bracket, orient it so that the forces are applied across the layers, not in a way that would split them apart.

By keeping these tips in mind during the design phase, you'll save time, material, and frustration, resulting in higher-quality prints every time.
        `
    }
];