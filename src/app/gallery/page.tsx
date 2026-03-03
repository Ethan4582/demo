'use client';

import { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import { components } from "@/src/data/components";

const TAGS = [
   "RECENT",
   "POPULAR",
   "SCROLL",
   "Three.js",
   "MISC",
   "3D",
   "MENU",
   "TRANSITION",
   "SVG",
   "LANDING PAGE",
];

export default function GalleryPage() {
   const [activeTag, setActiveTag] = useState("RECENT");

   // Filtering logic: "RECENT" shows all in this demo, otherwise filter by category
   const filteredComponents = activeTag === "RECENT"
      ? components
      : components.filter(c => c.category === activeTag);

   return (
      <div
         className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
         style={{ backgroundImage: "url('/assets/Hero.png')" }}
      >
         {/* Overlay for better readability */}
         <div className="min-h-screen bg-black/40 backdrop-blur-[2px]">
            {/* Container */}
            <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-12 sm:py-20">
               {/* Navigation / Filter pills */}
               <div className="flex items-center gap-3 overflow-x-auto pb-8 scrollbar-hide">
                  {TAGS.map((tag) => (
                     <button
                        key={tag}
                        onClick={() => setActiveTag(tag)}
                        className={`shrink-0 rounded-full border px-5 py-2 text-[11px] font-semibold uppercase tracking-wider transition-all ${activeTag === tag
                           ? "bg-white border-white text-black shadow-lg scale-105"
                           : "border-white/20 bg-white/10 text-white/70 hover:border-white/50 hover:text-white backdrop-blur-md"
                           }`}
                     >
                        {tag}
                     </button>
                  ))}
               </div>

               {/* Title */}
               <div className="mb-12">
                  <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                     All Tutorials
                  </h1>
                  <div className="mt-4 h-1 w-20 bg-blue-500 rounded-full" />
               </div>

               {/* Grid */}
               <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredComponents.length > 0 ? (
                     filteredComponents.map((component) => (
                        <Link
                           key={component.id}
                           href={`/gallery/${component.id}`}
                           className="group flex flex-col"
                        >
                           {/* Image Container */}
                           <div className="relative aspect-[1.3/1] overflow-hidden rounded-[24px] bg-white/5 shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-blue-500/10 border border-white/10">
                              <Image
                                 src={component.image}
                                 alt={component.name}
                                 fill
                                 className="object-cover transition-transform duration-700 group-hover:scale-110"
                                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              />
                           </div>

                           {/* Text Content */}
                           <div className="mt-6 flex flex-col">
                              {/* Date */}
                              <p className="text-[13px] font-medium text-white/40">
                                 {component.date}
                              </p>

                              {/* Sub-tag */}
                              <div className="mt-3">
                                 <span className="rounded-lg bg-blue-500/20 border border-blue-500/30 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-300 backdrop-blur-md">
                                    {component.category}
                                 </span>
                              </div>

                              {/* Title */}
                              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">
                                 {component.name}
                              </h2>

                              {/* Description */}
                              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/60">
                                 {component.shortDescription}
                              </p>

                              {/* Bottom link indication */}
                              <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-400 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                                 Explore Project
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                 </svg>
                              </div>
                           </div>
                        </Link>
                     ))
                  ) : (
                     <div className="col-span-full py-20 text-center">
                        <p className="text-white/40 italic">No tutorials found for this category yet.</p>
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
}
