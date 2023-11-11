import React from 'react';
import FeatureCard from '../display/FeatureCard';
import {Message} from '../chatbot/ChatBubble';

interface Feature {
	title: string;
	demoConversation: Message[];
}

const FeaturesSection: React.FC = () => {
	const features: Feature[] = [
		{
			title: "Vocabulary Building",
			demoConversation: [
				{ type: 'ai', text: 'To start, let\'s select a specific area of focus. Could you let me know which aspect of professional language you\'d like to concentrate on, or should I choose a general set of business-related vocabulary for us to begin with?' , chat_type: 'question' },
				{ type: 'user', text: 'Japanese Business Vocabularies',chat_type: 'guide' },
				{ type: 'ai', text: 'Great! Here are Today\'s words:'},
				{ type: 'ai', text: "<div className='space-y-2'><h4>1. Vocabulary List</h4><ol className='list-decimal'><li><p><strong>交渉 (こうしょう) - Negotiation</strong></p><ul><li><em>Example</em>: 明日の会議で新しい契約の交渉を行います。</li><li><em>Translation</em>: Tomorrow, we will conduct negotiations for a new contract in the meeting.</li></ul></li><li><p><strong>提案 (ていあん) - Proposal, Suggestion</strong></p><ul><li><em>Example</em>: 彼はプロジェクトに関する素晴らしい提案をしました。</li><li><em>Translation</em>: He made an excellent proposal regarding the project.</li></ul></li><li><p><strong>目標 (もくひょう) - Goal, Objective</strong></p><ul><li><em>Example</em>: 今四半期の主な目標は売上の20%増加です。</li><li><em>Translation</em>: The main objective for this quarter is a 20% increase in sales.</li></ul></li><li><p><strong>達成 (たっせい) - Achievement, Accomplishment</strong></p><ul><li><em>Example</em>: チームは年末までにその目標を達成する予定です。</li><li><em>Translation</em>: The team plans to achieve that goal by the end of the year.</li></ul></li></ol></div>" },
				{ type: 'ai', text: '明日の会議で新しい契約の交渉を行います。' , chat_type: 'example' },
				{ type: 'ai', text: 'Could you use one of these vocabulary words in a sentence?', chat_type: 'question' },
			]
		},
		{
			title: "Grammar Practice",
			demoConversation: [
				{ type: 'ai', text: 'Let\'s dive into some grammar.' },
				{ type: 'user', text: 'I\'m all ears.' },
				{ type: 'ai', text: 'We\'ll cover Particle Usage in Japanese today.' },
				{ type: 'ai', text: "<div class='markdown prose w-full break-words dark:prose-invert light'><p>Excellent choice! Particle usage in Japanese is crucial for structuring sentences correctly and conveying the intended meaning. Since you\'re at an N3 level, we\'ll focus on some of the more nuanced aspects of particle usage. Let\'s start with a brief overview and then move on to some exercises.</p><h3>Particle Usage in Japanese</h3><ol className='list-decimal'><li><p><strong>は (wa)</strong> - Topic Marker</p><ul><li>Used to indicate the topic of the sentence.</li><li>Example: 日本語<strong>は</strong>難しいです。(Japanese is difficult.)</li></ul></li><li><p><strong>が (ga)</strong> - Subject Marker</p><ul><li>Used to specify the subject of a sentence, especially when it\'s new information or emphasized.</li><li>Example: これ<strong>が</strong>私の本です。(This is my book.)</li></ul></li><li><p><strong>を (wo/o)</strong> - Object Marker</p><ul><li>Used to mark the direct object of an action.</li><li>Example: ケーキ<strong>を</strong>食べます。(I eat cake.)</li></ul></li><li><p><strong>に (ni)</strong> - Directional/Time Marker</p><ul><li>Indicates a direction towards something or a point in time.</li><li>Example: 図書館<strong>に</strong>行きます。(I go to the library.)</li></ul></li><li><p><strong>で (de)</strong> - Context Marker</p><ul><li>Used to indicate the location where an action takes place or means by which it happens.</li><li>Example: レストラン<strong>で</strong>食べます。(I eat at the restaurant.)</li></ul></li></ol><p>Once you\'ve completed these exercises, I\'ll provide feedback and further instruction. Let\'s get started!</p></div>" },
				{ type: 'ai', text: 'Exercise 1: Try creating a sentence using each of these particles. This will help you practice forming sentences with correct particle usage.', chat_type: 'question'},
				{ type: 'user', text: '今日、私は家族と一緒にスーパーへ買い物に行ってきました。'},
				{ type: 'ai', text: "<div className='markdown prose w-full break-words dark:prose-invert light'><p>Great job creating a sentence! Let\'s analyze your sentence for particle usage:</p><h4>Your Sentence:</h4><p>今日、私<strong>は</strong>家族<strong>と</strong>一緒にスーパー<strong>へ</strong>買い物に行ってきました。</p><ol className='list-decimal'><li><strong>は (wa)</strong> - You used 「は」after 「私」to mark yourself as the topic of the sentence. It\'s correctly placed and shows what the sentence is about.</li><li><strong>と (to)</strong> - This particle is used with 「家族」to indicate that you did the activity together with your family. It\'s used correctly to express accompaniment.</li><li><strong>へ (e)</strong> - This particle indicates direction towards 「スーパー」(supermarket). It\'s used correctly to show where you went for shopping.</li></ol><p>Your sentence effectively uses these particles to convey a clear and detailed meaning.</p><h3>Exercise 2: Particle Identification</h3><p>Now, let\'s move to the next exercise. Here\'s a sentence for you:</p><p><strong>Sentence</strong>: 学校で日本語の授業を受けます。</p><ul><li>Identify the particles in this sentence and explain their usage.</li></ul></div>" },
			]
		},
		{
			title: "Conversation Practice",
			demoConversation: [
				{ type: 'user', text: 'Let\'s practice daily conversation.' },
				{ type: 'ai', text: 'Absolutely, practicing daily conversation is a key aspect of language learning, \n especially for maintaining and improving your fluency.' },
				{ type: 'ai', text: 'Since you\'re already at an N3 level in Japanese, \n we\'ll focus on conversations that incorporate everyday topics but with a slightly higher complexity' },	
				{ type: 'ai', text: 'Topic: Eating Out \n Let\'s imagine we\'re discussing plans to eat out at a restaurant.' },
				{ type: 'ai', text: 'Conversation Start' },
				{ type: 'ai', text: 'Me: こんばんは！今週末、一緒に外食しませんか？何か食べたい料理はありますか？' },
				{ type: 'user', text: 'いいですね。私もどこかに行って食べるつもりです。ベトナム料理はどうでしょうか' },
				{ type: 'ai', text: 'ベトナム料理、大好きです！何か特に食べたいベトナム料理はありますか？私はフォーかバインミーが食べたいですね。' },
				{ type: 'user', text: '私もフォーが食べたいですね。東京なら有名なフォーチンがあるようです。' },
				{ type: 'ai', text: '#Feedback: Your response was on-topic and showed enthusiasm, which is great in a conversation.', chat_type: 'feedback' },
				{ type: 'ai', text: 'フォーチンですか。評判を聞いたことがありますが、まだ行ったことはありません。どんな特徴があるレストランですか？'},
			]
		},
		// Add more features as needed...
	];

	return (
		<div className="flex flex-wrap justify-center">
			{features.map((feature, index) => (
				<FeatureCard key={index} title={feature.title} demoConversation={feature.demoConversation} />
			))}
		</div>
	);
};

export default FeaturesSection;
