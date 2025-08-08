"use client";

import React from "react";
import { User } from "../types/dashboard";

interface UserAvatarsProps {
  users: User[];
}

const UserAvatars: React.FC<UserAvatarsProps> = ({ users }) => {
  const displayUsers = users.slice(0, 4);
  const remainingCount = users.length - displayUsers.length;

  return (
    <div className="flex items-center space-x-3">
      <div className="flex -space-x-1 sm:-space-x-2">
        {displayUsers.map((user) => (
          <div
            key={user.id}
            className=" w-8 h-8 rounded-full border-[1.5px] border-white overflow-hidden"
          >
            <img
              src={user.avatar || "/placeholder.svg"}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <span className="text-[15px] leading-[20px] tracking-[-0.075px] text-[rgba(21,39,45,0.62)]">
        Ava, Liam, Noah {remainingCount > 0 && `+${remainingCount} others`}
      </span>
    </div>
  );
};

export default UserAvatars;
