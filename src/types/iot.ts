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
  outcomes: {
    technical: FeatureItem[];
    hardware: FeatureItem[];
    systems: FeatureItem[];
  };
  useCases: FeatureItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}
