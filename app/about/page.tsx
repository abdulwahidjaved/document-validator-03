"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Award,
  Globe,
  Target,
  Heart,
  Lightbulb,
  TrendingUp,
  ArrowRight,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react"
import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Breadcrumb } from "@/components/breadcrumb"

export default function AboutPage() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  useEffect(() => {
    setMounted(true)
  }, [])

  const stats = [
    { number: "2014", label: "Founded" },
    { number: "500+", label: "Team Members" },
    { number: "10M+", label: "Documents Processed" },
    { number: "190+", label: "Countries Served" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Security First",
      description: "We prioritize the security and privacy of our customers' data above all else.",
      color: "text-blue-500",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Our customers' success is our success. We're committed to their growth and satisfaction.",
      color: "text-red-500",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible in document verification.",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication to achieve great things.",
      color: "text-green-500",
    },
  ]

  const timeline = [
    {
      year: "2014",
      title: "Company Founded",
      description: "DocVerify was founded with a mission to make document verification secure and accessible.",
    },
    {
      year: "2016",
      title: "First AI Integration",
      description: "Launched our first AI-powered document authentication system.",
    },
    {
      year: "2018",
      title: "Global Expansion",
      description: "Expanded operations to serve customers in over 50 countries worldwide.",
    },
    {
      year: "2020",
      title: "Enterprise Platform",
      description: "Launched enterprise-grade platform with advanced security and compliance features.",
    },
    {
      year: "2022",
      title: "10M Documents",
      description: "Reached milestone of processing over 10 million documents securely.",
    },
    {
      year: "2024",
      title: "Next Generation AI",
      description: "Introduced next-generation AI with 99.9% accuracy and real-time processing.",
    },
  ]

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former cybersecurity executive with 15+ years experience in enterprise security solutions.",
      image: "/team-sarah.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@docverify.com",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      bio: "AI researcher and former Google engineer specializing in machine learning and document processing.",
      image: "/team-michael.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "michael@docverify.com",
      },
    },
    {
      name: "Emily Watson",
      role: "VP of Engineering",
      bio: "Full-stack engineer with expertise in scalable systems and cloud architecture.",
      image: "/team-emily.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emily@docverify.com",
      },
    },
    {
      name: "David Kim",
      role: "Head of Security",
      bio: "Cybersecurity expert with background in government and financial services security.",
      image: "/team-david.png",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "david@docverify.com",
      },
    },
  ]

  const certifications = [
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security, Availability & Confidentiality" },
    { name: "GDPR Compliant", description: "European Data Protection Regulation" },
    { name: "HIPAA Ready", description: "Healthcare Information Protection" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Breadcrumb */}
      <div className="pt-20 pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-12 relative overflow-hidden">
        <motion.div className="absolute inset-0 opacity-5" style={{ y }}>
          <Image src="/about-background-pattern.png" alt="Background pattern" fill className="object-cover" />
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">🏢 About DocVerify</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Leading the Future of
              <span className="text-primary block">Document Security</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              With over a decade of experience in cybersecurity and document authentication, we've built the most
              trusted platform for document verification worldwide. Our mission is to make document security accessible,
              reliable, and effortless for organizations of all sizes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary">Our Mission</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Securing Documents, Enabling Trust</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to provide the world's most secure, accurate, and user-friendly document verification
                platform. We believe that trust is the foundation of all business relationships, and secure document
                verification is essential for building that trust.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Target, text: "Make document verification accessible to all organizations" },
                  { icon: Shield, text: "Maintain the highest security and privacy standards" },
                  { icon: TrendingUp, text: "Continuously innovate with cutting-edge technology" },
                  { icon: Globe, text: "Serve customers globally with local compliance" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/mission-vision-illustration.png"
                alt="Mission and vision"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <div className="flex items-center space-x-2">
                  <Award className="h-6 w-6 text-primary" />
                  <div>
                    <div className="font-semibold text-sm">Industry Leader</div>
                    <div className="text-xs text-muted-foreground">Trusted Worldwide</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our core values guide everything we do, from product development to customer service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className={`h-8 w-8 ${value.color}`} />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary">Our Journey</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Company Timeline</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startup to industry leader, here's how we've grown and evolved over the years.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                className="flex items-start mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-primary">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-8 relative">
                  <div className="absolute top-4 left-1/2 w-0.5 h-16 bg-primary/20 -translate-x-1/2 last:hidden"></div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team brings together expertise from cybersecurity, AI, and enterprise software.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-primary">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-3">
                      <Button variant="ghost" size="sm" className="p-2">
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Twitter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-primary/10 text-primary">Certifications</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest industry standards for security, privacy, and compliance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of companies that trust DocVerify for their document verification needs. Let's build
              something great together.
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
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary transition-all duration-200 hover:scale-105 bg-transparent"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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
