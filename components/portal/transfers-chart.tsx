"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { time: "5/20 5:48am", value: 78 },
  { time: "5/22 6:47am", value: 85 },
  { time: "5/24 5:18pm", value: 82 },
]

export function TransfersChart() {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900">% Without Transfers</h3>
        <span className="text-sm font-semibold text-gray-900">80.66%</span>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorTransfer" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a78bfa" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#a78bfa" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="time" tick={{ fontSize: 10 }} stroke="#999" />
          <YAxis tick={{ fontSize: 10 }} stroke="#999" domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#a78bfa"
            strokeWidth={2}
            dot={{ fill: "#a78bfa", r: 4 }}
            fill="url(#colorTransfer)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
