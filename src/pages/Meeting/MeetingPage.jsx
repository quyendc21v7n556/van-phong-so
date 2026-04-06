import { useEffect, useState } from "react";
import {
  getMeetings,
  addMeeting,
  updateMeeting,
  deleteMeeting
} from "../../services/meetingService";

const MeetingPage = () => {

  const [meetings, setMeetings] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getMeetings();
    setMeetings(res.data);
  };

  const handleSubmit = async () => {

    if (!title || !date) return;

    const data = { title, date };

    if (editingId) {
      await updateMeeting(editingId, data);
      setEditingId(null);
    } else {
      await addMeeting(data);
    }

    setTitle("");
    setDate("");
    fetchData();
  };

  const handleDelete = async (id) => {
    await deleteMeeting(id);
    fetchData();
  };

  const handleEdit = (m) => {
    setTitle(m.title);
    setDate(m.date);
    setEditingId(m.id);
  };

  return (
    <div>
      <h2>Quản lý cuộc họp</h2>

      <input
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editingId ? "Cập nhật" : "Thêm"}
      </button>

      <ul>
        {meetings.map((m) => (
          <li key={m.id}>
            {m.title} - {m.date}

            <button onClick={() => handleEdit(m)}>Sửa</button>
            <button onClick={() => handleDelete(m.id)}>Xóa</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingPage;