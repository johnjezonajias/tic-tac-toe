"use client"

import { useState } from "react";
import Board from "../ui/board";

export default function Game() {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handlePlay(nextSquares: any) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove: number) {
        setCurrentMove(nextMove);
    }
    
    const moves = history.map((squares, move) => {
        let description;

        if (move > 0) {
          description = 'Back ' + move + ' move';
        } else {
          description = 'Restart Game';
        }
        
        return (
          <li key={move} className="mb-1">
            <button onClick={() => jumpTo(move)} className="w-full text-small text-stone-600 text-center py-2 px-8 border border-stone-800 rounded-md">{description}</button>
          </li>
        );
    });

    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex flex-col gap-y-10 text-center">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="w-full">
                <ol>
                    {moves}
                </ol>
            </div>
        </div>
    );
}