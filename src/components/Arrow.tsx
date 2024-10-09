import { useContext } from "react";
import {ThemeContext} from '../contexts'


export default function Arrow() {
    const {theme} = useContext(ThemeContext) || {}
    return (
        <svg width="41" height="46" viewBox="0 0 41 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M0.897971 43.5052C0.348569 43.5616 -0.0511304 44.0526 0.00521856 44.602C0.0615675 45.1514 0.552626 45.5511 1.10203 45.4948L0.897971 43.5052ZM10 5L18.976 12.2639L20.7787 0.858505L10 5ZM1.10203 45.4948C7.65876 44.8223 17.5064 43.0076 25.7447 39.7291C29.861 38.0911 33.6384 36.0633 36.4024 33.5816C39.1747 31.0926 41 28.0757 41 24.5H39C39 27.3243 37.5753 29.8407 35.0663 32.0934C32.5491 34.3534 29.014 36.2756 25.0053 37.8709C16.9936 41.0591 7.34124 42.8444 0.897971 43.5052L1.10203 45.4948ZM41 24.5C41 18.9426 38.6719 14.7827 34.7226 11.7136C30.8223 8.68258 25.3692 6.73266 19.0913 5.42574L18.6837 7.38376C24.8463 8.66667 29.9494 10.5372 33.4953 13.2928C36.9921 16.0102 39 19.6031 39 24.5H41Z"
                fill={`${theme == 'light' ? "black" : "#ffffff"}`}
            />
        </svg>
    )
}
