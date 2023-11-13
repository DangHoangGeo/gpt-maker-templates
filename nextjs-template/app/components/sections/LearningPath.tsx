import React from 'react';
import WeekCard from '../display/LearningWeekCard';
import LearningPlanProgress from '../display/LearningPlanProgress';
import Arrow from '../form/Arrow';


const LearningPath: React.FC = () => {
  const weeks = [
    { weekNumber: 1, title: 'Introduction to Data Science',tasks:[{id:1, content:'What is Data Science?'},{id:2, content:'Tools for Data Science'}], completed: true },
    { weekNumber: 2, title: 'Data Wrangling',tasks:[{id:1, content:'What is data wrangling vs data cleaning?'},{id:2, content:'What is data wrangling vs ETL?'},{id:3, content:'Is SQL used for data wrangling?'}], completed: true },
    { weekNumber: 3, title: 'Data Visualization',tasks:[{id:1, content:'Why is data visualization important?'},{id:2, content:'Three types of data Visualisation'},{id:3, content:'Data visualization techniques, tools'}], completed: false, current: true },
    // ... more weeks
  ];

  return (
    <div className="my-4 container bg-slate-100 p-12">
      <h2 className="text-3xl font-bold text-center mb-6 bg-jade p-4 rounded-lg text-gray-100">Learning Path</h2>
      <div className="flex justify-center space-x-2 items-center">
        {weeks.map((week, index) => (
          <React.Fragment key={week.weekNumber}>
            <WeekCard {...week} />
            {index < weeks.length - 1 && <Arrow />}
          </React.Fragment>
        ))}
      </div>
	  <LearningPlanProgress currentWeek={2} totalWeeks={3} currentScore={86} targetScore={201} />
    </div>
  );
};

export default LearningPath;
