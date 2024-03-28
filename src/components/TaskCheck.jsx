import React, { useState } from 'react'
import
{ Checkbox, Input }
from
"antd"
;
import { Divider } from "antd";
import { Flex } from "antd";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const TaskCheck = ({data,clickDelete,clickUpdate}) => {
    const [task, setTask] = useState(data)
    const [edit, setEdit] = useState(true)
  return (
    <>
    <Flex gap='large' style={{ justifyContent: 'space-between', backgroundColor: '#fff' }}>
    <Checkbox><Input value={task.name} onChange={(e)=> setTask({...task, name: e.target.value})} disabled={edit} style={{border: edit? 'none' : '', backgroundColor: edit? '#fff' : 'transparent'}}/></Checkbox>
    <div>
        <Flex gap='small' style={{ justifyContent: 'space-between'}}>
            <EditOutlined style={{ color: 'rgba(0,0,0,.45)'}} 
            onClick={()=>{
                if(edit === false){
                    clickUpdate(task)
                }
                setEdit(!edit)
            }}
            />
            <DeleteOutlined style={{ color: 'rgba(0,0,0,.45)' }} onClick={() => clickDelete(task.id)}/>
        </Flex>
    </div>
    </Flex>
    <Divider/>
    </>
  )
}

export default TaskCheck