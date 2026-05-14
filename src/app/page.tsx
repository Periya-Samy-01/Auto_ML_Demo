"use client";
import * as React from "react";

import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { SectionContainer } from "@/components/layout/section-container";
import { LazyVideo } from "@/components/ui/lazy-video";

import { Server, User } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ComparisonTable } from "@/components/ui/comparison-table";
import HeroSection, { type MenuData } from "@/components/ui/hero_section_42";
import { Navbar } from "@/components/ui/navbar";

const carouselData: MenuData[] = [
  {
    id: 1,
    img: '/images/placeholder-1.webp',
    imgAlt: 'Platform screenshot 1',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
    userComment: 'This AutoML platform saved us weeks of setup time!'
  },
  {
    id: 2,
    img: '/images/placeholder-2.webp',
    imgAlt: 'Platform screenshot 2',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    userComment: 'Incredibly intuitive node-based canvas.'
  },
  {
    id: 3,
    img: '/images/placeholder-3.webp',
    imgAlt: 'Platform screenshot 3',
    userAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
    userComment: 'Model comparison made choosing the best algorithm effortless.'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Navbar />
      {/* Background ambient glow */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <main className="relative z-10 flex flex-col items-center pb-24 space-y-16">
        {/* Hero Section */}
        <HeroSection menudata={carouselData} />

        {/* Section 1: The Prologue - Learning Center */}
        <SectionContainer delay={0.1} className="px-6 mx-6 w-[calc(100%-3rem)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video w-full">
              <LazyVideo 
                src="/videos/learning.mp4" 
                poster="/images/poster-learning.webp"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">The Prologue: <br/><span className="text-primary">Learning Center</span></h2>
              <p className="text-muted-foreground text-lg">
                Not sure where to begin? Our integrated Learning Center introduces fundamental machine learning concepts before you even touch a dataset.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Interactive Guides</Badge>
                <Badge variant="secondary">Glossary</Badge>
                <Badge variant="secondary">Video Tutorials</Badge>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Section 2: The Setup - Dataset */}
        <SectionContainer delay={0.1} className="px-6 mx-6 w-[calc(100%-3rem)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">The Setup: <br/><span className="text-primary">Dataset Preparation</span></h2>
              <p className="text-muted-foreground text-lg">
                Upload your CSVs with a single click. The platform automatically infers data types, detects anomalies, and visualizes distributions so you understand your data instantly.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Auto-Profiling</Badge>
                <Badge variant="secondary">Missing Value Handling</Badge>
                <Badge variant="secondary">Feature Engineering</Badge>
              </div>
            </div>
            <div className="aspect-video w-full order-1 md:order-2">
              <LazyVideo 
                src="/videos/dataset.mp4" 
                poster="/images/poster-dataset.webp"
              />
            </div>
          </div>
        </SectionContainer>

        {/* Section 3: The Action - Model Training */}
        <SectionContainer delay={0.1} className="px-6 mx-6 w-[calc(100%-3rem)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-video w-full">
              <LazyVideo 
                src="/videos/training.mp4" 
                poster="/images/poster-training.webp"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">The Action: <br/><span className="text-primary">Node-Based Canvas</span></h2>
              <p className="text-muted-foreground text-lg">
                Connect data sources to algorithms visually. Our node-based architecture gives you complete transparency into the AutoML pipeline without writing a single line of code.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">XGBoost</Badge>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">Random Forest</Badge>
                <Badge className="bg-primary/20 text-primary hover:bg-primary/30 border-none">LightGBM</Badge>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Section 4: The Climax - Model Comparison */}
        <SectionContainer delay={0.1} className="px-6 mx-6 w-[calc(100%-3rem)]">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="text-3xl font-bold">The Climax: <br/><span className="text-secondary">Model Comparison</span></h2>
              <p className="text-muted-foreground text-lg">
                Evaluate your trained models head-to-head. Compare accuracy, F1 scores, and confusion matrices to pick the true winner for your deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 border-none">ROC-AUC Curve</Badge>
                <Badge className="bg-secondary/20 text-secondary hover:bg-secondary/30 border-none">Feature Importance</Badge>
              </div>
            </div>
            <div className="aspect-video w-full order-1 md:order-2">
              <LazyVideo 
                src="/videos/comparison.mp4" 
                poster="/images/poster-comparison.webp"
              />
            </div>
          </div>
        </SectionContainer>

        {/* Competitor Comparison Section */}
        <section className="w-full pt-16 px-6 flex flex-col items-center">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold">How We <span className="text-primary">Compare</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl text-balance">
              Why spend weeks setting up infrastructure when you can get results in minutes?
            </p>
          </div>
          <ComparisonTable />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-border bg-surface py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <TooltipProvider delayDuration={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* GitHub */}
              <a href="#" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <FaGithub className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Source Code</h4>
                  <p className="text-sm text-muted-foreground">Star on GitHub</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a href="#" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
                <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">Connect</h4>
                  <p className="text-sm text-muted-foreground">Follow on LinkedIn</p>
                </div>
              </a>

              {/* About Me */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-secondary/20 group-hover:text-secondary transition-colors">
                      <User className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">About the Creator</h4>
                      <p className="text-sm text-muted-foreground">Bio & Portfolio</p>
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p>Hi! I built this platform to make AI more accessible.</p>
                </TooltipContent>
              </Tooltip>

              {/* Deployment Link */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
                    <div className="p-3 bg-white/5 rounded-full group-hover:bg-secondary/20 group-hover:text-secondary transition-colors">
                      <Server className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">Live Deployment</h4>
                      <p className="text-sm text-muted-foreground">Try it out now</p>
                    </div>
                  </a>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-[200px] text-center">
                  <p>Hosted on a free-tier server. May take ~50 seconds to wake up from cold start.</p>
                </TooltipContent>
              </Tooltip>

            </div>
          </TooltipProvider>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} AutoML Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
