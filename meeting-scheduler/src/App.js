import logo from './logo.svg';
import './App.css';
import {Card, Button, Table} from 'antd';

const tableColumns = [
  {
    title:'Host',
    dataIndex:'host',
    key:'host'
  },
  {
    title:'Participants',
    dataIndex:'participants',
    key:'participants'
  },
  {
    title:'Time',
    dataIndex:'time',
    key:'time'
  },
  {
    title:'Location',
    dataIndex:'location',
    key:'location'
  }

];

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Card title="Meetings">
        <Button style={{ color: 'blue', background: 'lightblue' }}>Schedule Meeting</Button>
      </Card>
      <div style={{ display:'flex', 'justifyContent':'space-between',padding: '20px' }}>
      <Card title="Upcoming Meetings" style={{width:'47%', color: 'blue'}}>
        <Table columns={tableColumns}/>
      </Card>
      <Card title="Past Mettings" style={{width:'47%', color:"lightcoral"}}>
        <Table columns={tableColumns}/>
      </Card>
      </div>
    </div>
  );
}

export default App;
