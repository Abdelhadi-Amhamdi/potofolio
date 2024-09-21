import {createContext} from 'react'


export const ThemeContext = createContext(null)
export const ThemeHandlerContext = createContext(null)

export default function ThemeContextProvider({children, theme, handler}) {
    return (
        <ThemeContext.Provider value={theme}>
            <ThemeHandlerContext.Provider value={handler}>
                {children}
            </ThemeHandlerContext.Provider>
        </ThemeContext.Provider>
    )
}