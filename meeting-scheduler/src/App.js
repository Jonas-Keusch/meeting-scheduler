import logo from './logo.svg';
import './App.css';
import {Card, Button} from 'antd';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <Card title="Meetings">
        <Button style={{ color: 'blue', background: 'lightblue' }}>Schedule Meeting</Button>
      </Card>
      <div style={{ display:'flex', 'justifyContent':'space-between',padding: '20px' }}>
      <Card title="Upcoming Meetings" style={{width:'47%', color: 'blue'}}>
        upcoming Meetings
      </Card>
      <Card title="Past Mettings" style={{width:'47%', color:"lightcoral"}}>
      Past Meetings
      </Card>
      </div>
    </div>
  );
}

export default App;
