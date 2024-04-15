import Game from "@/components/layouts/game";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-center text-5xl">React: Tic-Tac-Toe</h1>
      <p>This is from React tic-tac-toe tutorials!</p>
      <div className="w-full flex items-center justify-center text-base py-28">
        <Game />
      </div>
    </main>
  );
}
