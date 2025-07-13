
"use client";

import { cn } from "@/lib/utils";

export const CodeEditorWindow = ({ children, activeTab }: { children: React.ReactNode, activeTab: string }) => {
  const tabs = ["horyu.tsx", "skills.ts", "experience.json"];
  
  return (
    <div className="h-full w-full flex-shrink-0 bg-[#1e1e1e] border border-border rounded-lg shadow-2xl overflow-hidden flex flex-col">
      <div className="flex-shrink-0 flex items-center h-10 px-4 bg-background border-b border-border">
          <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-red-500 rounded-full"></span>
              <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="flex-1 flex items-center justify-start ml-4">
              {tabs.map(tab => (
                  <div key={tab} className={cn(
                      "px-4 h-full flex items-center text-sm border-b-2 transition-colors duration-300", 
                      activeTab === tab ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                  )}>
                      {tab}
                  </div>
              ))}
          </div>
      </div>
      <div className="flex-1 overflow-hidden font-code">
        {children}
      </div>
    </div>
  )
};
