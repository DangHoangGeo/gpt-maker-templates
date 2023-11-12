'use client'
import React from 'react';
import { motion } from 'framer-motion';
import InformationCard from '../components/display/InformationCard';
import CharacterCard from '../components/display/CharacterCard';
import LearningPath from '../components/display/LearningPath';
import TypingEffect from '../components/chatbot/TypingEffect';

const JapaneseStarter: React.FC = () => {
  // Data for sections can be fetched or statically defined
  return (
    <div className="p-4">
		<div className="mb-8">
			<h2 className="text-2xl font-bold mb-4">Welcome to [Your App Name]</h2>
			<TypingEffect message="Hello and welcome! Are you starting from scratch or looking to improve your skills?" />
     	</div>
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
		<div>
			<h2 className="text-2xl font-bold mb-4">Introduction to Japanese</h2>
			<div className="flex flex-col items-center max-w-lg overflow-x-auto whitespace-nowrap">
				<div className="flex">
				{/* Map through introduction data and render InformationCard */}
				{/* Example: */}
				<InformationCard title="The Land of the Rising Sun" description="Japanese is spoken by over 120 million people..." />
				<InformationCard title="The Land of the Rising Sun" description="Japanese is spoken by over 120 million people..." />
				<InformationCard title="The Land of the Rising Sun" description="Japanese is spoken by over 120 million people..." />
				<InformationCard title="The Land of the Rising Sun" description="Japanese is spoken by over 120 million people..." />
				{/* More cards */}
				</div>
			</div>
		</div>
      </motion.div>

      {/* Characters Section */}
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold mb-4">Japanese Characters</h2>
        <div className="flex overflow-x-auto">
          {/* Map through characters data and render CharacterCard */}
          {/* Example: */}
          <CharacterCard title="Kanji" description="These characters are derived from Chinese and are used for most nouns, verbs, adjectives, and adverbs." />
          <CharacterCard title="Hiragana" description="These characters are derived from Chinese and are used for most nouns, verbs, adjectives, and adverbs." />
          {/* More cards for Hiragana, Katakana, Romaji */}
        </div>
      </motion.div>

      {/* Learning Paths Section */}
      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold mb-4">Learning Paths</h2>
        <div className="flex flex-wrap justify-center">
          {/* Map through learning paths data and render LearningPath */}
          {/* Example: */}
          <LearningPath title="Conversational Japanese" description="Focus on everyday conversational skills and common phrases." />
		  <LearningPath title="Conversational Japanese" description="Focus on everyday conversational skills and common phrases." />
          {/* More paths */}
        </div>
      </motion.div>
    </div>
  );
};

export default JapaneseStarter;
