export const API_URL = "https://api.fake-rest.refine.dev";
import { Subject } from "@/types";


// Mock subjects data
export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "CS",
    description: "Fundamentals of programming, algorithms, and data structures for beginners.",
    createdAt: "2024-01-15T10:30:00Z",
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Math",
    description: "Advanced calculus covering integration, series, and applications of derivatives.",
    createdAt: "2024-02-20T14:45:00Z",
  },
  {
    id: 3,
    code: "PHYS150",
    name: "Physics I: Mechanics",
    department: "English",
    description: "Classical mechanics including motion, forces, energy, and momentum.",
    createdAt: "2024-03-10T09:15:00Z",
  },
];