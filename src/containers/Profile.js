import React, { Component } from 'react';

class Profile extends Component {
  
  componentDidMount() {
    document.title = 'Profile';
  }

  render() {
    return (
      <div className="title m-b-md">
        Profile
      </div>
    );
  }
}

export default Profile;