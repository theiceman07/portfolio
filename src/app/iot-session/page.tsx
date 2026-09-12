import { IoTHero } from "@/components/sections/iot/IoTHero";
import { ProjectOverviewCards } from "@/components/sections/iot/ProjectOverviewCards";
import { ComparisonMatrix } from "@/components/sections/iot/ComparisonMatrix";
import { FeatureGrid } from "@/components/sections/iot/FeatureGrid";
import { ResourcesFooter } from "@/components/sections/iot/ResourcesFooter";
import { iotContent } from "@/data/iot-content";
import dynamic from 'next/dynamic';

const TaskSection = dynamic(() => import('@/components/sections/iot/TaskSection'), {
  loading: () => (
    <div className="py-32 flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
});

export default function IoTPortfolio() {
  return (
    <div className="min-h-screen bg-black overflow-hidden selection:bg-accent/30 selection:text-white">
      <IoTHero />
      <ProjectOverviewCards />

      {iotContent.tasks.map((task) => (
        <TaskSection key={task.id} task={task} />
      ))}
      
      <ComparisonMatrix />
      
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-20">
            <h2 className="text-3xl font-light text-white mb-2">Technical Outcomes</h2>
            <p className="text-gray-400 mb-8">Core skills and protocols mastered</p>
            <FeatureGrid items={iotContent.outcomes.technical} columns={3} />
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-light text-white mb-2">Hardware Outcomes</h2>
            <p className="text-gray-400 mb-8">Electronics and component control</p>
            <FeatureGrid items={iotContent.outcomes.hardware} columns={3} />
          </div>
          
          <div className="mb-20">
            <h2 className="text-3xl font-light text-white mb-2">System Outcomes</h2>
            <p className="text-gray-400 mb-8">Architecture and end-to-end design</p>
            <FeatureGrid items={iotContent.outcomes.systems} columns={3} />
          </div>
          
          <div>
            <h2 className="text-3xl font-light text-white mb-2">Real-World Use Cases</h2>
            <p className="text-gray-400 mb-8">Where these technologies are applied</p>
            <FeatureGrid items={iotContent.useCases} columns={2} />
          </div>
        </div>
      </section>
      
      <ResourcesFooter />
    </div>
  );
}
