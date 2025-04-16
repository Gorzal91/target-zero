import React, { useEffect, useState } from 'react';
import '../styles/About.css';

const About = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // Flag to track if the component is mounted
    setIsLoading(true);

    async function fetchTeamMembers() {
      try {
        const responses = await Promise.all(
          Array.from({ length: 5 }).map(() =>
            fetch("https://randomuser.me/api/")
          )
        );
        const data = await Promise.all(responses.map((res) => res.json()));
        const members = data.map((item) => ({
          id: item.results[0].login.uuid,
          name: `${item.results[0].name.first} ${item.results[0].name.last}`,
          title: item.results[0].name.title, // Adding title
          imgSrc: item.results[0].picture.large,
        }));
        if (isMounted) {
          setTeamMembers(members);
        }
      } catch (error) {
        console.error(error);
        if (isMounted) {
          setError("Failed to fetch team members.");
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchTeamMembers();

    return () => {
      isMounted = false; // Cleanup function to set the flag to false when the component unmounts
    };
  }, []);

  if (isLoading) {
    return (
      <div className="loadingSpinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return <p>Sorry, error message says: {error}</p>;
  }

  return (
    <div className="about-container">
      {/* Info about team */}
      <div className="about-info">
        <h1>About Our Team</h1>
        <p>
          We are a passionate team dedicated to achieving our goals.
          Our mission is to create effective solutions to educate the public about climate policy.
          Meet the amazing people who make it all possible!
        </p>
      </div>

      {/* Info about team members */}
      <div className="team-container">
        {teamMembers.map((member) => (
          <div key={member.id} className="team-member">
            <img src={member.imgSrc} alt={member.name} className="profile-pic" />
            <p className="member-name">{member.name}</p>
            <p className="member-title">{member.title}</p> {/*show title */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;