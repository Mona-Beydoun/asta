"use client";

import { useState } from "react";

type Task = { id: string; name: string };

const TASKS: Task[] = [
  { id: "sword", name: "Sword control" },
  { id: "endurance", name: "Physical endurance" },
  { id: "team", name: "Team coordination" },
];

export default function ProgressPoc() {
  // Single source of truth: which tasks are complete
  const [done, setDone] = useState<Record<string, boolean>>({});

  const toggle = (id: string) =>
    setDone((prev) => ({ ...prev, [id]: !prev[id] }));

  // Derived values: never stored separately
  const completed = TASKS.filter((t) => done[t.id]).length;
  const total = TASKS.length;
  const percent = Math.round((completed / total) * 100);

  return (
    <main style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>POC: progress consistency</h1>

      <p>
        <strong data-testid="count">
          {completed} / {total}
        </strong>{" "}
        completed ·{" "}
        <strong data-testid="percent">{percent}%</strong>
      </p>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {TASKS.map((t) => (
          <li key={t.id} style={{ margin: "12px 0" }}>
            {t.name}:{" "}
            <em>{done[t.id] ? "Complete" : "Incomplete"}</em>{" "}
            <button onClick={() => toggle(t.id)}>
              {done[t.id] ? "Undo completion" : "Mark complete"}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}