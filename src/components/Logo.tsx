import { Workflow } from 'lucide-react';

interface LogoProps {
  isDark: boolean;
}

export function Logo({ isDark }: LogoProps) {
  return (
    <div className="flex items-center space-x-2">
      <Workflow 
        size={32} 
        className="text-[#220041]"
        style={{ 
          color: isDark ? '#fff' : '#220041'
        }}
      />
      <span 
        className="text-xl font-bold tracking-tight"
        style={{ 
          color: isDark ? '#fff' : '#220041'
        }}
      >
        FlowWealth
      </span>
    </div>
  );
}