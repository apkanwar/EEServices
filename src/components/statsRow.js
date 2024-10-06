const StatsRow = () => {
  const stats = [
    { value: '100+', label: 'Employed' },
    { value: '200+', label: 'Trained' },
    { value: '29', label: 'Clients Served' },
    { value: '6', label: 'Cities' },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-12 py-20">
      <div className="grid grid-cols-2 md:grid-cols-4 justify-center items-center gap-20">
        {stats.map((stat, index) => (
          <section key={index} className="flex flex-col gap-2 items-center">
            <div className="lg:text-4xl text-3xl font-bold font-main">{stat.value}</div>
            <div className="lg:text-lg text-sm font-medium font-dText">{stat.label}</div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default StatsRow;
