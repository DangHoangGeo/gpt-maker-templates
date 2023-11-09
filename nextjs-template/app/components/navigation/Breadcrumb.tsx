import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router

interface BreadcrumbProps {
  path: Array<{ name: string; route: string }>;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  return (
    <nav aria-label="breadcrumb" className="py-3 px-5 bg-lightGrey">
      <ol className="list-reset flex">
        {path.map((p, index) => (
          <li key={index} className={`text-sm ${index !== 0 ? 'ml-4' : ''}`}>
            {index !== 0 && <span className="text-charcoal mx-2">/</span>}
            <Link to={p.route} className="text-charcoal hover:text-jade">
              {p.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
