"use client"

import { useState } from "react"

type SquareProps = {
    value: string,
    onSquareClick: any
}

export default function Square({value, onSquareClick}: SquareProps) {
    
    return(
        <button
            className="w-20 h-20 bg-white text-black font-black text-6xl"
            onClick={onSquareClick}
        >
            { value }
        </button>
    )
}