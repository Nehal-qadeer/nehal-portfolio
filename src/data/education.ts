export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  grade: string;
  focus: string;
}

export const education: EducationEntry[] = [
  {
    degree: "M.Sc. Applied Computer Science",
    school: "SRH Hochschule Heidelberg",
    period: "2023 — 2025",
    grade: "2.2",
    focus: "Distributed systems, software engineering, cloud architectures"
  },
  {
    degree: "B.Sc. Computer Science",
    school: "IQRA University",
    period: "2015 — 2019",
    grade: "2.65",
    focus: "Algorithms, data structures, OOP, database systems"
  }
];
