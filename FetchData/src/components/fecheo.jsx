import React, { useState, useEffect } from 'react';

// Componente GithubUser
const GithubUser = ({ username }) => {
  const [userData, setUserData] = useState(null);
//fecheo del nombre de usuario
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching user data:', error));
  }, [username]);

  if (!userData) return <div>Loading...</div>;

  return (
    <div>
      <img 
        src={userData.avatar_url} 
        alt={`${userData.login}`} 
      />
      <div>
        <h2 >{userData.name}</h2>
        <p>@{userData.login}</p>
      </div>
    </div>
  );
};

// Componente GithubUsers
const GithubUsers = () => {
    //almacena y actualiza el valor del input
  const [searchTerm, setSearchTerm] = useState('');
  //almacena y actualiza el array de los usernames
  const [usernames, setUsernames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() && !usernames.includes(searchTerm)) {
      setUsernames([...usernames, searchTerm]);
      setSearchTerm('');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Introduce un nombre"
        />
        <button>
          Search
        </button>
      </form>

      <ul>
        {usernames.map((username) => (
          <li key={username}>
            <GithubUser username={username} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GithubUsers;