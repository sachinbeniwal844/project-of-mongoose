import Todo from "../Models/Todo.js";

//create todo
export const create = async (req, res) => {
  try {
    const { title, completed } = req.body;
    const todo = await Todo.create({
      title,
      completed,
      user: req.user.userId, // middleware se aya h ye
    });
    res.json({ message: "todo Created.....", todo });
  } catch (error) {
    res.json({ err: err.message });
  }
};

//delete todo
export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findOneAndDelete({
      _id: id,
      user: req.user.userId,
    });
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo Deleted...." });
  } catch (err) {
    res.json({ message: err.message });
  }
};

//update todo
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, completed } = req.body;

    const todo = await Todo.findOneAndUpdate(
      {
        _id: id,
        user: req.user.userId,
      },
      {
        title,
        completed,
      },
      {
        returnDocument: "after",
      },
    );
    if (!todo) {
      return res.status(404).json({ message: "todo not found" });
    }
    res.status(200).json({ message: "Todo Updated.....", todo });
  } catch (err) {
    res.json({ err: err.message });
  }
};

//all-todos
export const allTodos = async (req,res) => {
  try{
     const todo = await Todo.find().sort({createdAt:-1})
     res.status(200).json({count:todo.length,todo})
  }
  catch(err)
  {
    res.json({err : err.message})
  }
}