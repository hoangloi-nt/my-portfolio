import React, { useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const TEXTS = ["Hoang Loi", "Frontend Developer"];

const ChangingText = () => {
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 2000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="inline-block text-xl font-bold lg:text-2xl text-primary dark:text-white">
      <TextTransition springConfig={presets.wobbly}>
        {TEXTS[index % TEXTS.length]}
      </TextTransition>
    </div>
  );
};

export default ChangingText;
