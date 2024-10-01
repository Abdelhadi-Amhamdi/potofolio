import React, {createContext, useState} from 'react'

type StateContextType = {
    theme : string;
    themeHandler : (theme : string) => void
}

type contextProviderProps = {
    children : React.ReactNode
}

export const ThemeContext = createContext<null | StateContextType>(null)

export default function ThemeContextProvider({children} : contextProviderProps) {
    let t : string | null = window.localStorage.getItem("theme")
    if (!t) {
        t = "light"
        window.localStorage.setItem("theme", t)
    }
    const [theme, setTheme] = useState<string>(t)
    function themeHandler(theme : string) {
        window.localStorage.setItem("theme", theme)
        setTheme(theme)
    }
    const value = {
        theme,
        themeHandler
    }
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}