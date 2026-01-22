"use client";

import { useState } from "react";
import ProfileHeader from "@/components/profile/ProfileHeader";
import PlatformSettings from "@/components/profile/PlatformSettings";
import ProfileInfo from "@/components/profile/ProfileInfo";
import Conversations from "@/components/profile/Conversations";
import ProfileProjects from "@/components/profile/ProfileProjects";

export default function ProfilePage() {
  const [tab, setTab] = useState("Overview");

  return (
    <div className="space-y-6 mb-5">
      <ProfileHeader />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <PlatformSettings />
        <ProfileInfo />
        <Conversations />
      </div>
      <ProfileProjects/>
    </div>
  );
}
