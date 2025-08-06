"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  CheckCircle,
  Zap,
  Users,
  Lock,
  Eye,
  Database,
  BarChart3,
  Smartphone,
  Cloud,
  Search,
  FileCheck,
  Fingerprint,
  Key,
  ShieldCheck,
  Workflow,
  LineChart,
  PieChart,
  TrendingUp,
  MessageSquare,
  BookOpen,
  Award,
  Layers,
  Network,
  Server,
  ArrowRight,
  Play,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"

export default function FeaturesPage() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  const coreFeatures = [
    {
      icon: FileCheck,
      title: "Document Authentication",
      description:
        "Advanced AI algorithms verify document authenticity by analyzing paper texture, ink patterns, and security features.",
      features: ["Watermark detection", "Security thread analysis", "Microprint verification", "UV light simulation"],
      accuracy: 99.8,
    },
    {
      icon: Fingerprint,
      title: "Biometric Verification",
      description: "Cross-reference document photos with live biometric data for enhanced identity verification.",
      features: ["Facial recognition", "Signature matching", "Fingerprint analysis", "Voice verification"],
      accuracy: 99.5,
    },
    {
      icon: Search,
      title: "OCR & Data Extraction",
      description: "Extract and validate text data from documents with industry-leading optical character recognition.",
      features: ["Multi-language support", "Handwriting recognition", "Table extraction", "Structured data output"],
      accuracy: 99.9,
    },
    {
      icon: Database,
      title: "Database Cross-Reference",
      description: "Verify document information against government and institutional databases worldwide.",
      features: ["Real-time verification", "Blacklist checking", "Sanctions screening", "PEP identification"],
      accuracy: 99.7,
    },
  ]

  const securityFeatures = [
    {
      icon: Lock,
      title: "End-to-End Encryption",
      description: "All documents are encrypted using AES-256 encryption both in transit and at rest.",
      details: [
        "Zero-knowledge architecture",
        "Client-side encryption",
        "Secure key management",
        "Perfect forward secrecy",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Compliance Standards",
      description: "Meet global regulatory requirements with built-in compliance frameworks.",
      details: ["GDPR compliant", "SOC 2 Type II", "ISO 27001 certified", "HIPAA ready"],
    },
    {
      icon: Eye,
      title: "Audit Trail",
      description: "Complete audit logs for all document processing activities and user actions.",
      details: ["Immutable logs", "Real-time monitoring", "Compliance reporting", "Forensic analysis"],
    },
    {
      icon: Key,
      title: "Access Control",
      description: "Granular permissions and role-based access control for enterprise security.",
      details: ["Multi-factor authentication", "SSO integration", "Role-based permissions", "IP whitelisting"],
    },
  ]

  const integrationFeatures = [
    {
      icon: Cloud,
      title: "Cloud-Native Architecture",
      description: "Built for scale with microservices architecture and auto-scaling capabilities.",
      benefits: ["99.99% uptime", "Global CDN", "Auto-scaling", "Load balancing"],
    },
    {
      icon: Network,
      title: "API-First Design",
      description: "RESTful APIs and webhooks for seamless integration with existing systems.",
      benefits: ["RESTful APIs", "GraphQL support", "Webhook notifications", "SDK libraries"],
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description: "Automate document processing workflows with customizable business rules.",
      benefits: ["Custom workflows", "Conditional logic", "Batch processing", "Queue management"],
    },
    {
      icon: Smartphone,
      title: "Mobile SDKs",
      description: "Native mobile SDKs for iOS and Android with camera integration.",
      benefits: ["Native performance", "Offline processing", "Camera optimization", "Real-time feedback"],
    },
  ]

  const analyticsFeatures = [
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description: "Monitor document processing metrics and system performance in real-time.",
      metrics: ["Processing volume", "Success rates", "Response times", "Error analysis"],
    },
    {
      icon: PieChart,
      title: "Custom Dashboards",
      description: "Create personalized dashboards with the metrics that matter to your business.",
      metrics: ["Drag-and-drop builder", "Custom widgets", "Data filtering", "Export capabilities"],
    },
    {
      icon: TrendingUp,
      title: "Predictive Insights",
      description: "AI-powered insights to predict trends and optimize your verification processes.",
      metrics: ["Fraud prediction", "Volume forecasting", "Performance optimization", "Risk scoring"],
    },
    {
      icon: LineChart,
      title: "Compliance Reporting",
      description: "Automated compliance reports for regulatory requirements and audits.",
      metrics: ["Regulatory templates", "Scheduled reports", "Data visualization", "Export formats"],
    },
  ]

  const supportFeatures = [
    {
      icon: MessageSquare,
      title: "24/7 Support",
      description: "Round-the-clock technical support with guaranteed response times.",
      channels: ["Live chat", "Email support", "Phone support", "Video calls"],
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive documentation, tutorials, and best practices guides.",
      channels: ["API documentation", "Integration guides", "Video tutorials", "Best practices"],
    },
    {
      icon: Users,
      title: "Training Programs",
      description: "Professional training and certification programs for your team.",
      channels: ["Online courses", "Certification exams", "Workshops", "Custom training"],
    },
    {
      icon: Award,
      title: "Success Management",
      description: "Dedicated customer success managers for enterprise clients.",
      channels: ["Account management", "Strategic planning", "Performance reviews", "Optimization consulting"],
    },
  ]

  const comparisonData = [
    { feature: "Document Types Supported", us: "50+", competitor1: "20+", competitor2: "15+" },
    { feature: "Processing Speed", us: "< 2 seconds", competitor1: "5-10 seconds", competitor2: "10-15 seconds" },
    { feature: "Accuracy Rate", us: "99.9%", competitor1: "97.5%", competitor2: "95.2%" },
    { feature: "Global Coverage", us: "190+ countries", competitor1: "120 countries", competitor2: "80 countries" },
    { feature: "API Response Time", us: "< 500ms", competitor1: "1-2 seconds", competitor2: "2-5 seconds" },
    { feature: "Uptime SLA", us: "99.99%", competitor1: "99.9%", competitor2: "99.5%" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Features" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-5" style={{ y }}>
          <Image src="/features-background-pattern.png" alt="Background pattern" fill className="object-cover" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              🚀 Advanced Document Verification
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Powerful Features for
              <span className="text-primary block">Complete Document Security</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Discover the comprehensive suite of features that make DocVerify the most trusted document validation
              platform worldwide. From AI-powered verification to enterprise-grade security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-primary/10 transition-all duration-200 hover:scale-105 bg-transparent"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Categories Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="core" className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-4xl grid-cols-2 md:grid-cols-5 h-auto p-1">
                <TabsTrigger value="core" className="text-sm py-3">
                  Core Features
                </TabsTrigger>
                <TabsTrigger value="security" className="text-sm py-3">
                  Security
                </TabsTrigger>
                <TabsTrigger value="integration" className="text-sm py-3">
                  Integration
                </TabsTrigger>
                <TabsTrigger value="analytics" className="text-sm py-3">
                  Analytics
                </TabsTrigger>
                <TabsTrigger value="support" className="text-sm py-3">
                  Support
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Core Features */}
            <TabsContent value="core">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Verification Features</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Advanced AI-powered document verification with industry-leading accuracy rates.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {coreFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                        <CardHeader>
                          <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                              <feature.icon className="h-6 w-6 text-primary" />
                            </div>
                            <Badge
                              variant="secondary"
                              className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                            >
                              {feature.accuracy}% Accuracy
                            </Badge>
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium">Accuracy Rate</span>
                              <span className="text-sm text-muted-foreground">{feature.accuracy}%</span>
                            </div>
                            <Progress value={feature.accuracy} className="h-2" />
                            <div className="grid grid-cols-2 gap-2 mt-4">
                              {feature.features.map((item, idx) => (
                                <div key={idx} className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span className="text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Security Features */}
            <TabsContent value="security">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise-Grade Security</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Military-grade security protocols to protect your most sensitive documents and data.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {securityFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {feature.details.map((detail, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Shield className="h-4 w-4 text-primary" />
                                <span className="text-sm">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Integration Features */}
            <TabsContent value="integration">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Seamless Integration</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Built for developers with comprehensive APIs and SDKs for easy integration into existing systems.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {integrationFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {feature.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Zap className="h-4 w-4 text-yellow-500" />
                                <span className="text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Analytics Features */}
            <TabsContent value="analytics">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Analytics & Reporting</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Gain deep insights into your document verification processes with comprehensive analytics and
                    reporting tools.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {analyticsFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {feature.metrics.map((metric, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <BarChart3 className="h-4 w-4 text-primary" />
                                <span className="text-sm">{metric}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Support Features */}
            <TabsContent value="support">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">World-Class Support</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Get the help you need with our comprehensive support ecosystem and dedicated customer success team.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {supportFeatures.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription className="text-base">{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {feature.channels.map((channel, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Users className="h-4 w-4 text-primary" />
                                <span className="text-sm">{channel}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary">Comparison</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Compare</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how DocVerify stacks up against the competition across key performance metrics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Feature</th>
                      <th className="text-center p-4 font-semibold text-primary">DocVerify</th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Competitor A</th>
                      <th className="text-center p-4 font-semibold text-muted-foreground">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, index) => (
                      <motion.tr
                        key={row.feature}
                        className="border-b hover:bg-muted/30 transition-colors"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <td className="p-4 font-medium">{row.feature}</td>
                        <td className="p-4 text-center">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{row.us}</Badge>
                        </td>
                        <td className="p-4 text-center text-muted-foreground">{row.competitor1}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.competitor2}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary">Technical Specs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Specifications</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built on cutting-edge technology with enterprise-grade performance and reliability.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Performance",
                icon: Zap,
                specs: [
                  "< 2 second processing time",
                  "99.99% uptime SLA",
                  "< 500ms API response time",
                  "Auto-scaling infrastructure",
                  "Global CDN distribution",
                ],
              },
              {
                title: "Capacity",
                icon: Server,
                specs: [
                  "1M+ documents per day",
                  "Unlimited API calls",
                  "50+ concurrent users",
                  "10TB storage included",
                  "Batch processing support",
                ],
              },
              {
                title: "Compatibility",
                icon: Layers,
                specs: [
                  "50+ document formats",
                  "190+ country support",
                  "25+ languages",
                  "REST & GraphQL APIs",
                  "Mobile & web SDKs",
                ],
              },
            ].map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <spec.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{spec.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {spec.specs.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience These Features Today</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to transform your document verification process? Start your free trial and see the difference our
              advanced features can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-gray-100 transition-all duration-200 hover:scale-105"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-200 hover:scale-105 bg-transparent"
              >
                Schedule Demo
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-200 hover:scale-105 bg-transparent"
              >
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold">DocVerify</span>
              </Link>
              <p className="text-muted-foreground mb-4">
                The world's most trusted document validation platform, securing millions of documents worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/features" className="hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/#about-us" className="hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Press
                  </a>
                </li>
                <li>
                  <Link href="/#contact-us" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Status
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Security
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground">© 2024 DocVerify. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
