import Image from 'next/image'

export function AiditeLogo() {
  return (
    <div className="flex h-9 items-center justify-center rounded-md bg-white px-3">
      <Image
        src="/images/aidite-logo.png"
        alt="Aidite"
        width={120}
        height={40}
        className="h-7 w-auto object-contain"
      />
    </div>
  )
}

export function CerconLogo() {
  return (
    <div className="flex h-9 items-center justify-center rounded-md bg-[#1a5fb4] px-4">
      <span className="font-sans text-2xl font-bold lowercase tracking-tight text-white">
        cercon
        <sup className="ml-0.5 text-xs">&reg;</sup>
      </span>
    </div>
  )
}

export function VitaLogo() {
  return (
    <div className="flex h-9 items-center justify-center px-2">
      <span className="font-serif text-3xl font-black tracking-tight text-[#e6007e]">
        VITA
      </span>
    </div>
  )
}

export function LavaLogo() {
  return (
    <div className="flex h-9 items-center gap-1.5 rounded-md bg-[#111111] px-3">
      <span className="font-sans text-2xl font-extrabold leading-none text-[#e2231a]">
        3M
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-sans text-xl font-bold text-white">
          Lava<sup className="ml-0.5 text-[0.5rem] align-super">&trade;</sup>
        </span>
        <span className="font-sans text-[0.6rem] font-semibold tracking-widest text-[#9ca3af]">
          PLUS
        </span>
      </span>
    </div>
  )
}

export function IvoclarLogo() {
  return (
    <div className="flex h-7 flex-col justify-center px-2 pb-2">
      <div className="mb-1 flex items-end gap-[3px]" aria-hidden="true">
        <span className="h-1 w-1 rounded-full bg-[#8bc53f]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#8bc53f]" />
        <span className="h-1 w-1 rounded-full bg-[#00a3e0]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#00a3e0]" />
        <span className="h-1 w-1 rounded-full bg-[#f7941e]" />
        <span className="h-2 w-1 rounded-full bg-[#8bc53f]" />
        <span className="h-1 w-1 rounded-full bg-[#00a3e0]" />
      </div>
      <span className="font-sans text-lg font-semibold leading-none text-black">
        ivoclar
      </span>
      <span className="font-sans text-lg font-semibold leading-none text-black">
        vivadent<span className="text-[#00a3e0]">:</span>
      </span>
    </div>
  )
}
