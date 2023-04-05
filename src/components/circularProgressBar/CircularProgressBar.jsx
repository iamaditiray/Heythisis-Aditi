// import './circularProgressBar.scss';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const webdevSkills = [
//   {
//     id: '1',
//     title: 'HTML',
//     img: 'assets/html-logo.png',
//     percentage: '95%',
//   },
//   {
//     id: '2',
//     title: 'CSS',
//     img: 'assets/css-logo.png',
//     percentage: '90%',
//   },
//   {
//     id: '3',
//     title: 'JavaScript',
//     img: 'assets/javascript-logo.png',
//     percentage: '95%',
//   },
//   {
//     id: '4',
//     title: 'ReactJS',
//     img: 'assets/react-js-logo.png',
//     percentage: '85%',
//   },
//   {
//     id: '5',
//     title: 'GitHub',
//     img: 'assets/github-logo.png',
//     percentage: '80%',
//   },
// ];

// const percentageToDash = (percentage, radius) => {
//   const circumference = 2 * Math.PI * radius;
//   const dashOffset = circumference - (percentage / 100) * circumference;
//   return `${circumference} ${circumference} ${dashOffset} 0`;
// };

// const CircularProgressBar = () => {
//   const radius = 30;

//   return (
//     <div className="skill-bar-container">
//       {webdevSkills.map((skill) => (
//         <div className="skill-bar" key={skill.id}>
//           <div className="skill-title">
//             <img src={skill.img} alt={skill.title} />
//             <h3>{skill.title}</h3>
//           </div>
//           <div className="progress-bar">
//             <CircularProgressbar
//               value={parseInt(skill.percentage)}
//               text={`${skill.percentage}`}
//               strokeWidth={10}
//               styles={{
//                 path: {
//                   stroke: '#6EB9F7',
//                   strokeLinecap: 'butt',
//                   transition: 'stroke-dashoffset 0.5s ease 0s',
//                 },
//                 trail: {
//                   stroke: '#ddd',
//                   strokeLinecap: 'butt',
//                 },
//                 text: {
//                   fill: '#444',
//                   fontSize: '20px',
//                   fontWeight: 'bold',
//                   textAnchor: 'middle',
//                 },
//               }}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CircularProgressBar;
// import './circularProgressBar.scss';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const webdevSkills = [
//   {
//     id: '1',
//     title: 'HTML',
//     img: 'assets/html-logo.png',
//     percentage: '95%',
//   },
//   {
//     id: '2',
//     title: 'CSS',
//     img: 'assets/css-logo.png',
//     percentage: '90%',
//   },
//   {
//     id: '3',
//     title: 'JavaScript',
//     img: 'assets/javascript-logo.png',
//     percentage: '95%',
//   },
//   {
//     id: '4',
//     title: 'ReactJS',
//     img: 'assets/react-js-logo.png',
//     percentage: '85%',
//   },
//   {
//     id: '5',
//     title: 'GitHub',
//     img: 'assets/github-logo.png',
//     percentage: '80%',
//   },
// ];

// const percentageToDash = (percentage, radius) => {
//   const circumference = 2 * Math.PI * radius;
//   const dashOffset = circumference - (percentage / 100) * circumference;
//   return `${circumference} ${circumference} ${dashOffset} 0`;
// };

// const CircularProgressBar = () => {
//   const radius = 20;

//   return (
//     <div className="skill-bar-container">
//       {webdevSkills.map((skill) => (
//         <div className="skill-bar" key={skill.id}>
//           <div className="skill-title">
//             <img src={skill.img} alt={skill.title} />
//             <h3>{skill.title}</h3>
//           </div>
//           <div className="progress-bar">
//             <CircularProgressbar
//               value={parseInt(skill.percentage)}
//               text={`${skill.percentage}`}
//               strokeWidth={10}
//               styles={{
//                 path: {
//                   stroke: '#6EB9F7',
//                   strokeLinecap: 'butt',
//                   transition: 'stroke-dashoffset 0.5s ease 0s',
//                 },
//                 trail: {
//                   stroke: '#ddd',
//                   strokeLinecap: 'butt',
//                 },
//                 text: {
//                   fill: '#444',
//                   fontSize: '2px',
//                   fontWeight: 'bold',
//                   textAnchor: 'middle',
//                 },
//               }}
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CircularProgressBar;
// import './circularProgressBar.scss';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import LazyLoad from 'react-lazy-load';
// import React, { useState, useEffect } from 'react';


