export type Priority = "High" | "Medium";

export type Task = {
  id: string;
  name: string;
  description: string;
  priority: Priority;
};

export const TASKS: Task[] = [
  {
    id: "sword",
    name: "Sword control",
    description: "Practise precise anti-magic sword movements.",
    priority: "High",
  },
  {
    id: "endurance",
    name: "Physical endurance",
    description: "Complete a focused strength and stamina session.",
    priority: "Medium",
  },
  {
    id: "team",
    name: "Team coordination",
    description: "Review a preparation plan with the Black Bulls.",
    priority: "High",
  },
];