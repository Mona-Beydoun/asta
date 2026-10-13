# Asta's Preparation Dashboard --- Product Requirements Document

## 1. Overview

**Product name:** Asta's Preparation Dashboard\
**Product type:** Single-page preparation and task-tracking dashboard\
**Technology stack:** Next.js, TypeScript, Tailwind CSS

Asta is a fictional fighter preparing for Lucifero. His training notes
are scattered, so this dashboard gives him one clear place to view his
three preparation tasks, mark tasks complete or incomplete, and see his
overall progress.

## 2. User

The primary user is **Asta**, a fictional fighter preparing for a major
battle against Lucifero.

The dashboard is designed for a single user who wants a quick, simple
overview of training tasks and preparation progress. No account or login
is needed.

## 3. Problem

Asta's training notes are scattered, making it difficult to see which
preparation tasks remain and how much progress he has made. He needs a
simple dashboard that brings his tasks and progress together in one
place.

This problem statement is based on the supplied fictional scenario, not
on user research or product validation.

## 4. Goal

Create a single dashboard that allows Asta to: - See all three
predefined preparation tasks. - Mark each task complete and undo
completion when needed. - Understand overall preparation progress at a
glance.

### Success criteria

The dashboard meets its goal when all three tasks are visible,
completion can be toggled in either direction, the completed-task count
updates correctly, and the percentage and progress bar reflect the
current completion state.

## 5. Core Features

### Feature 1: Predefined training task cards

Display exactly three separate task cards: 1. Sword control 2. Physical
endurance 3. Team coordination

Each card clearly shows its task name, description, priority, and completion state.

### Feature 2: Reversible task completion

Each task card includes a clear control to mark the task complete or
incomplete. Asta can change a task's state at any time. Completing a
task must not prevent him from undoing that completion.

### Feature 3: Calculated preparation progress

Display: - The number of completed tasks out of three. - The preparation
percentage. - A progress bar that visually represents the same
percentage.

Calculate progress from the current task states:

**Preparation progress = (completed tasks / 3) × 100**

Expected values: - 0 completed tasks: 0% - 1 completed task:
approximately 33.3% - 2 completed tasks: approximately 66.7% - 3
completed tasks: 100%

The displayed percentage may be rounded to a whole number. The count,
percentage, and progress bar must stay consistent.

## Sample Data

| Task | Description | Priority |
| --- | --- | --- |
| Sword control | Practise precise anti-magic sword movements. | High |
| Physical endurance | Complete a focused strength and stamina session. | Medium |
| Team coordination | Review a preparation plan with the Black Bulls. | High |

These are fictional teaching examples, not official character statistics.

## 6. User Stories

-   As Asta, I want to see all my preparation tasks in one place so I
    can understand what I need to work on.
-   As Asta, I want to mark a task complete so I can track what I have
    finished.
-   As Asta, I want to undo a task's completion so I can correct my
    progress if necessary.
-   As Asta, I want to see how many tasks I have completed so I can
    quickly understand my progress.
-   As Asta, I want a percentage and progress bar so I can understand my
    overall preparation at a glance.

## 7. Acceptance Criteria

### Task display

-   [ ] The dashboard displays exactly three task cards.
-   [ ] The cards are named "Sword control," "Physical endurance," and
    "Team coordination."
-   [ ] Every task starts incomplete when the dashboard is initialized.
-   [ ] Each card visibly communicates whether its task is complete.
-   [ ] Each card shows its name, description, and priority.

### Completion controls

-   [ ] Each task has a control that changes its state from incomplete
    to complete.
-   [ ] Activating the control again changes the task from complete to
    incomplete.
-   [ ] Changing one task does not accidentally change the state of
    another task.
-   [ ] The completion control is operable using a keyboard and has an
    accessible name.

### Progress calculation

-   [ ] Initially, the completed count is 0 out of 3 and progress is 0%.
-   [ ] Completing one task updates the count to 1 out of 3 and progress
    to approximately 33%.
