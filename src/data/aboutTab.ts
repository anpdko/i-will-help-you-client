
export interface ITabName{
   id: string;
   tabName: string;
   title: string;
   link: string;
   description: string;
}

const aboutTab:ITabName[] = [
   {
      id: "mission",
      tabName: "Mission",
      title: "Our Mission",
      link: "#",
      description:"To stand as a guiding light for the millions of Ukrainians who sought refuge beyond their homeland's borders. We extend unwavering support, providing comprehensive assistance to navigate unfamiliar territories, and empowering individuals to rebuild with dignity and resilience."
   },
   {
      id: "vision",
      tabName: "Vision",
      title: "Our Vision",
      link: "#",
      description:"A future where every Ukrainian refugee can find solace in the assurance of competent legal aid, where creative expression thrives, where education knows no boundaries, and where opportunities abound for professional growth and fulfillment."
   },
   {
      id: "objectives",
      tabName: "Key Objectives",
      title: "Key Objectives",
      link: "#",
      description:`1. Provide comprehensive assistance to Ukrainian refugees. 
      2. Empower individuals to rebuild with dignity and resilience.`
   },
   {
      id: "values",
      tabName: "Core Values",
      title: "Core Values",
      link: "#",
      description:"Compassion, Empowerment, Inclusivity, Collaboration, and Resilience. Guided by these principles, we strive for excellence in all endeavors."
   },
   {
      id: "impact",
      tabName: "Our Impact",
      title: "Our Impact",
      link: "#",
      description:"[Provide a summary of the impact the foundation has made so far. Include statistics, success stories, and achievements that demonstrate the positive outcomes of your projects and initiatives.]"
   },
   {
      id: "journey",
      tabName: "Join Our Journey",
      title: "Make a Difference Today!",
      link: "#",
      description:"Charity Foundation ”I Will Help You” is more than a foundation; it is a community of compassionate individuals who believe in the transformative power of healing. By joining our journey, you become part of a collective force working tirelessly to rebuild shattered lives and restore hope. Through your support, we can offer essential sustenance, education, mental health care, and meaningful opportunities to those who need it most. Together, we heal the wounds of war, mend broken dreams, and illuminate a path of resilience. Embark on this remarkable journey with us and witness the profound impact we can create together."
   }
]

export default aboutTab