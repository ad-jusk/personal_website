export type Skill = {
  name: string;
  knowledgePercentage: number;
  skillColor: string;
  informationType: "tags" | "text";
  textTranslationKey?: string;
  tags?: string[];
};

export type SkillCategory = {
  categoryTranslationKey: string;
  categoryIcon: React.ElementType;
  skills: Skill[];
};
