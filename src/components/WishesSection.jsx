import { useState } from "react";
import Reveal from "./Reveal";

const INITIAL_WISHES = [
  { name: "Azizbek", date: "10/15/2026", text: "Baxtingiz abadiy, oilangiz doimo mehr va quvonchga to'la bo'lsin!" },
  { name: "Madina", date: "10/16/2026", text: "Nikoh to'yingiz muborak! Bir umr ahil va baxtli yashanglar." },
  { name: "Shahzoda", date: "10/17/2026", text: "Yangi hayotingiz sevgi, hurmat va unutilmas lahzalarga boy bo'lsin!" },
  { name: "Javohir", date: "10/18/2026", text: "Sizlarga uzoq umr, mustahkam oila va cheksiz baxt tilayman!" },
  { name: "Dilnoza", date: "10/18/2026", text: "Muhabbatingiz yillar o'tgan sayin yanada mustahkam bo'lsin!" },
  { name: "Sardor", date: "10/18/2026", text: "To'yingiz muborak! Xonadoningizdan fayz, baraka va quvonch arimasin." },
];

const IDEAS = [
  "Baxtingiz abadiy bo'lsin!",
  "Oilangiz doimo mehr va quvonchga to'la bo'lsin!",
  "Sizlarga uzoq umr va sog'lik tilayman!",
  "Hayotingiz har kuni yangi baxtli lahzalarga boy bo'lsin!",
];

export default function WishesSection() {
  const [wishes, setWishes] = useState(INITIAL_WISHES);
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    setWishes([
      { name: name.trim(), date: new Date().toLocaleDateString("en-US"), text: text.trim() },
      ...wishes,
    ]);
    setName("");
    setText("");
  };

  return (
    <section className="relative z-10 px-6 md:px-10 pt-10 md:pt-12 pb-8 md:pb-10" style={{ backgroundColor: "transparent", color: "rgb(225, 188, 124)" }}>
      <div className="text-center">
        <h2 className="uppercase font-bold text-[20px] md:text-[26px] font-qellia" style={{ fontWeight: 700, letterSpacing: "0.04em" }}>
          <span dir="auto">Tilaklar</span>
        </h2>
      </div>
      <form onSubmit={submit} className="max-w-lg mx-auto rounded-2xl border p-6 shadow-xl backdrop-blur-xl" style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(225,188,124,0.3)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
        <div className="mb-4">
          <input
            type="text"
            required
            placeholder="Ismingiz*"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none placeholder:text-[#E1BC7C]/60"
            style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(225,188,124,0.3)", color: "rgb(225,188,124)" }}
          />
        </div>
        <textarea
          rows="4"
          required
          placeholder="Kelin-kuyovga tilagingiz...*"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none resize-none placeholder:text-[#E1BC7C]/60"
          style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(225,188,124,0.3)", color: "rgb(225,188,124)" }}
        />
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setText(IDEAS[Math.floor(Math.random() * IDEAS.length)])}
            className="rounded-lg p-2 transition-all hover:scale-110"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(225,188,124,0.3)", color: "rgb(225,188,124)" }}
          >
            🪄
          </button>
          <button type="submit" className="rounded-full px-6 py-2.5 font-semibold transition-transform hover:scale-105" style={{ background: "rgb(225,188,124)", color: "#2b2b2b" }}>
            Tilak yuborish
          </button>
        </div>
      </form>
      <Reveal className="mt-8 mx-auto max-h-[500px] w-full max-w-full space-y-3 overflow-y-auto pr-2 md:max-w-lg">
        {wishes.map((w, i) => (
          <div
            key={`${w.name}-${i}`}
            className="rounded-xl border p-4 shadow-xl backdrop-blur-xl transition-all hover:scale-[1.01]"
            style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(225,188,124,0.25)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}
          >
            <div className="flex items-start justify-between">
              <span className="text-base font-semibold" style={{ color: "rgb(225,188,124)" }}>{w.name}</span>
              <span className="text-xs" style={{ color: "rgba(225,188,124,0.65)" }}>{w.date}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: "rgb(225,188,124)" }}>{w.text}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
