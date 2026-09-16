import { TaskData, ProjectOverviewCardData } from '@/types/iot';

export function mapProjectOverviewCard(data: any): ProjectOverviewCardData {
  return {
    task: data.task,
    title: data.title,
    tech: data.technology || data.tech,
    duration: data.complexity || data.duration,
    complexity: data.complexity,
    technology: data.technology,
    color: data.color,
    icon: data.icon,
    status: data.status
  };
}

export function mapTaskData(data: any): TaskData {
  const getSectionLabel = (id: string | number) => {
    const numId = Number(id);
    if (numId <= 3) return `TASK 0${numId}`;
    if (numId === 4) return 'TASK 04';
    if (numId === 5) return 'TASK 05';
    return `TASK ${numId}`;
  };

  return {
    id: String(data.id),
    number: data.number || getSectionLabel(data.id),
    title: data.title,
    description: data.intro?.description || data.description || '',
    colorVar: data.colorVar || data.gradient || 'var(--accent)',
    learningObjectives: data.intro?.learningObjectives || data.learningObjectives || [],
    introImage: data.introImage || { 
      src: data.images?.photos?.[0]?.src || '', 
      caption: data.images?.photos?.[0]?.caption || '' 
    },
    hardwareSpecs: (data.components || data.hardwareSpecs || []).map((c: any) => ({
      title: c.name || c.title,
      description: c.description || "Specifications",
      image: c.image,
      content: c.content || c.specs?.map((s: any) => `- ${s.label}: ${s.value}`).join('\n') || ''
    })),
    wiringDiagram: typeof data.wiringDiagram === 'string' 
      ? { code: data.wiringDiagram, caption: "Wiring Diagram" }
      : data.wiringDiagram || { code: '', caption: '' },
    gallery: data.images?.photos || data.gallery || [],
    galleryExplanation: data.galleryExplanation || "Implementation photos and hardware demonstration.",
    codeBlock: data.codeBlock || {
      language: data.code?.language || 'typescript',
      code: data.code?.snippet || '',
      collapsibleSections: data.code?.explanations?.map((e: any) => ({
        title: e.section,
        content: e.content
      })) || []
    },
    testingResults: {
      serialOutput: data.testingResults?.serialOutput || '',
      metrics: data.testingResults?.metrics || [],
      videoSrc: data.testingResults?.videoSrc || data.images?.video || '',
      videoCaption: data.testingResults?.videoCaption || data.images?.videoCaption || ''
    },
    keyLearnings: (data.learnings || data.keyLearnings || []).map((l: any) => ({
      title: l.title,
      points: l.points || [l.description]
    })),
    componentsGallery: data.componentsGallery || undefined
  };
}
