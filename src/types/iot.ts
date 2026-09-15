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
    image?: string;
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
  componentsGallery?: HardwareComponentData[];
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
  achievement?: string;
  latency?: string;
  linesOfCode?: string;
  keyChallenge?: string;
  whyItMatters?: string;
}

export interface QuickStatData {
  label: string;
  value: string;
  icon: string;
}

export interface DebugProblemData {
  emoji: string;
  title: string;
  timeSpent: string;
  severity: 'HIGH' | 'MEDIUM' | 'LOW';
  whatHappened: string;
  howFixed: string;
  code?: string;
  learning: string;
}

export interface MetricGroupData {
  title: string;
  icon: string;
  rows: { label: string; value: string }[];
}

export interface CompetitorData {
  name: string;
  price: string;
  note: string;
}

export interface CTAAudienceData {
  audience: string;
  message: string;
}

export interface ComparisonAspectData {
  aspect: string;
  task1?: string;
  task2?: string;
  task3?: string;
  task4?: string;
  section1?: string; // task4 uses section1/2/3 instead of task1/2/3
  section2?: string;
  section3?: string;
  section4?: string;
}

export interface ResourceLinkData {
  type: string;
  title: string;
  url: string;
}

export interface ComponentPhoto {
  type: 'product' | 'pinout' | 'diagram' | 'closeup' | 'assembled';
  imageUrl: string;
  caption: string;
  altText: string;
}

export interface ComponentPin {
  pinNumber: string;
  name: string;
  function: string;
  voltage?: string;
  notes?: string;
}

export interface HardwareComponentData {
  name: string;
  category: string;
  manufacturer: string;
  model?: string;
  photos: ComponentPhoto[];
  specifications: { label: string; value: string }[];
  pins?: ComponentPin[];
  usageContext: string;
  datasheetUrl?: string;
  purchaseUrl?: string;
}
