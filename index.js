
  
import express from 'express';
const app = express();
app.use(express.json());
const tasks=[];
app.get('/health',(req,res) =>{
  res.json({
    success:true,
    massage:'server is healthy'
  })
})

app.post('/create-task', (req, res) => {
  const { title, task, priority } = req.body;

  
   const id = tasks.length + 1;

  const newTask = {
    "id": id,
    "title": title,
    "task": task,
    "priority": priority
  }

  tasks.push(newTask);

  res.json({
    success: true,
    message: 'Task created successfully',
    data: newTask
  });
});
app.get('/all-tasks',(req,res) => {
  res.json({
    success: true,
    massage: '  all Task fetches sucessfully',
    data:tasks
  })
})

  
const PORT=5000;
app.listen(PORT, ()=>{
  console.log(`server is running on port ${PORT}`);
});
