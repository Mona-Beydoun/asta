# Review & Reflection

## PRD Review

### Correction 1: Task details were missing

**What the AI wrote:**
"Each card clearly shows its task name and completion state."
The AI only listed the task names and did not include a description or priority for each task.

**What I changed it to:**
"Each card clearly shows its task name, description, priority, and completion state."
I also added a Sample Data table with the description and priority of each task, and a new acceptance criterion: "Each card shows its name, description, and priority."

**Why I changed it:**
The assignment gives every task a description and a priority, and the MVP checklist says they must appear on the dashboard. If I had left the PRD as the AI wrote it, the app built from it would be missing required information.

## 2. Verification Results

**Lint:** `npm run lint` ran with no errors.
**Build:** `npm run build` completed successfully.

I tested the app manually against the PRD acceptance criteria.

| Check | Result |
| --- | --- |
| Loads at 0 / 3 and 0% | Passed |
| 1, 2 and 3 tasks complete: 33%, 67%, 100% | Passed |
| Undo updates count, percentage and bar | Passed |
| Repeated clicks on one task | Passed, no double counting |
| Keyboard use and visible focus | Passed, Tab reaches each button and Enter or Space toggles it |
| Readable at about 360px | Passed, no sideways scrolling |
| Refresh resets progress | Passed, returns to 0 / 3 and 0% |

**Not verified:** I did not test other browsers or screen readers.

## 3. Pilot Feedback

I asked my sister to use the app without my help.

- **Finding the tasks:** She found the three training tasks easily.
- **Completing a task:** She completed tasks without any trouble.
- **What she understood about the percentage:** She understood what the progress showed.
- **What confused her:** Nothing. She understood everything.
- **Improvement:** Nothing needed fixing after her test. If I continued the project, I would let progress be saved after a refresh, because it currently resets to 0 / 3. I left it out because the PRD excludes persistence.

This was one informal test with one person. It gives useful feedback but does not show market demand.

## 4. Reflection Questions

**How did your PRD prevent an unnecessary feature?**
The PRD listed exactly three features and an explicit out-of-scope list (login, database, chat, extra pages, task editing). While building, I only added what was listed, so I did not add saving progress or editing tasks.

**What did the POC test, and what did it not prove?**
It tested that completing, undoing and repeatedly toggling tasks keeps the count and percentage consistent. It did not prove that anyone wants the product or that the design is easy to use.

**Why is this MVP useful even though it is small?**
Asta can see his three tasks, mark them complete or undo them, and see how much of his plan is done. That solves the core problem from the scenario on one screen.

**What did MCP allow your agent to do, or how did your fallback work?**
MCP let the agent call Stitch tools directly, such as listing projects and getting screens, and retrieve my project's screens and design system. I did not have to hand it screenshots. It did not give the agent the app's behaviour. That came from the PRD.

**Which AI-generated decision did you correct?**
The AI's PRD gave each task only a name. I added descriptions, priorities and a Sample Data table because the assignment requires them on screen.

**Explain the task state and progress calculation.**
The app stores one thing: which tasks are complete, as an object keyed by task id. Clicking a button flips that task's value. The count is the number of tasks that are true, and the percentage is `Math.round(completed / 3 * 100)`. Both are calculated on every render, so they cannot disagree with the task states.

**If agents can generate code, what decisions and checks were still your responsibility?**
Deciding the scope, reviewing and correcting the PRD, choosing the design change, checking that the MCP call really happened, testing each acceptance criterion, running lint and build, collecting feedback from a real person, and keeping credentials out of the repo.