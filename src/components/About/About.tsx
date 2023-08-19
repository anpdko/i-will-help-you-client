import { useState } from 'react';
import s from './About.module.scss';
import AboutItem from './AboutItem/AboutItem';

const About = () => {
	const [activeTab, setActiveTab] = useState('mission');

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<div className="container">
			<div className={s.about}>
				<div className={s.about__buttons}>
					<button
						className={s.about__button}
						onClick={() => handleTabChange('mission')}
					>
						Mission
					</button>
					<button
						className={s.about__button}
						onClick={() => handleTabChange('vision')}
					>
						Vision
					</button>
					<button
						className={s.about__button}
						onClick={() => handleTabChange('objectives')}
					>
						Key Objectives
					</button>
					<button
						className={s.about__button}
						onClick={() => handleTabChange('values')}
					>
						Core Values
					</button>
					<button
						className={s.about__button}
						onClick={() => handleTabChange('impact')}
					>
						Our Impact
					</button>
					<button
						className={s.about__button}
						onClick={() => handleTabChange('journey')}
					>
						Join Our Journey
					</button>
				</div>

				<div className="projects__items">
					{activeTab === 'mission' && (
						<AboutItem
							title="Our Mission"
							description="To stand as a guiding light for the millions of Ukrainians who sought refuge beyond their homeland's borders. We extend unwavering support, providing comprehensive assistance
            to navigate unfamiliar territories, and empowering individuals to rebuild with dignity
            and resilience."
						/>
					)}
					{activeTab === 'vision' && (
						<AboutItem
							title="Our Vision"
							description="A future where every Ukrainian refugee can find solace in the assurance of competent legal aid, where creative expression thrives, where education knows no boundaries, and where opportunities abound for professional growth and fulfillment."
						/>
					)}

					{/* Подумати як зробити список */}
					{activeTab === 'objectives' && (
						<div className="project">
							<h2>Key Objectives</h2>
							<ul>
								<li>Provide comprehensive assistance to Ukrainian refugees.</li>
								<li>
									Empower individuals to rebuild with dignity and resilience.
								</li>
							</ul>
						</div>
					)}

					{activeTab === 'values' && (
						<AboutItem
							title="Core Values"
							description="Compassion, Empowerment, Inclusivity, Collaboration, and Resilience. Guided by these principles, we strive for excellence in all endeavors."
						/>
					)}
					{activeTab === 'impact' && (
						<AboutItem
							title="Our Impact"
							description="[Provide a summary of the impact the foundation has made so far. Include statistics, success stories, and achievements that demonstrate the positive outcomes of your projects and initiatives.]"
						/>
					)}
					{activeTab === 'journey' && (
						<AboutItem
							title="Make a Difference Today!"
							description="Charity Foundation ”I Will Help You” is more than a foundation; it is a community of compassionate individuals who believe in the transformative power of healing. By joining our journey, you become part of a collective force working tirelessly to rebuild shattered lives and restore hope. Through your support, we can offer essential sustenance, education, mental health care, and meaningful opportunities to those who need it most. Together, we heal the wounds of war, mend broken dreams, and illuminate a path of resilience. Embark on this remarkable journey with us and witness the profound impact we can create together."
						/>
					)}
				</div>
			</div>
		</div>
	);
};
export default About;
