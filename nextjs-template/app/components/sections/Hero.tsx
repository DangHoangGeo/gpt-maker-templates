'use client'
import React from 'react';
import { motion } from 'framer-motion';
import {Message} from '../chatbot/ChatBubble';
import ChatInterface from '../chatbot/ChatInterface';
import Link from 'next/link';

export default function Hero() {
	const [chatOptions, setChatOptions] = React.useState([
		{ label: 'Start a Lesson', value: 'start_lesson' },
		{ label: 'Review Past Lessons', value: 'review_lessons' },
		{ label: 'Explore Culture', value: 'explore_culture' },
	  ]);
	
	  // An array of messages, with each message having text and a flag indicating if it's from the user
	  const messages: [Message] = [
		  { text: 'Hello, how can I help you?', type: 'ai' },
		  //{ text: 'I want to learn Japanese.', isUser: true },
		  // ... other messages
		];

	  return (
		<section className="flex flex-col mx-auto items-center container bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg shadow-lg my-4 px-4 py-6 md:py-12 md:px-8">
			<motion.div
			initial={{ opacity: 0, y: 20}}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="flex flex-col mx-auto items-center"
			>
		    <Link href="/"><img src={'/Jchatly.png'} alt={'LangLift'} className="object-cover rounded-full m-4 w-24 h-24" /></Link>
			<h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to LangLift</h1>
			<p className="text-lg mb-8">Explore a new way of learning languages, powered by AI.</p>
			<div className="border border-gray-300 rounded-lg md:p-2 shadow-md m-2">
				<ChatInterface messages={messages} />
			</div>
			</motion.div>
		</section>
  );
}