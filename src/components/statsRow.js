
const StatsRow = () => {
  const stats = [
    { value: '100+', label: 'Employed' },
    { value: '200+', label: 'Trained' },
    { value: '13', label: 'Clients Served' },
    { value: '6', label: 'Cities' },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-12 py-20">
      <div className="flex justify-center items-center gap-20">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <div className="text-4xl font-bold font-main">{stat.value}</div>
            <div className="text-md font-medium font-dText">{stat.label}</div>
          </div>
        ))}
      </div>
      {/* <p className="text-lg font-semibold italic text-plum font-dText">
        and we&apos;re just getting started
      </p> */}
    </div>
  );
};

export default StatsRow;
