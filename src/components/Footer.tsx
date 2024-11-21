interface FooterProps {
  isDark: boolean;
}

export function Footer({ isDark }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className={`w-full text-center text-sm mt-8 ${
      isDark ? 'text-gray-400' : 'text-gray-600'
    }`}>
      © {currentYear} FlowWealth. All rights reserved.
    </div>
  );
}