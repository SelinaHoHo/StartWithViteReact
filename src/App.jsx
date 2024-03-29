import { MoonFilled, PlusCircleOutlined } from '@ant-design/icons'
import { Button, Card, Divider, Flex, Input, Space, Alert } from 'antd'
import { useState } from 'react'
import './App.css'
import TaskCheck from './components/TaskCheck'

function App() {
  const [myTasks, setMyTasks] = useState([
    { id: 1, name: 'Weekend party' },
    { id: 2, name: 'Learn NodeJs' },
    { id: 3, name: 'Learn ReactJs' }
  ]);
  const [name, setName] = useState('')
  const handleAddTask = (name) => {
    let nameTask = name.trim();
    if(nameTask == '' || nameTask == null){ 
      return alert('Please enter Task name')
    }
    setMyTasks([...myTasks, { id: myTasks.length + 1, name: nameTask }]);
    setName('')
  };
      

  const handleDeleteTask = (id) => {
    setMyTasks(myTasks.filter((task) => task.id !== id));
  };
  const handleUpdateTask = (id, newName) => {
    const task = myTasks.find((task) => task.id === id);
    task.name = newName;
    setMyTasks([...myTasks]);
  };

  return (
    <div style={{ display: 'relative'}}>
    <div style={{ backgroundImage: 'linear-gradient(90deg, #A230ED, #5CDAFF)', height: '300px'}}></div>
    <Space direction="vertical" size="middle" style={{ display: 'flex', width: '30%', margin: 'auto', paddingTop: '40px', marginTop: '-250px' }}>
    <Flex gap='large' style={{ justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent' }}>
        <h2 style={{ color: 'white', fontSize: '30px' }}>MY TASKS</h2>
        <Button shape="square" type="secondary" style={{ backgroundColor: 'white'}}
        icon={<MoonFilled style={{ fontSize: '16px', color: '#000' }}/>} />
    </Flex>
    <Input
    value={name}
    onChange={(e) => setName(e.target.value)}
      placeholder="Add a new task..."
      prefix={<PlusCircleOutlined style={{
        color: 'rgba(0,0,0,.45)', paddingRight: '3px',
      }}/>}
      suffix={
        <Button style={{ color: 'rgba(0,0,0,.45)' }} type="link" onClick={()=>{handleAddTask(name)}}>
      ADD
    </Button>
      }
    />
    <Card size="large" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)', height: '400px', overflow: 'auto'}} >
      <Flex style={{ justifyContent: 'space-between', backgroundColor: '#fff', alignItems: 'center' }}>
        <span style={{ color: 'rgba(0,0,0,.45)'}}>{myTasks.length} tasks left</span>
        <Button style={{ color: 'rgba(0,0,0,.45)', padding: '0px' }} type="link" onClick={() => setMyTasks([])}>
      Clear all tasks
    </Button>
      </Flex>
      <Divider/>
      {myTasks.map(item => (
        <TaskCheck key={item.id} data={item} clickDelete={handleDeleteTask} clickUpdate={handleUpdateTask} />
      ))}
    </Card>
    </Space>
    </div>
  )
}

export default App
