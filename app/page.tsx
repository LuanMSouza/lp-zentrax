'use client'

import HowItWorks from "@/components/HowItWorks"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Footer from "@/components/Footer"
import Planos from "@/components/Planos"
import Nav from "@/components/Nav"
import ParaQuem from "@/components/ParaQuem"
import CtaFinal from "@/components/CtaFinal"
import { useEffect } from "react"
import { track } from "@/lib/tracking"

export default function Home() {

  useEffect(() => {
    track('ZentraX-LP')
  }, [])

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ParaQuem />
        <Planos />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
