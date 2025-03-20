import './App.css';
import {Card, Button, Input, DatePicker} from 'antd';

function App() {
    return (
        <Card title='Create New Meeting'>
            <Input placeholder='Input Meeting Host'/>
            <Input placeholder='Input Meeting Participants'/>
            <DatePicker/>
            <Input placeholder='Input Meeting Location'/>

        </Card>
    );
};

export default InputForm;