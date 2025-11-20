export enum CategoryType {
  ALL = '全部',
  ACADEMIC_SEARCH = '文献检索',
  WRITING_ASSISTANT = '论文写作',
  DATA_ANALYSIS = '数据分析',
  IMAGE_GENERATION = '图像生成',
  CODING = '编程辅助',
  GENERAL_AI = '综合工具',
  TRANSLATION = '翻译润色'
}

export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  category: CategoryType;
  tags: string[];
  imageUrl: string;
  isFeatured?: boolean;
  isNew?: boolean;
}

export type FilterState = {
  search: string;
  category: CategoryType;
  favoritesOnly: boolean;
};