# PRD: Asta's Preparation Dashboard
# PRD: Asta's Preparation Dashboard

> Status: Reviewed draft · Version 1.0 · Fictional scenario, not validated with real users

## 1. Summary

**Product name:** Asta's Preparation Dashboard
**Product type:** Single-page training-plan tracker
**Stack:** Next.js, TypeScript, Tailwind CSS

Asta is a fictional fighter preparing for Lucifero. His training notes are scattered, so this dashboard gives him one place to view three preparation tasks, mark them complete or incomplete, and see how much of his plan is done.

## 2. User and Problem

**Primary user:** Asta, a member of the Black Bulls Magic Knights. He is the only intended user. No account or login is needed.

**Problem:** Asta's training tasks are scattered across notes. He forgets what he has completed and cannot quickly see his progress.

This problem statement comes from the supplied fictional scenario. It is not based on user research or product validation.

## 3. Goal of Version 1

Let Asta see his three training tasks, mark each one complete or undo it, and see his plan-completion progress at a glance.

**Success:** All three tasks are visible, completion can be toggled in both directions, and the count, percentage and progress bar always match the current task states.

## 4. Core Features (exactly three)

### 4.1 View training tasks

The dashboard shows three task cards in a fixed order. Each card shows the task's **name, description, priority and completion status**. All tasks start incomplete.

### 4.2 Toggle completion

Each card has a control to mark the task complete and to undo that completion. Changing one task never changes another. Asta can change a task's state at any time.

### 4.3 See calculated progress

A progress area shows:

- the completed / total count (for example, 1 / 3),
- the percentage, rounded to the nearest whole number,
- a progress bar showing the same percentage.

Formula: `progress = (completed tasks / 3) × 100`

The progress area states that the percentage measures **preparation-plan completion**, not a prediction of the outcome against Lucifero.

## 5. User Stories

- As Asta, I want to see all my training tasks in one place so that I know what I need to work on.
- As Asta, I want to mark a task complete so that I can track what I have finished.
- As Asta, I want to undo a completion so that I can correct my progress.
- As Asta, I want to see how many tasks I have completed so that I understand my progress quickly.
- As Asta, I want a percentage and progress bar so that I can see my overall plan status at a glance.

## 6. Sample Data

| Task | Description | Priority | Initial state |
| --- | --- | --- | --- |
| Sword control | Practise precise anti-magic sword movements. | High | Incomplete |
| Physical endurance | Complete a focused strength and stamina session. | Medium | Incomplete |
| Team coordination | Review a preparation plan with the Black Bulls. | High | Incomplete |

These are fictional teaching examples, not official character statistics.

## 7. Expected Behaviour

| Action | Expected result |
| --- | --- |
| Page loads | 0 / 3 and 0%, all tasks incomplete |
| Complete one task | 1 / 3 and 33% |
| Complete a second task | 2 / 3 and 67% |
| Complete all three tasks | 3 / 3 and 100% |
| Undo one completed task | Count and percentage decrease to match |
| Toggle the same task repeatedly | Count stays between 0 and 3 and matches the current task states |
| Refresh the page | All tasks reset to incomplete (0 / 3, 0%) |

## 8. Acceptance Criteria

### Task display

- [ ] The dashboard displays exactly three task cards, in this order: Sword control, Physical endurance, Team coordination.
- [ ] Each card shows its name, description and priority.
- [ ] Every task starts incomplete.
- [ ] Each card shows the text "Complete" or "Incomplete" (status is not shown by color alone).

### Completion controls

- [ ] Each task has a control that changes it from incomplete to complete.
- [ ] Activating the control again changes it from complete to incomplete.
- [ ] Changing one task does not change any other task.
- [ ] Clicking the same task repeatedly never counts it twice.
- [ ] Each control works with the keyboard, has an accessible name, and has a visible focus indicator.

### Progress

- [ ] On load, the dashboard shows 0 / 3 and 0%.
- [ ] With one task complete, it shows 1 / 3 and 33%.
- [ ] With two tasks complete, it shows 2 / 3 and 67%.
- [ ] With three tasks complete, it shows 3 / 3 and 100%.
- [ ] Undoing a completion updates the count, percentage and progress bar immediately.
- [ ] Progress is never below 0% or above 100%.
- [ ] The progress bar's accessible value matches the calculated percentage.
- [ ] Count and percentage are derived from task state, not stored as separate values.
- [ ] The progress area states that the percentage measures preparation-plan completion, not a prediction of the outcome.

### Page content, layout and scope

- [ ] The page shows a title, a short introduction to Asta's goal, and a compact Lucifero threat brief (static text only).
- [ ] The layout is readable at about 360px wide and on desktop.
- [ ] There are no decorative buttons that pretend to perform an action.
- [ ] The product has one dashboard route only.
- [ ] Refreshing the page resets all tasks to incomplete.
- [ ] The implementation uses Next.js, TypeScript and Tailwind CSS.
- [ ] The repository contains no credentials.

## 9. Design and Accessibility Requirements

### Visual direction (recommendation, not tested user preference)

- Dark charcoal surfaces with strong contrast and a warm off-white text color.
- A restrained accent color (green or red) for progress and completed states.
- Bold headings and clear task names.
- Distinct visual states for incomplete and completed tasks.
- Any decorative motif must not reduce readability.

### Layout

- All essential information is on one page.
- Order from top: title and introduction, Lucifero threat brief, progress area, task cards.
- Responsive layout for mobile, tablet and desktop.

### Accessibility

- Body text meets WCAG AA contrast (4.5:1).
- Do not communicate state by color alone. Use text or an icon as well.
- Controls are large enough to tap easily and have clear labels.
- Keyboard focus is clearly visible.
- Progress animation, if any, is subtle and never delays feedback.

## 10. Stack, Assumptions and Limitations

### Stack

- **Next.js:** one route.
- **TypeScript:** typed task data and completion state.
- **Tailwind CSS:** layout, responsiveness, colors and states.
- **State:** simple client-side state in a small Client Component. Store which tasks are complete and derive the count and percentage.

### Assumptions

- Asta is the only user.
- The three tasks are fixed and predefined, and the total is always three.
- Every task has equal weight.
- Progress depends only on completion, not on time, difficulty or performance.
- In-memory state is enough for this scope.

### Limitations

- Progress resets on refresh. This is also stated in the README.
- There is no account or cross-device sync.
- Tasks cannot be added, edited, deleted or reordered.
- The percentage measures plan completion only. It does not measure fighting ability or readiness for battle.
- The scenario is fictional and has not been validated through user research.

## 11. Out of Scope

- Login, registration, accounts or roles.
- Database, browser storage or any persistence.
- Payments, subscriptions or donations.
- Chatbot or AI assistant inside the product.
- Combat simulation or battle mechanics.
- Extra routes or pages.
- Adding, editing, deleting or reordering tasks.
- Custom categories, deadlines, reminders or schedules.
- Analytics, leaderboards, achievements or social features.
- Backend APIs, cloud sync or live anime data.
- Multiplayer features.