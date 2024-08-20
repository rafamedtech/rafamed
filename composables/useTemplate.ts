import type { Template } from '@/types/main';

export const useTemplate = async () => {
  const templates: Template[] = templatesData;

  const latestTemplates = computed(() => templates.slice(0, 3));

  return { templates, latestTemplates };
};
