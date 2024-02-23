import React, { useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Hoang Loi", "Front-end Developer", 'UI/UX Designer'];

const ChangingText = () => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="text-3xl font-bold lg:text-4xl text-slate-700 dark:text-slate-400">
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
};

export default ChangingText;
