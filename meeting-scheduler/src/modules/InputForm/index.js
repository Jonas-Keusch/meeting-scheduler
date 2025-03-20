import React from 'react';
import { Card, Input, DatePicker } from 'antd';

const InputForm = () => {
  return (
    <Card title="Create New Meeting">
      <Input placeholder="Input Meeting Host" />
      <Input placeholder="Input Meeting Participants" />
      <DatePicker />
      <Input placeholder="Input Meeting Location" />
    </Card>
  );
};

export default InputForm;
