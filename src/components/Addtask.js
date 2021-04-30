import React from "react";
import { useState } from "react";

const Addtask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [time, setTime] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add a Task");
      return;
    }

    onAdd({ text, date, month, time, reminder });

    setText("");
    setDate("");
    setMonth("");
    setTime("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Add Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Month</label>
        <input
          type="text"
          placeholder="Add Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Time</label>
        <input
          type="text"
          placeholder="Add Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save Task" className="btn btn-block" />
    </form>
  );
};

export default Addtask;
