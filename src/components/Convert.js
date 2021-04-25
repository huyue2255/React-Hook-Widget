import React, { useState, useEffect } from "react";
import axios from "axios";

const Convert = ({ language, text }) => {
  const [translatedText, setTranslate] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  // we leave the second object right here as a empty object to say that
  // we do not want to send along any information in the body request
  // instead, we want to provide a third argument to a second object
  useEffect(() => {
    // axios.post(
    //   "https://translation.googleapis.com/language/translate/v2",
    //   {},
    //   {
    //     params: {
    //         q: text,
    //         target: language.value,
    //         key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    //     },
    //   }
    // );
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      // console.log('test', test);
      setTranslate(data.data.translations[0].translatedText);
    };
    doTranslation();
  }, [language, debouncedText]);
  return (
    <div>
      <h1>output</h1>
      <h2 className="ui header">{translatedText}</h2>
    </div>
  );
};

export default Convert;
