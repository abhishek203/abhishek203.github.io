import * as React from 'react';
import Layout from '../components/layout';
import Social from '../components/social';
import ReactMarkdown from 'react-markdown';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';

import { body } from '../styles/body.module.css';
import { projImage, projHeading, projLink, projExplanation } from '../styles/project.module.css'
import surveyMap from "../../public/static/surveyMap.jpg"
import td390 from '../../public/static/td390.jpg'
import sample from '../../public/static/sample2.md'
interface projectProps {
    projectTitle: string;
    imgPath: string;
    projectDesc: string;
    markDownPath: URL | RequestInfo;
}

const loadMarkdown:React.FC  =  () => {
    const [markdownContent, setMarkdownContent] = React.useState('');

  React.useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(sample); // Replace with the path to your markdown file
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error('Error fetching markdown:', error);
      }
    };

    fetchMarkdown();
  }, []);
    return (
        <div>
            {markdownContent && (
                <div>
                    <h2>Markdown Content:</h2>
                    <ReactMarkdown>{markdownContent}</ReactMarkdown>
                </div>
            )}
        </div>
    )
};
const Project: React.FC<projectProps> = ({ projectTitle, imgPath, projectDesc, markDownPath }) => {
    
    return (
        <div>
            <Router>
      <div>
        <Link to="/another">Go to Another Component</Link>
        <Routes>
        <Route path="/another" Component={loadMarkdown} />
        </Routes>
      </div>
    </Router>
            <a href='' className={projLink} onClick={loadMarkdown}>
                <div className={body}>

                    <img src={imgPath} alt={projectTitle} className={projImage} />

                    <h2 className={projHeading}>{projectTitle}</h2>

                    <p className={projExplanation}>{projectDesc}</p>
                </div>
            </a>
            
        </div>
    )
}
const ProjectsPage = () => {
    return (
        <div className={body}>
            <Layout pageTitle="Projects" />
            <li className={projLink}>
                <Project projectTitle='Converting Unstructured Data to JSON using LLMs' imgPath={td390} projectDesc='Extracting useful information from unstructured data such as notes, transcripts into JSON file with guaranteed validation using Guardrails AI...' markDownPath='../projectsmd/sample.md' />
                <Project projectTitle='Modernizing Land Records' imgPath={surveyMap} projectDesc='In collaboration with Government of Maharashtra & Google Research to solve land dispute problmes with technology... ' markDownPath='/' />
                <Project projectTitle='Analysing Water Stress' imgPath={td390} projectDesc='In colloboration with Aroehan(NGO) and TDSL(IIT Bombay) to analyse water stress in three tribal habitations...' markDownPath='/' />
            </li>
            <Social />
        </div>
    )
}


export const Head = () => <title>Projects</title>

export default ProjectsPage