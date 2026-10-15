"use client";

import { useState } from "react";
import { TASKS } from "../lib/tasks";

export default function Dashboard() {
  // Single source of truth: which tasks are complete
  const [done, setDone] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));

  // Derived values, never stored separately
  const total = TASKS.length;
  const completed = TASKS.filter((t) => done[t.id]).length;
  const percent = Math.round((completed / total) * 100);

  return (
    <>
      <section
        aria-labelledby="progress-heading"
        className="mt-6 rounded-xl border border-[#2e323b] bg-[#1a1c22] p-5"
      >
        <h2 id="progress-heading" className="text-xl font-bold">
          Preparation progress
        </h2>

        <p className="mt-3 text-2xl font-bold" aria-live="polite">
          {completed} / {total}{" "}
          <span className="text-base font-normal text-[#d8d3c8]">
            tasks complete
          </span>{" "}
          · {percent}%
        </p>

        <div
          role="progressbar"
          aria-label="Preparation-plan completion"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
          className="mt-3 h-3 w-full overflow-hidden rounded-full bg-[#2e323b]"
        >
          <div
            className="h-full bg-[#facc15] transition-[width] duration-300"
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className="mt-3 text-sm text-[#d8d3c8]">
          Progress measures preparation-plan completion, not a prediction of
          the outcome against Lucifero.
        </p>
      </section>

      <section aria-labelledby="tasks-heading" className="mt-6">
        <h2 id="tasks-heading" className="text-xl font-bold">
          Training tasks
        </h2>

        <ul className="mt-4 grid gap-4 md:grid-cols-3">
          {TASKS.map((task) => {
            const isDone = Boolean(done[task.id]);
            return (
              <li
                key={task.id}
                className={`flex flex-col rounded-xl border p-5 ${
                  isDone
                    ? "border-[#facc15] bg-[#1a1c22]"
                    : "border-[#2e323b] bg-[#1a1c22]"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold">{task.name}</h3>
                  <span className="shrink-0 rounded-full border border-[#facc15] px-2.5 py-0.5 text-xs font-semibold text-[#facc15]">
                    {task.priority} priority
                  </span>
                </div>

                <p className="mt-2 flex-1 text-base text-[#d8d3c8]">
                  {task.description}
                </p>

                <p className="mt-4 font-semibold">
                  <span aria-hidden="true">{isDone ? "✓ " : "○ "}</span>
                  {isDone ? "Complete" : "Incomplete"}
                </p>

                <button
                  type="button"
                  onClick={() => toggle(task.id)}
                  aria-label={
                    isDone
                      ? `Undo completion of ${task.name}`
                      : `Mark ${task.name} complete`
                  }
                  className="mt-3 min-h-12 rounded-lg bg-[#facc15] px-4 py-2 font-bold text-[#121316] hover:bg-[#fde047] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {isDone ? "Undo completion" : "Mark complete"}
                </button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}