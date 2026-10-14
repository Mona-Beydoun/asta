# Design Decisions

## Stitch project
- **Project name:** Asta's Preparation Dashboard
- **Screenshot location:** `docs/evidence/`

## Design direction
A dark, focused dashboard that makes Asta's next task and progress obvious. The look is inspired by the story but readable without knowing the anime.

## Colors
| Use | Color |
| --- | --- |
| Background | Dark charcoal / black |
| Cards | Slightly lighter dark surface |
| Text | Light (warm white) |
| Accent | Yellow (orange in the first version) |

## Typography
- **Headings:** Bold sans-serif, larger than all other text so the hierarchy is clear.
- **Body:** Regular sans-serif for descriptions and status text.
- **Sizes:** Task names are larger than descriptions, and descriptions are large enough to read comfortably on mobile.

## Spacing
Consistent padding inside cards and equal gaps between cards. The layout is a single column on mobile and wider on desktop.

## Dashboard sections (top to bottom)
1. Title and introduction
2. Lucifero threat brief
3. Progress summary (count, percentage, progress bar, plan-completion note)
4. Three task cards (name, description, priority, status text, completion button)

## Refinement
- **Before:** The first version used an orange accent color on the black theme.
- **After:** I changed the accent color from orange to yellow.
- **Why:** I thought yellow was easier to see and more comfortable for the eyes on a dark background. It stands out more clearly against black, which makes the progress, priority and buttons easier to notice.
- **Evidence:** `docs/evidence/stitch-v1-desktop.png`, `stitch-v1-mobile.png`, `stitch-v2-desktop.png`, `stitch-v2-mobile.png`

## Accessibility notes
- Status is shown as text, not by color alone.
- Buttons have clear labels and are large enough to tap.
- Text has strong contrast against the background.