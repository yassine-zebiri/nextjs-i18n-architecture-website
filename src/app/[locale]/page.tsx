import { ContactUsSectionComponent } from "@/src/components/parts/contactUsSection";
import { HeroSectionComponent } from "@/src/components/parts/hero"
import { NumberSectionComponent } from "@/src/components/parts/NumberSection"
import { ProjectSectionComponent } from "@/src/components/parts/ProjectsSection";
import { ServicesSetionComponent } from "@/src/components/parts/servicesSetcion"

export default async function Home() {

  return (
    <div>
      <div > 
        <div>
          <HeroSectionComponent/>
        </div>
        
        <div>
          <ServicesSetionComponent/>
        </div>
        <div>
          <NumberSectionComponent/>
        </div>
        <div>
          <ProjectSectionComponent/>
        </div>
        <div>
          <ContactUsSectionComponent/>
        </div>
        
      </div>
      <h1>fff</h1>
    </div>
  );
}
