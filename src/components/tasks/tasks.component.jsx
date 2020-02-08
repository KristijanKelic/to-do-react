import React from 'react';
import { connect } from 'react-redux';

import './tasks.styles.scss';

const Tasks = () => {
  return (
    <div className="tasks-container">
      <ul>
        <li>meowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeowmeow</li>
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tasks: { tasks } }) => ({
  tasks
});

export default connect(mapStateToProps)(Tasks);
