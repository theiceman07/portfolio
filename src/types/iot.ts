export interface TaskData {
  id: string;
  number: string;
  title: string;
  description: string;
  colorVar: string;
  learningObjectives: string[];
  introImage: {
    src: string;
    caption: string;
  };
  hardwareSpecs: {
    title: string;
    description: string;
    image?: string;
    content: string;
  }[];
  wiringDiagram: {
    code: string;
    caption: string;
  };
  gallery: {
    src: string;
    caption: string;
  }[];
  galleryExplanation: string;
  codeBlock: {
    code: string;
    language: string;
    collapsibleSections: {
      title: string;
      content: string;
    }[];
  };
  testingResults: {
    serialOutput: string;
    metrics: { metric: string; value: string; status: string }[];
    videoSrc: string;
    videoCaption: string;
  };
  keyLearnings: {
    title: string;
    points: string[];
  }[];
}

export interface IoTContent {
  tasks: TaskData[];
  projectOverview: ProjectOverviewCardData[];
  comparison: {
    aspectsTable: ComparisonAspectData[];
  };
  outcomes: {
    technical: FeatureItem[];
    hardware: FeatureItem[];
    systems: FeatureItem[];
  };
  useCases: FeatureItem[];
  resources: ResourceLinkData[];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

export interface ProjectOverviewCardData {
  task: string;
  title: string;
  tech: string;
  technology?: string; // task4 uses technology, task 1-3 uses tech
  duration?: string; // task 1-3 uses duration, task4 uses complexity
  complexity?: string;
  color: string;
  icon?: string;
  status?: string;
}

export interface ComparisonAspectData {
  aspect: string;
  task1?: string;
  task2?: string;
  task3?: string;
  section1?: string; // task4 uses section1/2/3 instead of task1/2/3
  section2?: string;
  section3?: string;
}

export interface ResourceLinkData {
  type: string;
  title: string;
  url: string;
}
