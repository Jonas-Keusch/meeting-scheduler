import React from 'react';
import { Card, Button, Table } from 'antd';
import { useNavigate } from 'react-router-dom';
import './App.css';

const tableColumns = [
  {
    title: 'Host',
    dataIndex: 'host',
    key: 'host',
  },
  {
    title: 'Participants',
    dataIndex: 'participants',
    key: 'participants',
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'Location',
    dataIndex: 'location',
    key: 'location',
  },
];

const HomePage = () => {
  const navigate = useNavigate();

  const goToInputPage = () => {
    navigate('/InputForm');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <Card title="Meetings">
        <Button
          style={{ color: 'blue', background: 'lightblue' }}
          onClick={goToInputPage}
        >
          Schedule Meeting
        </Button>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
        <Card title="Upcoming Meetings" style={{ width: '47%', color: 'blue' }}>
          <Table columns={tableColumns} />
        </Card>
        <Card title="Past Meetings" style={{ width: '47%', color: 'lightcoral' }}>
          <Table columns={tableColumns} />
        </Card>
      </div>
    </div>
  );
};

export default HomePage;
