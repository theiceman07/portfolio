import { IoTHero } from "@/components/sections/iot/IoTHero";
import { QuickStats } from "@/components/sections/iot/QuickStats";
import { ProjectOverviewCards } from "@/components/sections/iot/ProjectOverviewCards";
import TaskSection from "@/components/sections/iot/TaskSection";
import { DebuggingJourney } from "@/components/sections/iot/DebuggingJourney";
import { ComparisonMatrix } from "@/components/sections/iot/ComparisonMatrix";
import { EngineeringMetrics } from "@/components/sections/iot/EngineeringMetrics";
import { BusinessContext } from "@/components/sections/iot/BusinessContext";
import { FeatureGrid } from "@/components/sections/iot/FeatureGrid";
import { ResourcesFooter } from "@/components/sections/iot/ResourcesFooter";
import { iotContent, quickStats, debuggingJourney, engineeringMetrics, competitors, ctaAudiences } from "@/data/iot-content";
import { task4Content } from "@/data/task4-content";
import { mapProjectOverviewCard, mapTaskData } from "@/utils/mapIoTData";

export const revalidate = 60; // Revalidate every 60 seconds to avoid ISR cache issues

export default function IoTPortfolio() {
  const allTasks = [
    ...iotContent.tasks,
    ...(task4Content.tasks.map(mapTaskData))
  ];

  // We have to conditionally combine since iotContent is missing projectOverview/comparison right now
  const overview = [
    ...(iotContent.projectOverview?.map(mapProjectOverviewCard) || []), 
    ...task4Content.projectOverview.map(mapProjectOverviewCard)
  ];
  const comparison = [...(iotContent.comparison?.aspectsTable || [])];
  const techOutcomes = [...iotContent.outcomes.technical, ...task4Content.outcomes.technical];
  const hwOutcomes = [...iotContent.outcomes.hardware, ...task4Content.outcomes.hardware];
  const sysOutcomes = [...iotContent.outcomes.systems, ...task4Content.outcomes.systems];
  const useCases = [...iotContent.useCases, ...task4Content.useCases];
  const resources = [...(iotContent.resources || []), ...task4Content.resources];

  return (
    <div className="min-h-screen relative z-10 selection:bg-accent/30 selection:text-white">
      <IoTHero />

      <QuickStats stats={quickStats} />

      <ProjectOverviewCards overview={overview} />

      {allTasks.map((task) => (
        <TaskSection key={task.id} task={task} />
      ))}

      <DebuggingJourney problems={debuggingJourney} />

      <ComparisonMatrix data={comparison} />

      <EngineeringMetrics groups={engineeringMetrics} />

      <BusinessContext competitors={competitors} ctas={ctaAudiences} />

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-20">
            <h2 className="text-3xl font-light text-white mb-2">Technical Outcomes</h2>
            <p className="text-gray-400 mb-8">Core skills and protocols mastered</p>
            <FeatureGrid items={techOutcomes} columns={3} />
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-light text-white mb-2">Hardware Outcomes</h2>
            <p className="text-gray-400 mb-8">Electronics and component control</p>
            <FeatureGrid items={hwOutcomes} columns={3} />
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-light text-white mb-2">System Outcomes</h2>
            <p className="text-gray-400 mb-8">Architecture and end-to-end design</p>
            <FeatureGrid items={sysOutcomes} columns={3} />
          </div>
          
          <div>
            <h2 className="text-3xl font-light text-white mb-2">Real-World Use Cases</h2>
            <p className="text-gray-400 mb-8">Where these technologies are applied</p>
            <FeatureGrid items={useCases} columns={2} />
          </div>
        </div>
      </section>
      
      <ResourcesFooter resources={resources} />
    </div>
  );
}
