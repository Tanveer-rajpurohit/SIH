"use client"
import { useState } from "react";
import { FaTrashAlt, FaCheck, FaTimes } from "react-icons/fa";

const notifications = [
  {
    id: 1,
    imgSrc: "https://via.placeholder.com/40",
    name: "Amanda",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, id.",
    time: "Yesterday • Design Team",
  },
  {
    id: 2,
    imgSrc: "https://via.placeholder.com/40",
    name: "Billy",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, excepturi!",
    time: "Yesterday • Design Team",
    comment: "@chunkofunk have you got the latest designs for the new concepts",
  },
  {
    id: 3,
    imgSrc: "https://via.placeholder.com/40",
    name: "James",
    message: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, dicta?",
    time: "Yesterday • Design Team",
    actions: true,
  },
  {
    id: 4,
    imgSrc: "https://via.placeholder.com/40",
    name: "Lisa",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus, nulla!",
    time: "Yesterday • Design Team",
    tags: ["Design", "SaaS", "Project"],
  },
  {
    id: 5,
    imgSrc: "https://via.placeholder.com/40",
    name: "John",
    message: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, doloribus?",
    time: "Yesterday • Design Team",
  },
];

export default function NotificationsPage() {
  const [activities, setActivities] = useState(notifications);

  const handleDeleteAll = () => {
    setActivities([]);
    alert('All activities have been deleted');
  };

  const handleApprove = (id) => {
    setActivities(activities.map(activity => 
      activity.id === id ? { ...activity, message: "Request Approved ✅", bgColor: '#e8f5e9' } : activity
    ));
  };

  const handleDecline = (id) => {
    setActivities(activities.map(activity => 
      activity.id === id ? { ...activity, message: "Request Declined ❌", bgColor: '#ffe5e5' } : activity
    ));
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Notification</h2>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          onClick={handleDeleteAll}
        >
          Delete all
        </button>
      </div>
      <div className="flex flex-col gap-6">
        {activities.map(activity => (
          <div 
            key={activity.id} 
            className={`flex items-start gap-4 p-4 rounded-lg shadow ${activity.bgColor || 'bg-gray-100'} transition`}
          >
            <img src={activity.imgSrc} alt={activity.name} className="w-12 h-12 rounded-full shadow" />
            <div className="flex-grow">
              <p className="text-gray-800">{activity.message}</p>
              <span className="block mt-2 text-sm text-gray-500">{activity.time}</span>
              {activity.comment && <blockquote className="mt-2 pl-4 italic border-l-2 border-gray-300 text-gray-600">{activity.comment}</blockquote>}
              {activity.actions && (
                <div className="mt-2">
                  <button 
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600 transition"
                    onClick={() => handleApprove(activity.id)}
                  >
                    <FaCheck />
                  </button>
                  <button 
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handleDecline(activity.id)}
                  >
                    <FaTimes />
                  </button>
                </div>
              )}
              {activity.tags && (
                <div className="flex gap-2 mt-2">
                  {activity.tags.map(tag => (
                    <span key={tag} className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

