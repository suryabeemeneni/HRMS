import React from 'react';
import './Projects.css'
import Hola9 from '../images/HOLA9.jpg'

const Projects = ({isActive, setIsActive, activeTab, setActiveTab}) => {
    const handleMenuItem = (tabItem) => {
        setIsActive(`Projects/${tabItem}`);
        setActiveTab(`Projects/${tabItem}`);
    };

    const Projects = [
        {
            id:"1",
            image: `${Hola9}`,
            project:"Hola9",
            tagline :'Anything Anywhere'
        },
        {
            id:"2",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Rj-hegF2Q6qY6Ga6Sl2AXWUuk8MjqaTFZA&s",
            project:"Matrimony",
            tagline :'Our Story Begins With You'
        },
        {
            id:"3",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhK2xNzz_SgBiBGLXuwKhDzkixssg0FJ7GGQ&s",
            project:"Dating App",
            tagline :'Find Your Life Partner'
        },
        {
            id:"4",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS22AvQ4XgAESQq5Bf3WFt4xtJ7duEzUsPZ3g&s",
            project:"Realestate",
            tagline :'We Care We Get You We Guide You'
        },
        {
            id:"5",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZew-eYNb_YqQ4RQE_2wei4elQ5O0eeifVSQ&s",
            project:"Services",
            tagline :'Anything Anywhere Anytime'
        },
        {
            id:"6",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDWYx-9U24IY0CrkQbTEAWSr9R5Lqzi3Tvbw&s",
            project:"HRMS",
            tagline :'Human Resource managent Services'
        },
        {
            id:"7",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_DMmtdukBV4i3tkRQ1C0UJxNqErb_5xoWWQ&s",
            project:"Job Portal",
            tagline :'Explore For Your Great Move'
        },
    ];

    return (
        <>
            {Projects.map((data, index) => (
                <div key={index} className={`Projects content-hover ${isActive === `Projects/${data.id}` && 'content-active'}`} onClick={() => handleMenuItem(data.id)}>
                    <img src={data.image} alt={data.project}/>
                    <div>
                        <h5>{data.project}</h5>
                        <p>{data.tagline}</p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Projects;
