import React from 'react';
import { motion } from 'framer-motion';

type ServiceCardProps = {
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-lightPink/30 max-w-xs rounded-full p-12 shadow-md m-4"
    >
      <h3 className="text-md text-darkGreen bg-white p-3 rounded-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-900 bg-white p-3 rounded-2xl rounded-tr">{description}</p>
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const services = [
    {
      title: 'Understand your talent',
      description: 'Get an objective pulse on your workforce through our granular skills ontology and AI-powered measurement, all configured for your organization.'
    },{
      title: 'Develop their skills',
      description: 'Get an objective pulse on your workforce through our granular skills ontology and AI-powered measurement, all configured for your organization.'
    },{
		title: 'Mobilize your workforce',
		description: 'Get an objective pulse on your workforce through our granular skills ontology and AI-powered measurement, all configured for your organization.'
	  }
	  ,{
		title: 'Personalize your talent strategies',
		description: 'Get an objective pulse on your workforce through our granular skills ontology and AI-powered measurement, all configured for your organization.'
	  }
  ];

  return (
    <div className="relative flex flex-col bg-skill-section container rounded-lg shadow-lg p-10 items-center -z-10">
	  <div className="absolute top-10 right-10 bg-gray-100/10 p-4 px-12 rounded-full rounded-tr">
		<h2 className="text-3xl md:text-4xl text-gray-50 font-bold mb-6 text-center">Skills Development Platform</h2>
		<p className="text-md md:text-lg max-w-lg text-gray-50 text-center">We provide actionable skills data that inform your talent strategies across hiring, upskilling, and mentorship.</p>
	  </div>
      <div className='flex flex-row mt-56'>
		<div className="my-4 grid grid-cols-1 md:grid-rows-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
			{services.map((service, index) => (
			<ServiceCard key={index} title={service.title} description={service.description} />
			))}
		</div>
	  </div> 
    </div>
  );
};

export default SkillsSection;
