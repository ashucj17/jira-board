import Tags from "../Tags/queue-assigned-tags";
import "./tasks-queue.css";

const TaskQueue = () => {
  return (
    <header className="app__header">
      <form>
        <input type="text" placeholder="Enter Task Detail" />
        <div className="queue">
          <div className="queue__assigned">
           <Tags />
           <Tags />
           <Tags />
          </div>
          <div className="queue__state">
            <select>
              <option value="Ready for development">
                Ready for development
              </option>
              <option value="In Progress">In Progress</option>
              <option value="Ready for QA">Ready for QA</option>
              <option value="Closed">Closed</option>
            </select>
            <button type="submit" value="submit">
              + Add
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskQueue;
