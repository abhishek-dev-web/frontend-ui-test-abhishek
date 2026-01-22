"use client";

import { useState } from "react";
import Card from "../common/Card";
import Toggle from "../common/Toggle";

export default function PlatformSettings() {
  const [settings, setSettings] = useState({
    follow: true,
    answer: false,
    mention: true,
    launch: false,
    updates: false,
    newsletter: true,
  });

  const Item = ({
    label,
    value,
    onChange,
  }: {
    label: string;
    value: boolean;
    onChange: (v: boolean) => void;
  }) => (
    <div className="flex items-center gap-3 py-2">
      <Toggle value={value} onChange={onChange} />
      <span className="text-xs text-[#A0AEC0]">
        {label}
      </span>
    </div>
  );

  return (
    <Card>
      <h3 className="font-bold text-lg mb-2 text-[#2D3748]">
        Platform Settings
      </h3>

      <p className="text-[10px] font-bold text-[#A0AEC0] mb-2">
        ACCOUNT
      </p>

      <Item
        label="Email me when someone follows me"
        value={settings.follow}
        onChange={(v) => setSettings({ ...settings, follow: v })}
      />
      <Item
        label="Email me when someone answers on my post"
        value={settings.answer}
        onChange={(v) => setSettings({ ...settings, answer: v })}
      />
      <Item
        label="Email me when someone mentions me"
        value={settings.mention}
        onChange={(v) => setSettings({ ...settings, mention: v })}
      />

      <p className="text-[10px] font-bold text-[#A0AEC0] mt-5 mb-2">
        APPLICATION
      </p>

      <Item
        label="New launches and projects"
        value={settings.launch}
        onChange={(v) => setSettings({ ...settings, launch: v })}
      />
      <Item
        label="Monthly product updates"
        value={settings.updates}
        onChange={(v) => setSettings({ ...settings, updates: v })}
      />
      <Item
        label="Subscribe to newsletter"
        value={settings.newsletter}
        onChange={(v) => setSettings({ ...settings, newsletter: v })}
      />
    </Card>
  );
}
