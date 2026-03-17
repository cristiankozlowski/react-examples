type Props = {
  rate: number;
};

const RatingEmoji = ({ rate }: Props) => {
  if (rate < 0) rate = 0;
  if (rate > 5) rate = 5;

  const emojis = ["", "😞", "😕", "😑", "🙂", "😀"];
  const rateInt = Math.round(rate);

  const emoji = `${emojis[rateInt]}`.repeat(rateInt) + "😶".repeat(5 - rateInt);

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <div className="text-4xl text-white font-bold bg-gray-500 p-2 rounded">
        {rate}
      </div>
      <div className="text-4xl">{emoji}</div>
    </div>
  );
};

export default RatingEmoji;
