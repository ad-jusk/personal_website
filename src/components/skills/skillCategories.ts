import { SkillCategory } from "@utils/types";

export const skillCategories: SkillCategory[] = [
  {
    categoryTranslationKey: "section.skills.programming",
    skills: [
      {
        name: "Java",
        knowledgePercentage: 90,
        skillColor: "red",
        informationType: "tags",
        tags: [
          "Spring",
          "Hibernate",
          "Maven",
          "RxJava",
          "Lombok",
          "MapStruct",
          "Swagger",
          "JavaFX",
          "Future API",
        ],
      },
      {
        name: "JavaScript",
        knowledgePercentage: 90,
        skillColor: "yellow",
        informationType: "tags",
        tags: ["React", "Chakra UI", "d3", "three.js", "axios", "jquery", "RxJs", "npm"],
      },
      {
        name: "Python",
        knowledgePercentage: 75,
        skillColor: "cyan",
        informationType: "tags",
        tags: ["numpy", "pandas", "openCV", "scikit-learn", "pip", "venv"],
      },
      {
        name: "C#",
        knowledgePercentage: 70,
        skillColor: "purple",
        informationType: "tags",
        tags: ["Task API", "LINQ", "Windows Forms"],
      },
      {
        name: "C++",
        knowledgePercentage: 55,
        skillColor: "blue",
        informationType: "tags",
        tags: ["openCV", "GoogleTest"],
      },
    ],
  },
  {
    categoryTranslationKey: "section.skills.tools",
    skills: [
      {
        name: "VS Code",
        knowledgePercentage: 100,
        skillColor: "blue",
        informationType: "text",
        textTranslationKey: "section.skills.vsCode",
      },
      {
        name: "Intellij IDEA",
        knowledgePercentage: 100,
        skillColor: "red",
        informationType: "text",
        textTranslationKey: "section.skills.intellij",
      },
      {
        name: "Git",
        knowledgePercentage: 90,
        skillColor: "red",
        informationType: "text",
        textTranslationKey: "section.skills.git",
      },
      {
        name: "Visual Studio",
        knowledgePercentage: 80,
        skillColor: "purple",
        informationType: "text",
        textTranslationKey: "section.skills.visualStudio",
      },
      {
        name: "Linux",
        knowledgePercentage: 70,
        skillColor: "orange",
        informationType: "text",
        textTranslationKey: "section.skills.linux",
      },
      {
        name: "CMake",
        knowledgePercentage: 50,
        skillColor: "green",
        informationType: "text",
        textTranslationKey: "section.skills.cmake",
      },
      {
        name: "Docker",
        knowledgePercentage: 40,
        skillColor: "blue",
        informationType: "text",
        textTranslationKey: "section.skills.docker",
      },
    ],
  },
  {
    categoryTranslationKey: "section.skills.gamedev",
    skills: [
      {
        name: "Godot",
        knowledgePercentage: 60,
        skillColor: "blue",
        informationType: "text",
        textTranslationKey: "section.skills.godot",
      },
      {
        name: "Unity",
        knowledgePercentage: 45,
        skillColor: "gray",
        informationType: "text",
        textTranslationKey: "section.skills.currentlyLearning",
      },
      {
        name: "Unreal Engine",
        knowledgePercentage: 30,
        skillColor: "gray",
        informationType: "text",
        textTranslationKey: "section.skills.currentlyLearning",
      },
    ],
  },
];
