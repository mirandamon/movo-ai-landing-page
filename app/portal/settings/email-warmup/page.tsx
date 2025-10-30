export default function EmailWarmupPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold">Email Warmup</h1>
        <p className="text-gray-600">Improve your email deliverability with automated warmup</p>
      </div>

      <div className="max-w-3xl space-y-6">
        {/* Status Card */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Warmup Status</h2>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">Active</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-gray-600">Emails Sent Today</p>
              <p className="text-2xl font-bold">47</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Warmed</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Deliverability Score</p>
              <p className="text-2xl font-bold text-green-600">94%</p>
            </div>
          </div>
        </div>

        {/* Settings */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Warmup Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Enable Email Warmup</p>
                <p className="text-sm text-gray-600">Automatically send warmup emails to improve deliverability</p>
              </div>
              <label className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" className="peer sr-only" defaultChecked />
                <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-purple-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300"></div>
              </label>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Daily Email Limit</label>
              <input
                type="number"
                defaultValue="50"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <p className="mt-1 text-xs text-gray-500">Maximum number of warmup emails to send per day</p>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Warmup Duration (days)</label>
              <input
                type="number"
                defaultValue="30"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <p className="mt-1 text-xs text-gray-500">How long to run the warmup campaign</p>
            </div>
          </div>
          <button className="mt-4 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
            Save Settings
          </button>
        </div>

        {/* Connected Accounts */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <h2 className="mb-4 text-lg font-semibold">Warmup Accounts</h2>
          <div className="space-y-3">
            {["guillaume@movoai.co", "g.romestaing@movoai.co"].map((email) => (
              <div key={email} className="flex items-center justify-between rounded-lg border border-gray-200 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <span className="text-sm font-medium text-purple-700">{email[0].toUpperCase()}</span>
                  </div>
                  <div>
                    <p className="font-medium">{email}</p>
                    <p className="text-sm text-gray-600">Warmup active</p>
                  </div>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">Active</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