-   [ ] Completing two tasks updates the count to 2 out of 3 and
    progress to approximately 67%.
-   [ ] Completing all tasks updates the count to 3 out of 3 and
    progress to 100%.
-   [ ] Undoing completion updates the count, percentage, and progress
    bar immediately.
-   [ ] The progress bar's accessible value matches the calculated
    progress.
-   [ ] Progress is calculated from task state rather than maintained as
    a separate, potentially inconsistent value.

### Scope and runtime

-   [ ] The product consists of one dashboard route.
-   [ ] The implementation uses Next.js, TypeScript, and Tailwind CSS.
-   [ ] No login, database, or persistent storage is required.
-   [ ] Refreshing the page may reset all tasks to incomplete.

## 8. Design Requirements

### Visual direction

Use an energetic, anime-inspired style influenced by *Black Clover*. The
interface should feel bold and adventurous while keeping task tracking
easy to understand.

Suggested visual direction: - Dark backgrounds with strong contrast. -
Black and charcoal as the main surfaces. - Green accents inspired by
Asta's visual identity, with restrained red or gold accents if useful. -
Bold headings and clear task names. - Subtle decorative motifs inspired
by fantasy, grimoire pages, or battle preparation, provided they do not
distract from the tasks. - Distinct visual states for incomplete and
completed tasks.

These are design recommendations, not claims about tested user
preferences.

### Layout

-   Keep all essential information on one dashboard page.
-   Place a clear page title and short preparation-focused introduction
    near the top.
-   Show the preparation percentage, progress bar, and completed/total
    count in a clearly identifiable progress area.
-   Display the three tasks as separate cards.
-   Use a responsive layout that works on mobile, tablet, and desktop
    screens.

### Interaction and accessibility

-   Make completion controls visually obvious and easy to activate.
-   Do not communicate task state using color alone; include text, an
    icon, or another clear indicator.
-   Provide readable text contrast, visible keyboard focus, and
    appropriately labeled controls.
-   Use simple, consistent spacing and avoid decorative effects that
    reduce readability.
-   Animate progress changes only if the animation remains subtle and
    does not delay feedback.

## 9. Assumptions

-   Asta is the sole intended user for this fictional dashboard.
-   The three task names are fixed and predefined.
-   All tasks begin incomplete whenever the dashboard state is
    initialized.
-   Every task has equal weight in the preparation calculation.
-   The total number of tasks is always three.
-   Progress is based only on task completion, not on time spent,
    difficulty, or performance.
-   In-memory client-side state is sufficient for this scope.
-   The dashboard does not need to save state between page refreshes.

## 10. Limitations

-   Task state may reset after refreshing the page.
-   There is no account or cross-device synchronization.
-   Users cannot add, remove, rename, reorder, or customize tasks.
-   The progress percentage reflects task completion only; it does not
    measure actual fighting ability or readiness for battle.
-   The product is specified for a fictional scenario and has not been
    validated through user research.

## 11. Out of Scope

The following features must not be included in this version: - Login,
registration, user accounts, or role management. - Database integration
or persistent storage. - Payments, subscriptions, or donations. -
Chatbot or AI assistant. - Combat simulation or battle mechanics. -
Additional routes or pages beyond the single dashboard. - Creating,
editing, deleting, or reordering tasks. - Custom task categories,
deadlines, reminders, or schedules. - Analytics, leaderboards,
achievements, or social features. - Backend APIs or cloud
synchronization.

## 12. Technical Requirements

-   **Next.js:** Build the dashboard within a single route.
-   **TypeScript:** Use typed task data and completion state.
-   **Tailwind CSS:** Implement the layout, responsive behavior, colors,
    and visual states.
-   **State management:** Use straightforward client-side state for task
    completion.
-   **Progress logic:** Derive the completed count and percentage from
    the three task states.
-   **Persistence:** Do not implement database or browser-storage
    persistence.

No application code is included in this document. This PRD defines the
intended product behavior and requirements before implementation.
