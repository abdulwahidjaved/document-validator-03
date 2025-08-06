"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Shield,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  Users,
  Headphones,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Globe,
  Zap,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"

export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  })
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      content: "contact@docverify.com",
      description: "Send us an email anytime! We typically respond within 2 hours during business hours.",
      action: "Send Email",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      title: "Phone Support",
      content: "+1 (555) 123-4567",
      description: "Call us Monday through Friday, 8am to 6pm PST for immediate assistance.",
      action: "Call Now",
      color: "text-green-500",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      content: "Available 24/7",
      description: "Get instant help from our support team through our live chat system.",
      action: "Start Chat",
      color: "text-purple-500",
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      content: "123 Security Street, Tech City, TC 12345",
      description: "Schedule a visit to our headquarters for in-person meetings and demos.",
      action: "Get Directions",
      color: "text-orange-500",
    },
  ]

  const supportOptions = [
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with integration, API issues, and technical troubleshooting.",
      features: ["24/7 availability", "Expert engineers", "Screen sharing", "Priority response"],
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Strategic guidance and best practices to maximize your platform usage.",
      features: ["Dedicated manager", "Regular check-ins", "Performance reviews", "Growth planning"],
    },
    {
      icon: BookOpen,
      title: "Training & Onboarding",
      description: "Comprehensive training programs to get your team up and running quickly.",
      features: ["Live training sessions", "Documentation", "Video tutorials", "Certification programs"],
    },
  ]

  const offices = [
    {
      city: "San Francisco",
      address: "123 Security Street, Tech City, TC 12345",
      phone: "+1 (555) 123-4567",
      email: "sf@docverify.com",
      hours: "Mon-Fri: 8am-6pm PST",
    },
    {
      city: "New York",
      address: "456 Finance Avenue, New York, NY 10001",
      phone: "+1 (555) 234-5678",
      email: "ny@docverify.com",
      hours: "Mon-Fri: 9am-7pm EST",
    },
    {
      city: "London",
      address: "789 Security Lane, London, UK EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@docverify.com",
      hours: "Mon-Fri: 9am-5pm GMT",
    },
  ]

  const faqs = [
    {
      question: "How quickly can I get started?",
      answer:
        "You can start using DocVerify immediately with our free trial. Full onboarding typically takes 1-2 business days.",
    },
    {
      question: "Do you offer custom integrations?",
      answer:
        "Yes, we provide custom integration services for enterprise clients. Our team will work with you to ensure seamless integration.",
    },
    {
      question: "What support do you provide?",
      answer:
        "We offer 24/7 technical support, dedicated customer success managers, and comprehensive training programs.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We use military-grade encryption and maintain SOC 2 Type II, ISO 27001, and other security certifications.",
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-5" style={{ y }}>
          <Image src="/contact-background-pattern.png" alt="Background pattern" fill className="object-cover" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">📞 Get in Touch</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We're Here to
              <span className="text-primary block">Help You Succeed</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Ready to secure your documents? Contact our team for a personalized demo, technical support, or to learn
              how DocVerify can transform your document verification process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary">Contact Methods</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose How to Reach Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Multiple ways to get in touch with our team. We're committed to responding quickly and helping you find
              the right solution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <method.icon className={`h-8 w-8 ${method.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                    <p className="text-lg font-medium text-primary mb-3">{method.content}</p>
                    <p className="text-sm text-muted-foreground mb-4">{method.description}</p>
                    <Button variant="outline" className="w-full hover:bg-primary/10 bg-transparent">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours during business days.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input
                          placeholder="John"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input
                          placeholder="Doe"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <Input
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone</label>
                        <Input
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject *</label>
                      <Select onValueChange={(value) => handleInputChange("subject", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="demo">Request Demo</SelectItem>
                          <SelectItem value="support">Technical Support</SelectItem>
                          <SelectItem value="sales">Sales Inquiry</SelectItem>
                          <SelectItem value="partnership">Partnership</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        placeholder="Tell us about your document verification needs..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                      size="lg"
                    >
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Support Options */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Support Options</h3>
                <div className="space-y-6">
                  {supportOptions.map((option, index) => (
                    <motion.div
                      key={option.title}
                      className="p-6 rounded-lg border hover:bg-muted/50 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                          <option.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{option.title}</h4>
                          <p className="text-muted-foreground mb-3">{option.description}</p>
                          <div className="grid grid-cols-2 gap-2">
                            {option.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 p-6 rounded-lg">
                <h4 className="font-semibold mb-2 flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  Need immediate assistance?
                </h4>
                <p className="text-muted-foreground mb-4">
                  Our support team is available 24/7 for enterprise customers and urgent technical issues.
                </p>
                <Button variant="outline" className="hover:bg-primary/10 bg-transparent">
                  Emergency Support
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary">Global Presence</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Office Locations</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              With offices around the world, we're always close to our customers and ready to provide local support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Globe className="h-5 w-5 text-primary mr-2" />
                      {office.city}
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                        <span className="text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{office.phone}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{office.email}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{office.hours}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to common questions. Can't find what you're looking for? Contact our support team.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't wait to secure your documents. Start your free trial today and see why thousands of companies trust
              DocVerify.
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
                  <Link href="/about" className="hover:text-primary transition-colors">
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
                  <Link href="/contact" className="hover:text-primary transition-colors">
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
