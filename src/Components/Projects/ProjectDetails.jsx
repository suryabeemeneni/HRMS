import React from "react";

const ProjectDetails = ({ project }) => {
  const dummyData = [
    {
      id: "1",
      name: "Hola9",
      title: "Hola9 Project",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel libero eget nisi faucibus fringilla.",
      image:
        "https://t4.ftcdn.net/jpg/04/93/18/01/240_F_493180162_zNnsCWp2YIsiDZrVIrIZIFxma1Z3fv2i.jpg",
    },
    {
      id: "2",
      name: "Matrimony",
      title: "Matrimony Project",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      image:
        "https://t3.ftcdn.net/jpg/05/45/91/58/240_F_545915825_u6EHFXAqISVmghHKRIXfchrSDxmwlPeY.jpg",
    },
    {
      id: "3",
      name: "Dating App",
      title: "Dating App Project",
      description:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce eu sem id velit sodales vehicula et a risus.",
      image:
        "https://t4.ftcdn.net/jpg/07/07/95/25/240_F_707952564_PXiD2aQst7u0KJ67zogYyz5iLGiQ3MpX.jpg",
    },
    {
      id: "4",
      name: "Realestate",
      title: "Realestate Project",
      description:
        "Sed ullamcorper urna eget odio feugiat euismod. Suspendisse potenti. Aliquam auctor velit et magna gravida consequat.",
      image:
        "https://t4.ftcdn.net/jpg/06/39/85/85/240_F_639858509_15D6inG8qRW1i0185HPJeW1uXicjuBw9.jpg",
    },
    {
      id: "5",
      name: "Services",
      title: "Services Project",
      description:
        "Integer eget velit id est scelerisque efficitur sit amet vitae velit. Donec quis tellus libero.",
      image:
        "https://t3.ftcdn.net/jpg/01/42/18/92/240_F_142189225_tOIJEVKxsXEUXjkYKiiPf3D0Aprlym5i.jpg",
    },
    {
      id: "6",
      name: "HRMS",
      title: "HRMS Project",
      description:
        "Etiam id sapien in nisl efficitur elementum. Ut in turpis nec felis condimentum pretium.",
      image:
        "https://t3.ftcdn.net/jpg/07/30/91/02/240_F_730910231_9AFln82N1mhRidddk8syFk5ZHSyFYqqB.jpg",
    },
    {
      id: "7",
      name: "Job Portal",
      title: "Job Portal Project",
      description:
        "Quisque in elit sit amet erat fringilla viverra non non lectus. Curabitur rhoncus elit nec sem ullamcorper aliquam.",
      image:
        "https://t4.ftcdn.net/jpg/03/49/42/19/240_F_349421977_u2x10hyLEZV1o8ecCNs61JAKBOf7r2ob.jpg",
    },
  ];

  const profile = [
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4g8xUnnDU4kVOp8_-3f3aPDusw_D2AlyXw&s',
        name : 'Jinju',
        desigantion : 'Team Leader'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhrnCkOrOlsNRSz9XgG_NCsrsiHo-JOwOv6JwOczGC08pQqp1-pC9K1j4UCqm-qyeQ6w&usqp=CAU',
        name : 'Priyanaka',
        desigantion : 'Software Engineer'
    },
    {
        image : 'https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_0.jpg',
        name : 'Avinash',
        desigantion : 'Software Engineer'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQjkljCvQO6mkUwOgr7u4hhWMm8HxeAUcNqdnyt5HEnl6B4mdA5PlAiMupnS3HGnVbZYs&usqp=CAU',
        name : 'Surya  narayana',
        desigantion : 'Software Engineer'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUKPmu8M0apKcy1oABXStYt3eHAbDCoLsC9OASEYxJXCaDMmSy3IYnujBENMZXQznsSNY&usqp=CAU',
        name : 'Janardhan',
        desigantion : 'Software Engineer'
    },
    {
        image : 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Alberto_conversi_profile_pic.jpg',
        name : 'Ram prasad',
        desigantion : 'Software Engineer'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvEViMOriytRWM-Wu2DzCJAwGtVdEFx26RUmHxCb6XwZX_rCNvgQ4yYg7_2M_KeK74vQ&usqp=CAU',
        name : 'Santhosh Rabada',
        desigantion : 'Team Leader'
    },
    {
        image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx0CIy3mIbpe2nuLRfK5xxPcwxmTvXjJsBNw&s',
        name : 'Mahesh',
        desigantion : 'Software Engineer'
    },
  ]
  const projectDetails = dummyData.find((item) => item.id === project);

  if (!projectDetails) {
    return <p>No project details available.</p>;
  }

  return (
    <>
      <div
        style={{ backgroundImage: `url(${projectDetails.image})` }}
        className="projects-main-img border"
      >
        <span className="project-sub-header-cont">
          <h2>{projectDetails.title}</h2>
          <p>{projectDetails.description}</p>
        </span>
      </div>


      <div className="Project-team">
        <h1>{`${projectDetails.title} - TEAM`}</h1>
        <div className="project-team-cards">
            {profile.map((data, index) => (
            <span className="project-team-cards-span container-background" key={index}>
                <img src={data.image} alt=""/>
                <h3>{data.name}</h3>
                <p>{data.desigantion}</p>
                <button className="button">Profile</button>
            </span>
            ))}
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;

// import React, { useState, useEffect } from 'react';

// const ProjectDetails = ({ projectId }) => {
//     const [projectDetails, setProjectDetails] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchProjectDetails = async () => {
//             setIsLoading(true);
//             setError(null);

//             try {
//                 const response = await fetch(`https://empadmin.hola9.com/account/projectdetail/${projectId}`);
//                 if (!response.ok) {
//                     throw new Error('Failed to fetch project details');
//                 }

//                 const data = await response.json();
//                 setProjectDetails(data);
//             } catch (error) {
//                 setError(error.message);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (projectId) {
//             fetchProjectDetails();
//         }
//     }, [projectId]);

//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;
//     if (!projectDetails) return <p>No project details available.</p>;

//     return (
//         <div>
//             <h2>{projectDetails.title}</h2>
//             <p>{projectDetails.description}</p>
//             {/* Render additional project details as needed */}
//         </div>
//     );
// };

// export default ProjectDetails;