// const webdevSkills = [
//   {
//     id: '1',
//     title: 'HTML',
//     img: 'assets/html-logo.png',
//     percentage: '95%',
//   },
//   {
//     id: '2',
//     title: 'CSS',
//     img: 'assets/css-logo.png',
//     percentage: '90%',
//   },
//   {
//     id: '3',
//     title: 'JavaScript',
//     img: 'assets/javascript-logo.png',
//     percentage: '95%',
//   },
//   {
//     id: '4',
//     title: 'ReactJS',
//     img: 'assets/react-js-logo.png',
//     percentage: '85%',
//   },
//   {
//     id: '5',
//     title: 'GitHub',
//     img: 'assets/github-logo.png',
//     percentage: '80%',
//   },
// ];

// const percentageToDash = (percentage, radius) => {
//   const circumference = 2 * Math.PI * radius;
//   const dashOffset = circumference - (percentage / 100) * circumference;
//   return `${circumference} ${circumference} ${dashOffset} 0`;
// };

// const CircularProgressBar = () => {
//   const radius = 50;

//   const handleScroll = (event) => {
//     const elements = document.querySelectorAll('.skill-bar');
//     elements.forEach((element) => {
//       if (element.getBoundingClientRect().top < window.innerHeight) {
//         element.classList.add('fadeIn');
//       }
//     });
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="skill-bar-container">
//       {webdevSkills.map((skill) => (
//         <LazyLoad key={skill.id}>
//           <div className="skill-bar">
//             <div className="skill-title">
//               <img src={skill.img} alt={skill.title} />
//               <h3>{skill.title}</h3>
//             </div>
//             <div className="progress-bar">
//               <CircularProgressbar
//                 value={parseInt(skill.percentage)}
//                 text={`${skill.percentage}`}
//                 strokeWidth={5}
//                 styles={{
//                   path: {
//                     stroke: '#6EB9F7',
//                     strokeLinecap: 'butt',
//                     transition: 'stroke-dashoffset 0.5s ease 0s',
//                   },
//                   trail: {
//                     stroke: '#ddd',
//                     strokeLinecap: 'butt',
//                   },
//                   text: {
//                     fill: '#444',
//                     fontSize: '20px',
//                     fontWeight: 'bold',
//                     textAnchor: 'middle',
//                   },
//                 }}
//               />
//             </div>
//           </div>
//         </LazyLoad>
//       ))}
//     </div>
//   );
// };

// export default CircularProgressBar;
import LazyLoad from 'react-lazyload';
import './circularProgressBar.scss';

const webdevSkills = [
  {
    id: '1',
    title: 'HTML',
    img: 'assets/html-logo.png',
    percentage: '95%',
  },
  {
    id: '2',
    title: 'CSS',
    img: 'assets/css-logo.png',
    percentage: '90%',
  },
  {
    id: '3',
    title: 'JavaScript',
    img: 'assets/javascript-logo.png',
    percentage: '95%',
  },
  {
    id: '4',
    title: 'ReactJS',
    img: 'assets/react-js-logo.png',
    percentage: '85%',
  },
  {
    id: '5',
    title: 'GitHub',
    img: 'assets/github-logo.png',
    percentage: '80%',
  },
];

const ProgressBar = () => {
  return (
    <div className="progress-bar-container">
      {webdevSkills.map((skill) => (
        <LazyLoad key={skill.id}>
          <div className="skill-bar">
            <div className="skill-title">
              <img src={skill.img} alt={skill.title} />
              <h3>{skill.title}</h3>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: skill.percentage }}>
                <span>{skill.percentage}</span>
              </div>
            </div>
          </div>
        </LazyLoad>
      ))}
    </div>
  );
};

export default ProgressBar;

