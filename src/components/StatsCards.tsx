interface StatsCardsProps {
  isDark: boolean;
}

export function StatsCards({ isDark }: StatsCardsProps) {
  const stats = [
    {
      label: 'Total Income',
      value: '$21,100',
      change: '+5.4%',
      positive: true,
    },
    {
      label: 'Total Expenses',
      value: '$16,500',
      change: '-2.1%',
      positive: false,
    },
    {
      label: 'Net Balance',
      value: '$4,600',
      change: '+12.3%',
      positive: true,
    },
    {
      label: 'Investments',
      value: '$8,200',
      change: '+3.2%',
      positive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`p-10 rounded-2xl ${
            isDark ? 'bg-gray-800' : 'bg-white'
          } shadow-xl transition-transform duration-200 hover:scale-105`}
        >
          <h3 className={`text-xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {stat.label}
          </h3>
          <p className="text-5xl font-bold mt-6 mb-4">{stat.value}</p>
          <span className={`inline-flex items-center px-4 py-2 rounded-full text-base font-medium ${
            stat.positive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {stat.change}
          </span>
        </div>
      ))}
    </div>
  );
}