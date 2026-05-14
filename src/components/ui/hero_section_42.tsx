'use client'

import { useEffect, useState, useRef, useCallback } from 'react'

import { ArrowRightIcon } from 'lucide-react'

import Autoplay from 'embla-carousel-autoplay'

import { Separator } from '@/components/ui/separator'

import { Button } from '@/components/ui/button'
import { type CarouselApi, Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

export type MenuData = {
  id: number
  img: string
  imgAlt: string
  userAvatar: string
  userComment: string
}

const HeroSection = ({ menudata }: { menudata: MenuData[] }) => {
  const [mainApi, setMainApi] = useState<CarouselApi>()
  const [thumbApi, setThumbApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!mainApi) {
      return
    }

    setCurrent(mainApi.selectedScrollSnap())
    mainApi.on('select', () => {
      const selectedIndex = mainApi.selectedScrollSnap()
      setCurrent(selectedIndex)
      thumbApi?.scrollTo(selectedIndex)
    })
  }, [mainApi, thumbApi])

  useEffect(() => {
    if (!thumbApi) {
      return
    }

    thumbApi.on('select', () => {
      const selectedIndex = thumbApi.selectedScrollSnap()
      setCurrent(selectedIndex)
      mainApi?.scrollTo(selectedIndex)
    })
  }, [thumbApi, mainApi])

  const handleThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index)
    },
    [mainApi]
  )

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }))

  return (
    <section className='relative overflow-hidden flex-1 pt-0 pb-16 sm:pb-16 lg:pt-4 lg:pb-24 w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background border-b border-border/40'>
      <div className='mx-auto flex h-full max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Hero Header */}
        <div className='grid grid-cols-1 gap-6 gap-y-12 md:gap-y-16 lg:grid-cols-5 items-center mt-8'>
          <div className='flex w-full flex-col justify-center gap-5 max-lg:items-center lg:col-span-2'>
            <div className="flex flex-wrap justify-start max-lg:justify-center gap-3 mb-2">
              <div className="border border-secondary/30 bg-secondary/10 text-secondary px-4 py-1.5 text-sm rounded-full">
                Open Source
              </div>
              <div className="border border-primary/30 bg-primary/10 text-primary px-4 py-1.5 text-sm rounded-full">
                Artificial Intelligence
              </div>
            </div>
            
            <h1 className='text-4xl leading-[1.2] font-bold text-balance max-lg:text-center sm:text-5xl lg:text-6xl tracking-tight'>
              Machine Learning, <span className="text-primary">Automated</span> & <span className="text-secondary">Accessible</span>.
            </h1>

            <p className='text-muted-foreground max-w-xl text-xl max-lg:text-center mt-2'>
              A no-code AutoML platform built for everyone. Go from raw datasets to evaluated models in minutes using a powerful node-based canvas.
            </p>

            <div className='flex items-center gap-4 mt-4'>
              <Button
                asChild
                size='lg'
                className='group relative w-fit overflow-hidden rounded-full text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
              >
                <a href='#'>
                  Order now
                  <ArrowRightIcon className='transition-transform duration-200 group-hover:translate-x-0.5' />
                </a>
              </Button>
              <Button
                size='lg'
                asChild
                className='bg-primary/10 hover:bg-primary/20 text-primary rounded-full text-base'
              >
                <a href='#'>Book table</a>
              </Button>
            </div>
          </div>

          <Carousel
            className='w-full lg:col-span-3'
            setApi={setMainApi}
            plugins={[plugin.current]}
            opts={{
              loop: true
            }}
          >
            <CarouselContent>
              {menudata.map(item => (
                <CarouselItem key={item.id} className='flex w-full items-center justify-center p-4'>
                  <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-surface group">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10 pointer-events-none" />
                    <img src={item.img} alt={item.imgAlt} className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-105' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className='flex justify-center w-full max-w-5xl mx-auto'>
          <Carousel
            className='relative w-full'
            setApi={setThumbApi}
            opts={{
              loop: true
            }}
          >
            <div className='from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r via-background/80 to-transparent' />
            <div className='from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l via-background/80 to-transparent' />
            <CarouselContent className='my-2 flex items-center'>
              {menudata.map((item, index) => (
                <CarouselItem
                  key={item.id}
                  className={cn('basis-1/2 cursor-pointer sm:basis-1/3 md:basis-1/3 lg:basis-1/3 transition-all duration-500 ease-out py-4', current === index ? 'scale-110 z-20' : 'scale-90 opacity-40 hover:opacity-70')}
                  onClick={() => handleThumbClick(index)}
                >
                  <div className={cn('relative w-full aspect-video rounded-xl overflow-hidden transition-all duration-500', current === index ? 'border-2 border-primary shadow-[0_0_30px_rgba(79,70,229,0.3)]' : 'border border-border shadow-md')}>
                    <img src={item.img} alt={item.imgAlt} className='w-full h-full object-cover' />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
