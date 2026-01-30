"use client";

import { Card, CardContent, Box } from "@mui/material";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", current: 200, previous: 500 },
  { month: "Feb", current: 280, previous: 240 },
  { month: "Mar", current: 350, previous: 300 },
  { month: "Apr", current: 320, previous: 290 },
  { month: "May", current: 420, previous: 360 },
  { month: "Jun", current: 380, previous: 340 },
  { month: "Jul", current: 460, previous: 400 },
  { month: "Aug", current: 500, previous: 430 },
  { month: "Sep", current: 480, previous: 220 },
  { month: "Oct", current: 520, previous: 360 },
  { month: "Nov", current: 560, previous: 270 },
  { month: "Dec", current: 600, previous: 540 },
];

export default function SalesOverview() {
  return (
    <Card sx={{ height: "100%", borderRadius: 3 }}>
      <CardContent>
        <h1 className="font-bold text-lg">Sales Overview</h1>
        <p className="font-bold text-sm text-[#48BB78] mb-4">
          (+5) more  <span className="font-normal text-[#A0AEC0]">in 2021</span>
        </p>

        <Box sx={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient
                  id="currentGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#4fd1c5" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="#4fd1c5" stopOpacity={0} />
                </linearGradient>

                <linearGradient
                  id="previousGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity={0} />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                scale="point"
                interval={0}
                minTickGap={0}
                tickLine={false}
                axisLine={false}
                stroke="#9ca3af"
                tick={{ fontSize: 10, textAnchor: "end" }}
                tickMargin={0}
              />

              <YAxis
                domain={[0, "dataMax"]}
                ticks={[0, 100, 200, 300, 400, 500]}
                interval={0}
                tickLine={false}
                axisLine={false}
                stroke="#9ca3af"
                tick={{ fontSize: 8 }}
                width={40}
              />

              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#e5e7eb"
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="previous"
                stroke="#94a3b8"
                fill="url(#previousGradient)"
                strokeWidth={2}
                dot={false}
              />

              <Area
                type="monotone"
                dataKey="current"
                stroke="#4fd1c5"
                fill="url(#currentGradient)"
                strokeWidth={3}
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>
      </CardContent>
    </Card>
  );
}
