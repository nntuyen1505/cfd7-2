import { createContext, useContext, useState } from "react";

const Context = createContext();
export const TranslateProvider = ({ children, ...props }) => {
  const [translate, setTranslate] = useState(props.translate);
  const [lang, setLang] = useState("en");
  const t = (key) => {
    return translate?.[lang]?.[key] || [key];
  };

  const selectLang=(lang)=>{
      setLang(lang)
  }
  return <Context.Provider value={{t,selectLang}}>{children}</Context.Provider>;
};

export const useTranslate=()=>useContext(Context)
