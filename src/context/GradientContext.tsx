import React, { createContext } from 'react'
import { useState } from 'react';

interface Props {
    children: JSX.Element| JSX.Element[]
}

interface ImageColors{
    primary: string;
    secundary: string;
}

interface ContextProps{
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors) => void;
    setPrevMainColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({}  as ContextProps);

export const GradientProvider = ({children}: Props)=>{

    const [colors, setColors] = useState<ImageColors>({primary: 'transparent', secundary: 'transparent'})
    const [prevColors, setPrevColors] = useState<ImageColors>({primary: 'transparent', secundary: 'transparent'})

    const setMainColors = (colors: ImageColors)=>{
        setColors(colors);
    }

    const setPrevMainColors = (colors: ImageColors)=>{
        setPrevColors(colors);
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )

}
