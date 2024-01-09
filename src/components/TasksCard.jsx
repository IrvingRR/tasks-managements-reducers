/* eslint-disable react/prop-types */
import { useContext } from "react";
import { BiSun, BiMoon, BiListCheck } from "react-icons/bi";
import { Card, CardBody, CardHeader, CardHeaderAction, Container, Title } from "../styled/components/tasksCard";
import { Input } from "./common/Input";
import { TasksList } from "./TasksList";
import { TasksContext } from "../contexts/tasksContext";
import toast from "react-hot-toast";

export const TasksCard = ({ setLightTheme, setDarkTheme, isDarkTheme }) => {

  const { handleSetNewTask, newTask, handleAddNewTask, tasks } = useContext(TasksContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(newTask) {
      handleAddNewTask(newTask);
      handleSetNewTask('');
      toast.success('Task added!');
    } else {
      toast.error('Please introduce a task');
    }
  };

  return (
    <Container>
          <Card>
            <CardHeader>
              <CardHeaderAction active={isDarkTheme === false} onClick={setLightTheme}>
                <BiSun/>
                Light
              </CardHeaderAction>
              <CardHeaderAction active={isDarkTheme} onClick={setDarkTheme}>
                <BiMoon/>
                Dark
              </CardHeaderAction>
            </CardHeader>
            
            <CardBody onSubmit={handleSubmit}>
              <Title>Tasks: {tasks.length}</Title>
              <Input icon={<BiListCheck/>} name='task' value={newTask} placeholder='Add a task...' onChange={(e) => handleSetNewTask(e.target.value)}/>
              <TasksList tasks={tasks}/>
            </CardBody>
          </Card>
        </Container>
  );
};