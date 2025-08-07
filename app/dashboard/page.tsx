"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  Search,
  Upload,
  FileText,
  Scan,
  CheckCircle,
  AlertCircle,
  Clock,
  ArrowRight,
  Camera,
  FileCheck,
  Zap,
  Eye,
  Download,
  History,
  Settings,
  User,
  Bell,
  XCircle,
  RotateCcw,
} from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/components/auth-context"

function DashboardContent() {
  const [mounted, setMounted] = useState(false)
  const [uniqueId, setUniqueId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<any>(null)
  const [verificationStatus, setVerificationStatus] = useState<"idle" | "success" | "failure">("idle")
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [ocrProgress, setOcrProgress] = useState(0)
  const [activeTab, setActiveTab] = useState("id-verification")
  const { theme } = useTheme()
  const { userName, userEmail } = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleIdVerification = async () => {
    if (!uniqueId.trim()) return

    setIsVerifying(true)
    setVerificationResult(null)
    setVerificationStatus("idle")

    // Simulate API call with specific logic for '123'
    setTimeout(() => {
      if (uniqueId.trim() === "123") {
        // Success case
        setVerificationResult({
          status: "verified",
          documentType: "Premium Document",
          issueDate: "2024-01-01",
          expiryDate: "2025-01-01",
          country: "United States",
          confidence: 100,
          uniqueId: uniqueId,
        })
        setVerificationStatus("success")
      } else {
        // Failure case
        setVerificationResult({
          status: "failed",
          error: "Document not found",
          uniqueId: uniqueId,
          message: "The provided unique ID does not match any verified document in our system.",
        })
        setVerificationStatus("failure")
      }
      setIsVerifying(false)
    }, 2000)
  }

  const resetVerification = () => {
    setUniqueId("")
    setVerificationResult(null)
    setVerificationStatus("idle")
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setUploadedFile(file)
      setOcrProgress(0)
      setVerificationResult(null)

      // Simulate OCR processing
      const interval = setInterval(() => {
        setOcrProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setVerificationResult({
              status: "verified",
              documentType: "Driver's License",
              extractedText: {
                name: "John Doe",
                licenseNumber: "D123456789",
                issueDate: "2021-06-10",
                expiryDate: "2025-06-10",
                state: "California",
              },
              confidence: 97.5,
            })
            return 100
          }
          return prev + 10
        })
      }, 200)
    }
  }

  const recentVerifications = [
    {
      id: "DOC-001",
      type: "Passport",
      status: "verified",
      date: "2024-01-15",
      confidence: 99.8,
    },
    {
      id: "DOC-002",
      type: "Driver's License",
      status: "verified",
      date: "2024-01-14",
      confidence: 98.2,
    },
    {
      id: "DOC-003",
      type: "ID Card",
      status: "pending",
      date: "2024-01-14",
      confidence: null,
    },
  ]

  const stats = [
    { label: "Documents Verified", value: "1,247", icon: FileCheck, color: "text-green-500" },
    { label: "Success Rate", value: "99.8%", icon: CheckCircle, color: "text-blue-500" },
    { label: "Avg. Processing Time", value: "2.3s", icon: Zap, color: "text-yellow-500" },
    { label: "Active Sessions", value: "12", icon: Eye, color: "text-purple-500" },
  ]

  // Success Page Component
  const SuccessPage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <div className="mb-6">
        <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-green-700 dark:text-green-300 mb-2">Verification Successful!</h2>
        <p className="text-lg text-muted-foreground">Your unique ID has been successfully verified</p>
      </div>

      <Card className="max-w-md mx-auto border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Unique ID:</span>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                {verificationResult?.uniqueId}
              </Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Document Type:</span>
              <span>{verificationResult?.documentType}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Status:</span>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Verified</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Confidence:</span>
              <span className="font-bold text-green-600">{verificationResult?.confidence}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 space-x-4">
        <Button onClick={resetVerification} variant="outline" size="lg">
          <RotateCcw className="h-4 w-4 mr-2" />
          Verify Another ID
        </Button>
        <Button size="lg">
          <Download className="h-4 w-4 mr-2" />
          Download Certificate
        </Button>
      </div>
    </motion.div>
  )

  // Failure Page Component
  const FailurePage = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-center py-12"
    >
      <div className="mb-6">
        <XCircle className="h-24 w-24 text-red-500 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-red-700 dark:text-red-300 mb-2">Verification Failed</h2>
        <p className="text-lg text-muted-foreground">The unique ID you entered could not be verified</p>
      </div>

      <Card className="max-w-md mx-auto border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Entered ID:</span>
              <Badge variant="destructive">{verificationResult?.uniqueId}</Badge>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Status:</span>
              <Badge variant="destructive">Not Found</Badge>
            </div>
            <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <p className="text-sm text-red-800 dark:text-red-200">{verificationResult?.message}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 space-x-4">
        <Button onClick={resetVerification} size="lg">
          <RotateCcw className="h-4 w-4 mr-2" />
          Try Again
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">
            <AlertCircle className="h-4 w-4 mr-2" />
            Contact Support
          </Link>
        </Button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg max-w-md mx-auto">
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
          <div className="text-left">
            <p className="text-sm font-medium text-blue-800 dark:text-blue-200">Need Help?</p>
            <p className="text-sm text-blue-600 dark:text-blue-300">
              Make sure you've entered the correct unique ID. For testing purposes, try using "123".
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Dashboard" }]} />
        </div>
      </div>

      {/* Dashboard Header */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome back, {userName || userEmail}!</h1>
              <p className="text-muted-foreground text-lg">
                Verify documents quickly and securely using ID lookup or OCR scanning
              </p>
            </div>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button variant="outline" size="sm">
                <History className="h-4 w-4 mr-2" />
                View History
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" size="sm">
                <Bell className="h-4 w-4 mr-2" />
                Notifications
              </Button>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">{stat.label}</p>
                        <p className="text-2xl font-bold">{stat.value}</p>
                      </div>
                      <stat.icon className={`h-8 w-8 ${stat.color}`} />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Verification Interface */}
      <section className="pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Verification Methods */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-6">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-2xl flex items-center">
                      <Shield className="h-6 w-6 text-primary mr-2" />
                      Document Verification
                    </CardTitle>
                    <CardDescription>
                      Choose your preferred method to verify documents quickly and securely
                    </CardDescription>
                  </CardHeader>

                  {/* Show Success/Failure Pages or Normal Interface */}
                  {verificationStatus === "success" ? (
                    <SuccessPage />
                  ) : verificationStatus === "failure" ? (
                    <FailurePage />
                  ) : (
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="grid w-full grid-cols-2 mb-6">
                        <TabsTrigger value="id-verification" className="flex items-center space-x-2">
                          <Search className="h-4 w-4" />
                          <span>ID Verification</span>
                        </TabsTrigger>
                        <TabsTrigger value="ocr-scanning" className="flex items-center space-x-2">
                          <Scan className="h-4 w-4" />
                          <span>OCR Scanning</span>
                        </TabsTrigger>
                      </TabsList>

                      {/* ID Verification Tab */}
                      <TabsContent value="id-verification" className="space-y-6">
                        <div className="bg-muted/50 p-6 rounded-lg">
                          <div className="flex items-center mb-4">
                            <Search className="h-5 w-5 text-primary mr-2" />
                            <h3 className="text-lg font-semibold">Verify by Unique ID</h3>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            Enter the unique document ID to instantly verify its authenticity and retrieve details.
                          </p>

                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="unique-id">Document Unique ID</Label>
                              <Input
                                id="unique-id"
                                placeholder="Enter document ID (try '123' for demo)"
                                value={uniqueId}
                                onChange={(e) => setUniqueId(e.target.value)}
                                className="mt-1"
                                disabled={isVerifying}
                              />
                            </div>

                            <Button
                              onClick={handleIdVerification}
                              disabled={!uniqueId.trim() || isVerifying}
                              className="w-full bg-primary hover:bg-primary/90 transition-all duration-200"
                              size="lg"
                            >
                              {isVerifying ? (
                                <>
                                  <Clock className="h-4 w-4 mr-2 animate-spin" />
                                  Verifying...
                                </>
                              ) : (
                                <>
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Verify Document
                                </>
                              )}
                            </Button>
                          </div>

                          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <AlertCircle className="h-5 w-5 text-blue-500 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-blue-800 dark:text-blue-200">
                                  Demo Instructions
                                </p>
                                <p className="text-sm text-blue-600 dark:text-blue-300">
                                  For demonstration purposes, enter "123" to see a successful verification, or any other
                                  ID to see a failure response.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>

                      {/* OCR Scanning Tab */}
                      <TabsContent value="ocr-scanning" className="space-y-6">
                        <div className="bg-muted/50 p-6 rounded-lg">
                          <div className="flex items-center mb-4">
                            <Scan className="h-5 w-5 text-primary mr-2" />
                            <h3 className="text-lg font-semibold">OCR Document Scanning</h3>
                          </div>
                          <p className="text-muted-foreground mb-4">
                            Upload a document image or PDF to extract and verify information using advanced OCR
                            technology.
                          </p>

                          <div className="space-y-4">
                            <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                              <input
                                type="file"
                                accept="image/*,.pdf"
                                onChange={handleFileUpload}
                                className="hidden"
                                id="file-upload"
                              />
                              <label htmlFor="file-upload" className="cursor-pointer">
                                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                                <p className="text-lg font-medium mb-2">
                                  {uploadedFile ? uploadedFile.name : "Drop your document here"}
                                </p>
                                <p className="text-muted-foreground">or click to browse (PNG, JPG, PDF up to 10MB)</p>
                              </label>
                            </div>

                            {uploadedFile && (
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium">Processing Document...</span>
                                  <span className="text-sm text-muted-foreground">{ocrProgress}%</span>
                                </div>
                                <Progress value={ocrProgress} className="h-2" />
                              </div>
                            )}

                            <div className="grid md:grid-cols-2 gap-4">
                              <Button variant="outline" className="w-full bg-transparent" size="lg">
                                <Camera className="h-4 w-4 mr-2" />
                                Use Camera
                              </Button>
                              <Button variant="outline" className="w-full bg-transparent" size="lg">
                                <FileText className="h-4 w-4 mr-2" />
                                Browse Files
                              </Button>
                            </div>
                          </div>

                          <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                              <div>
                                <p className="text-sm font-medium text-green-800 dark:text-green-200">
                                  Advanced OCR Technology
                                </p>
                                <p className="text-sm text-green-600 dark:text-green-300">
                                  Our AI-powered OCR can extract text from 50+ document types with 99.9% accuracy.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  )}

                  {/* OCR Verification Results (only show if not in success/failure state) */}
                  {verificationResult &&
                    verificationStatus === "idle" &&
                    verificationResult.status === "verified" &&
                    verificationResult.extractedText && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mt-6"
                      >
                        <Card className="border-2 border-green-200 dark:border-green-800">
                          <CardHeader>
                            <CardTitle className="flex items-center text-green-700 dark:text-green-300">
                              <CheckCircle className="h-5 w-5 mr-2" />
                              OCR Verification Successful
                            </CardTitle>
                            <CardDescription>Document has been successfully processed and verified</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <h4 className="font-semibold mb-2">Document Details</h4>
                                <div className="space-y-2 text-sm">
                                  <div className="flex justify-between">
                                    <span className="text-muted-foreground">Type:</span>
                                    <span>{verificationResult.documentType}</span>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold mb-2">Verification Status</h4>
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">Confidence Score:</span>
                                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                      {verificationResult.confidence}%
                                    </Badge>
                                  </div>
                                  <Progress value={verificationResult.confidence} className="h-2" />
                                </div>
                                <div className="mt-4">
                                  <h5 className="font-medium mb-2">Extracted Information</h5>
                                  <div className="space-y-1 text-sm">
                                    {Object.entries(verificationResult.extractedText).map(([key, value]) => (
                                      <div key={key} className="flex justify-between">
                                        <span className="text-muted-foreground capitalize">
                                          {key.replace(/([A-Z])/g, " $1")}:
                                        </span>
                                        <span>{value as string}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex space-x-2 mt-4">
                              <Button size="sm" variant="outline">
                                <Download className="h-4 w-4 mr-2" />
                                Download Report
                              </Button>
                              <Button size="sm" variant="outline">
                                <FileText className="h-4 w-4 mr-2" />
                                View Details
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )}
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Recent Verifications */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <History className="h-5 w-5 mr-2" />
                      Recent Verifications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentVerifications.map((verification, index) => (
                        <div
                          key={verification.id}
                          className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors"
                        >
                          <div>
                            <p className="font-medium text-sm">{verification.id}</p>
                            <p className="text-xs text-muted-foreground">{verification.type}</p>
                            <p className="text-xs text-muted-foreground">{verification.date}</p>
                          </div>
                          <div className="text-right">
                            <Badge
                              variant={verification.status === "verified" ? "default" : "secondary"}
                              className={
                                verification.status === "verified"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                                  : ""
                              }
                            >
                              {verification.status}
                            </Badge>
                            {verification.confidence && (
                              <p className="text-xs text-muted-foreground mt-1">{verification.confidence}%</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4 bg-transparent" size="sm">
                      View All History
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <FileCheck className="h-4 w-4 mr-2" />
                        Batch Verification
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Export Reports
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <Settings className="h-4 w-4 mr-2" />
                        API Settings
                      </Button>
                      <Button variant="outline" className="w-full justify-start bg-transparent" size="sm">
                        <User className="h-4 w-4 mr-2" />
                        Account Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Help & Support */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2">Need Help?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get assistance with document verification or explore our comprehensive guides.
                    </p>
                    <div className="space-y-2">
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        View Documentation
                      </Button>
                      <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                        <Link href="/contact">Contact Support</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">BlockCertify Dashboard</span>
            </div>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link href="/about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-primary transition-colors">
                Support
              </Link>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
