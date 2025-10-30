"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Lock } from "lucide-react"

export default function PortalLogin() {
  const [passcode, setPasscode] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (passcode === "AriPosner!") {
      // Store authentication in localStorage
      localStorage.setItem("portal_authenticated", "true")
      router.push("/portal")
    } else {
      setError("Incorrect passcode. Please try again.")
      setPasscode("")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-900">
            <Lock className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">Movo Portal</h2>
          <p className="mt-2 text-sm text-gray-600">Enter your passcode to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="passcode" className="sr-only">
              Passcode
            </label>
            <input
              id="passcode"
              name="passcode"
              type="password"
              required
              value={passcode}
              onChange={(e) => {
                setPasscode(e.target.value)
                setError("")
              }}
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
              placeholder="Enter passcode"
            />
          </div>

          {error && <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</div>}

          <button
            type="submit"
            className="w-full rounded-lg bg-gray-900 px-4 py-3 font-semibold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
          >
            Access Portal
          </button>
        </form>
      </div>
    </div>
  )
}
