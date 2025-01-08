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
  skills: Skill[];
};
