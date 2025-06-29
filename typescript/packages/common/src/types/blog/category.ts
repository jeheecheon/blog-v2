export enum PostCategory {
  ABOUT_ME = "About Me",
  ALGORITHM = "Algorithm",
  PRIVACY_POLICY = "Privacy Policy",
  PROJECTS = "Projects",
  UNCATEGORIZED = "Uncategorized",
  WEB_DEVELOPMENT = "Web-Development",
}

export type Category = {
  id: string;
  name: string;
  parentCategory?: Category;
};
