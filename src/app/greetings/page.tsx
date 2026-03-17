"use client";

const Home = () => {
  const hour = new Date().toLocaleString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return (
    <div className="bg-linear-to-r from-sky-500 to-indigo-500 w-screen h-screen flex flex-col items-center justify-center">
      <div className="text-4xl text-white font-bold">{hour}</div>
      <div className="text-white">
        {hour >= "00:00" && hour < "12:00" && "Bom dia 😀"}
        {hour >= "12:00" && hour < "18:00" && "Boa tarde 😎"}
        {hour >= "18:00" && hour <= "23:59" && "Boa noite 😴"}
      </div>
    </div>
  );
};

export default Home;
