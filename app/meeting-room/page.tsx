"use client";

import { useState } from "react";

export default function MeetingRoomPage() {
  const [rooms, setRooms] = useState([
    { id: 1, name: "Phòng A", capacity: 10 },
    { id: 2, name: "Phòng B", capacity: 20 },
  ]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Quản lý phòng họp
      </h1>

      {rooms.map((room) => (
        <div key={room.id} className="border p-3 mb-2 rounded">
          <p>{room.name}</p>
          <p>Sức chứa: {room.capacity}</p>
        </div>
      ))}
    </div>
  );
}