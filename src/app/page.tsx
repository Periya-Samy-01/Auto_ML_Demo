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
import { Safari } from "@/components/ui/safari";
import { Iphone } from "@/components/ui/iphone";
import { AnimatedList } from "@/components/ui/animated-list";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const carouselData: MenuData[] = [
  {
    id: 1,
    img: '/images/Carousel_1.png',
    imgAlt: 'Platform screenshot 1',
    userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
    userComment: 'NodeForge saved us weeks of setup time!'
  },
  {
    id: 2,
    img: '/images/Carousel_2.png',
    imgAlt: 'Platform screenshot 2',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    userComment: 'Incredibly intuitive node-based canvas.'
  },
  {
    id: 3,
    img: '/images/Carousel_3.png',
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
        <div id="platform-sections" className="scroll-mt-24" />
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
              <h2 className="text-3xl font-bold">The Setup: <br/><span className="text-secondary">Dataset Preparation</span></h2>
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

        {/* Device Experience Section */}
        <div id="device-experience" className="scroll-mt-24" />
        <SectionContainer delay={0.1} className="px-6 mx-6 w-[calc(100%-3rem)]">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold">Built for <span className="text-primary">Every Device</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl text-balance mx-auto">
              Learn on the go with our mobile app, and unleash full training capabilities on desktop.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto w-full items-start">
            {/* Desktop Column */}
            <div className="flex flex-col space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">In Desktop</h3>
                <p className="text-muted-foreground">Full access to the node-based canvas, model training, and evaluation.</p>
              </div>
              <Safari videoSrc="/videos/training.mp4" className="w-full drop-shadow-2xl" />
              <div className="bg-surface/50 border border-border rounded-xl p-6 relative overflow-hidden h-[300px]">
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
                <AnimatedList delay={2000}>
                  <div className="flex items-center gap-4 bg-background p-4 rounded-lg border border-border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-lg">📂</div>
                    <div>
                      <p className="font-medium">Load Dataset</p>
                      <p className="text-sm text-muted-foreground">Import your raw data securely.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-background p-4 rounded-lg border border-border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-lg">🧹</div>
                    <div>
                      <p className="font-medium">Preprocess your data</p>
                      <p className="text-sm text-muted-foreground">Clean and transform automatically.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-background p-4 rounded-lg border border-border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-500 text-lg">🧠</div>
                    <div>
                      <p className="font-medium">Train model</p>
                      <p className="text-sm text-muted-foreground">Neural networks at your fingertips.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-background p-4 rounded-lg border border-border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-500 text-lg">📊</div>
                    <div>
                      <p className="font-medium">Evaluate model</p>
                      <p className="text-sm text-muted-foreground">Analyze precision and recall metrics.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-background p-4 rounded-lg border border-border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-500 text-lg">📈</div>
                    <div>
                      <p className="font-medium">Visualize Result</p>
                      <p className="text-sm text-muted-foreground">Generate interactive charts instantly.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-background p-4 rounded-lg border border-border shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-lg">🚀</div>
                    <div>
                      <p className="font-medium">Download the saved model</p>
                      <p className="text-sm text-muted-foreground">Export directly for production deployment.</p>
                    </div>
                  </div>
                </AnimatedList>
              </div>
            </div>

            {/* Mobile Column */}
            <div className="flex flex-col space-y-8 h-full">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">In Mobile 📱</h3>
                <p className="text-muted-foreground">Access our comprehensive Learning Center anytime, anywhere.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-8 items-center flex-1">
                <div className="bg-surface/50 border border-border rounded-xl p-6 flex flex-col justify-center h-fit flex-1 w-full my-auto">
                  <h4 className="text-xl font-medium mb-4">Learn on the Go</h4>
                  <p className="text-muted-foreground mb-4">
                    Our mobile experience is optimized purely for education. Prepare for your desktop session by learning key ML concepts, terminology, and best practices.
                  </p>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> Interactive tutorials</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> Video lectures</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> Quick-reference glossary</li>
                    <li className="flex items-center gap-2"><span className="text-primary">✓</span> Progress tracking</li>
                  </ul>
                </div>
                <div className="flex justify-center w-full sm:w-[260px] shrink-0 h-full max-h-[500px]">
                  <Iphone videoSrc="/videos/iphone.mp4" className="w-full h-full max-w-[260px] drop-shadow-2xl object-cover" />
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>

        {/* Competitor Comparison Section */}
        <section id="comparison" className="w-full pt-0 px-6 flex flex-col items-center scroll-mt-24">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl font-bold">Built for Learners. Designed for  <span className="text-primary">Clarity</span></h2>
            <p className="text-muted-foreground text-lg max-w-2xl text-balance">
              Why get lost in thousands of lines of boilerplate code or nested cloud menus?\n NodeForge lets you master ML fundamentals by interacting with your workflow visually, making concepts like hyperparameter tuning and model evaluation instantly clear.
            </p>
          </div>
          <ComparisonTable />
        </section>
      </main>

      {/* Footer */}
      <footer id="about-me" className="relative z-10 w-full border-t border-border bg-surface py-12 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <TooltipProvider delayDuration={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* GitHub */}
              <a href="https://github.com/Periya-Samy-01/Auto_ML_Platform_01" target="_blank" rel="noopener noreferrer" className="block h-full hover:-translate-y-1 transition-transform group">
                <Card className="h-full flex flex-col hover:border-primary/50 transition-colors bg-surface overflow-hidden border-border/50 p-0 gap-0">
                  <div className="relative w-full h-32 bg-background overflow-hidden border-b border-border/50 shrink-0">
                    <img src="/images/Github.png" alt="Source Code" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardHeader className="pt-4 pb-2 px-4 gap-0 border-none">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-full text-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <FaGithub className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">Source Code</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-5 flex-1 flex flex-col gap-3">
                    <CardDescription className="ml-12 font-medium text-foreground/80">Star on GitHub</CardDescription>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      Explore the open-source repository for NodeForge. Contributions, issues, and feature requests are always welcome from the community.
                    </p>
                    <div className="mt-auto pt-2 text-primary text-sm font-semibold flex items-center gap-1 group-hover:underline">
                      View Repository <span className="text-lg leading-none transition-transform group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/periya-samy-ganesan-687370266" target="_blank" rel="noopener noreferrer" className="block h-full hover:-translate-y-1 transition-transform group">
                <Card className="h-full flex flex-col hover:border-primary/50 transition-colors bg-surface overflow-hidden border-border/50 p-0 gap-0">
                  <div className="relative w-full h-32 bg-background overflow-hidden border-b border-border/50 shrink-0">
                    <img src="/images/LinkedIn.png" alt="Connect" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <CardHeader className="pt-4 pb-2 px-4 gap-0 border-none">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-full text-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                        <FaLinkedin className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">Connect</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-5 flex-1 flex flex-col gap-3">
                    <CardDescription className="ml-12 font-medium text-foreground/80">Follow on LinkedIn</CardDescription>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      Connect with the creator, follow the latest updates on the platform, and join the professional network discussing the future of AutoML.
                    </p>
                    <div className="mt-auto pt-2 text-primary text-sm font-semibold flex items-center gap-1 group-hover:underline">
                      Connect <span className="text-lg leading-none transition-transform group-hover:translate-x-1">&rarr;</span>
                    </div>
                  </CardContent>
                </Card>
              </a>

              {/* About Me */}
              <div className="block h-full text-left">
                <Card className="h-full flex flex-col bg-surface overflow-hidden border-border/50 p-0 gap-0">
                  <div className="relative w-full h-32 bg-background overflow-hidden border-b border-border/50 shrink-0">
                    <img src="/images/personal.png" alt="About the Creator" className="w-full h-full object-cover" />
                  </div>
                  <CardHeader className="pt-4 pb-2 px-4 gap-0 border-none">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-full text-foreground">
                        <User className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">About the Creator</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-5 flex-1 flex flex-col gap-3">
                    <CardDescription className="ml-12 font-medium text-foreground/80">Bio & Portfolio</CardDescription>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Hi, I’m Periya Samy, an AI/ML Engineer and Software Developer. I build intuitive web applications and intelligent platforms like NodeForge to break down complex machine learning systems into accessible, highly visual workflows.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Deployment Link */}
              <div className="block h-full text-left">
                <Card className="h-full flex flex-col bg-surface overflow-hidden border-border/50 p-0 gap-0">
                  <div className="relative w-full h-32 bg-background overflow-hidden border-b border-border/50 shrink-0">
                    <img src="/images/live.png" alt="Live Deployment" className="w-full h-full object-cover" />
                  </div>
                  <CardHeader className="pt-4 pb-2 px-4 gap-0 border-none">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-full text-foreground">
                        <Server className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg">Live Deployment</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-5 flex-1 flex flex-col gap-3">
                    <CardDescription className="ml-12 font-medium text-foreground/80">Try it out now</CardDescription>
                    <div className="text-sm text-muted-foreground leading-relaxed space-y-2 mt-1">
                      <p><strong className="text-foreground/80 font-medium">Free-Tier Hosting:</strong> Running entirely on community cloud servers.</p>
                      <p><strong className="text-foreground/80 font-medium">60s Cold Start:</strong> Allow up to a minute for the initial load to wake the server.</p>
                      <p><strong className="text-foreground/80 font-medium">Temporary Cache:</strong> Active pipelines rely on a temporary Redis session.</p>
                      <p><strong className="text-foreground/80 font-medium">Manual Refresh:</strong> Contact me directly if you hit a timeout or instance drop.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

            </div>
          </TooltipProvider>

          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} NodeForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
