import React, { useState, useEffect } from "react";
import Dropdown from "components/Dropdown/Dropdown";
import axios from "axios";
const langOptions = [
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
];

const Translate = () => {
  const [selectedLang, setSelectedLang] = useState(langOptions[0]);
  const [text, setText] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  const [convert, setConvert] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setDebouncedText(text);
    }, 1000);
    return () => {
      clearTimeout(timeOutId);
    };
  }, [text]);

  useEffect(() => {
    const SearchData = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: selectedLang.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      data.data.translations.length > 0
        ? setConvert(data.data.translations[0].translatedText)
        : setConvert("");
    };

    SearchData();
  }, [selectedLang, debouncedText]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input
            className="input"
            value={text}
            placeholder="Please enter your query here"
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Dropdown
          selected={selectedLang}
          onSelectedChange={setSelectedLang}
          options={langOptions}
          field={"Language"}
        />
      </div>
      <div>
        <span>
          <h4>Output : </h4>
          <p>{convert}</p>
        </span>
      </div>
    </div>
  );
};

export default Translate;
