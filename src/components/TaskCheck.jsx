import React, { useState } from 'react'
import
{ Checkbox, Input }
from
"antd"
;
import { Divider } from "antd";
import { Flex } from "antd";
import { EditOutlined, DeleteOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';

const TaskCheck = ({data,clickDelete,clickUpdate}) => {
    const [task, setTask] = useState(data)
    const [edit, setEdit] = useState(true)
  return (
    <>
    <Flex gap='large' style={{ justifyContent: 'space-between', backgroundColor: '#fff' }}>
    <Checkbox><Input value={task.name} onChange={(e)=> setTask({...task, name: e.target.value})} disabled={edit} style={{border: edit? 'none' : '', backgroundColor: edit? '#fff' : 'transparent'}}/></Checkbox>
    <div>
        <Flex gap='small' style={{ justifyContent: 'space-between'}}>   
            { edit ? <><EditOutlined  style={{ color: 'rgba(0,0,0,.45)'}} 
            onClick={()=>{
                setEdit(!edit)
            }}
            /></> : <><CheckOutlined style={{ color: 'rgba(0,0,0,.45)'}} 
            onClick={()=>{
                if(edit === false){
                    if(task.name.trim("") === ""){
                        return alert('Please enter Task name')
                      }
                    clickUpdate(task.id, task.name)
                }
                setEdit(!edit)
            }} 
            /></>
            }
            { edit ? <><DeleteOutlined style={{ color: 'rgba(0,0,0,.45)' }} onClick={() => clickDelete(task.id)}/></> : <><CloseOutlined style={{ color: 'rgba(0,0,0,.45)'}} 
            onClick={()=>{
                setEdit(!edit)
                setTask(data)
               
            }}
            /></>
            }
        </Flex>
        
    </div>
    </Flex>
    <Divider/>
    </>
  )
}

export default TaskCheck