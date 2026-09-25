'use client'

import HowItWorks from "@/components/HowItWorks"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Footer from "@/components/Footer"
import Planos from "@/components/Planos"
import { useEffect } from "react"
import { track } from "@/lib/tracking"

export default function Home() {

  useEffect(() => {
    track('ZentraX-LP')
  }, [])

  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Planos />
      <Footer />
    </>
  )
}
