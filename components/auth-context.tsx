"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

interface AuthContextType {
  isAuthenticated: boolean
  userEmail: string | null
  userName: string | null
  login: (email: string, name?: string) => void
  logout: () => void
  checkAuth: () => boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userEmail, setUserEmail] = useState<string | null>(null)
  const [userName, setUserName] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check authentication status on mount
    console.log("AuthProvider: Checking authentication status...")

    try {
      const authStatus = localStorage.getItem("isAuthenticated")
      const email = localStorage.getItem("userEmail")
      const name = localStorage.getItem("userName")

      console.log("AuthProvider: Retrieved from localStorage:", { authStatus, email, name })

      if (authStatus === "true" && email) {
        console.log("AuthProvider: User is authenticated, setting state...")
        setIsAuthenticated(true)
        setUserEmail(email)
        setUserName(name)
      } else {
        console.log("AuthProvider: User is not authenticated")
        setIsAuthenticated(false)
        setUserEmail(null)
        setUserName(null)
      }
    } catch (error) {
      console.error("AuthProvider: Error checking authentication:", error)
      setIsAuthenticated(false)
      setUserEmail(null)
      setUserName(null)
    }

    setIsLoading(false)
  }, [])

  const login = (email: string, name?: string) => {
    console.log("AuthProvider: Login called with:", { email, name })

    try {
      setIsAuthenticated(true)
      setUserEmail(email)
      setUserName(name || null)

      localStorage.setItem("isAuthenticated", "true")
      localStorage.setItem("userEmail", email)
      if (name) {
        localStorage.setItem("userName", name)
      }

      console.log("AuthProvider: Login successful, state updated")
    } catch (error) {
      console.error("AuthProvider: Error during login:", error)
    }
  }

  const logout = () => {
    console.log("AuthProvider: Logout called")

    try {
      setIsAuthenticated(false)
      setUserEmail(null)
      setUserName(null)

      localStorage.removeItem("isAuthenticated")
      localStorage.removeItem("userEmail")
      localStorage.removeItem("userName")

      console.log("AuthProvider: Logout successful, redirecting to home")
      router.push("/")
    } catch (error) {
      console.error("AuthProvider: Error during logout:", error)
    }
  }

  const checkAuth = () => {
    console.log("AuthProvider: checkAuth called, isAuthenticated:", isAuthenticated)
    return isAuthenticated
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userEmail,
        userName,
        login,
        logout,
        checkAuth,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
