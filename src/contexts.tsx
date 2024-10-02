import React, {createContext, useState} from 'react'

type StateContextType = {
    theme : string;
    lang : string,
    themeHandler : (theme : string) => void,
    langHandler : (lang : string) => void
}

type contextProviderProps = {
    children : React.ReactNode
}

export const ThemeContext = createContext<null | StateContextType>(null)

export default function ThemeContextProvider({children} : contextProviderProps) {
    let t : string | null = window.localStorage.getItem("theme")
    let l : string | null = window.localStorage.getItem('lang')

    if (!t) {
        t = "light"
        window.localStorage.setItem("theme", t)
    }
    if (!l) {
        l = 'en'
        window.localStorage.setItem('lang', l)
    }

    const [theme, setTheme] = useState<string>(t)
    const [lang, setLang] = useState<string>(l)

    function themeHandler(theme : string) {
        window.localStorage.setItem("theme", theme)
        setTheme(theme)
    }

    function langHandler(lang : string) {
        window.localStorage.setItem("lang", lang)
        setLang(lang)
    }

    const value = {
        theme,
        lang,
        themeHandler,
        langHandler
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}