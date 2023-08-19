import { useState } from 'react';
import s from './About.module.scss';
import AboutItem from './AboutItem/AboutItem';
import aboutTab from '../../data/aboutTab';

const About = () => {
	const [activeTab, setActiveTab] = useState('mission');

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<div className="container">
			<div className={s.about}>
				<div className={s.about__tabs}>
					{aboutTab.map((tab) => (
						<button
							key={tab.id}
							className={`${s.about__tab} ${
								activeTab === tab.id ? s.about__active : ''
							}`}
							onClick={() => handleTabChange(tab.id)}
						>
							<img className={s.about__icon} src={tab.tabIcon} />
							{tab.tabName}
						</button>
					))}
				</div>
				<div className={s.about__items}>
					{aboutTab.map(
						(tab) =>
							activeTab === tab.id && <AboutItem key={tab.id} tab={tab} />
					)}
				</div>
			</div>
		</div>
	);
};
export default About;
