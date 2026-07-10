import Image from 'next/image'
import {
  AiditeLogo,
  CerconLogo,
  IvoclarLogo,
  LavaLogo,
  VitaLogo,
} from '@/components/brand-logos'

export type CertificateData = {
  date: string
  jobNo: string
  doctorName: string
  patientName: string
  shade: string
  typeOfWork: string
  warranty: string
  unit1: string
  unit2: string
  unit3: string
  unit4: string
}

export const defaultCertificateData: CertificateData = {
  date: '07/05/2026',
  jobNo: '9966',
  doctorName: 'Dr. Mahendra Sharma',
  patientName: 'Mahendra Pal',
  shade: 'A1',
  typeOfWork: 'Zirconia',
  warranty: '10 Years',
  unit1: '1',
  unit2: '2',
  unit3: '3',
  unit4: '4',
}

// Color scheme definitions
export const colorSchemes = {
  ocean: {
    name: 'Ocean (Default)',
    gradient: 'linear-gradient(to right, #2bb673, #1ba7a0, #00a3e0)',
    labelColor: '#ff1818',
    titleColor: '#0b2942',
    imagePath: '/images/dental-implant.png',
  },
  professional: {
    name: 'Professional',
    gradient: 'linear-gradient(to right, #1e3a8a, #1e40af, #334155)',
    labelColor: '#dc2626',
    titleColor: '#ffffff',
    imagePath: '/images/dental-implant-professional.jpg',
  },
  premium: {
    name: 'Premium',
    gradient: 'linear-gradient(to right, #6d28d9, #5b21b6, #3730a3)',
    labelColor: '#ea580c',
    titleColor: '#ffffff',
    imagePath: '/images/dental-implant-premium.png',
  },
  elegant: {
    name: 'Elegant',
    gradient: 'linear-gradient(to right, #d97706, #b45309, #a16207)',
    labelColor: '#1e40af',
    titleColor: '#1f2937',
    imagePath: '/images/dental-implant-elegant.png',
  },
}

export type ColorScheme = keyof typeof colorSchemes

export function CertificateCard({ data, colorScheme = 'ocean' }: { data: CertificateData; colorScheme?: ColorScheme }) {
  const scheme = colorSchemes[colorScheme]
  
  const fields: { label: string; value: string }[] = [
    { label: 'Date', value: data.date },
    { label: 'Job no', value: data.jobNo },
    { label: 'Doctor name', value: data.doctorName },
    { label: 'Patient name', value: data.patientName },
    { label: 'Shade', value: data.shade },
    { label: 'Type of work', value: data.typeOfWork },
    { label: 'Warranty', value: data.warranty },
  ]

  const maxUnitLength = Math.max(
    data.unit1.length,
    data.unit2.length,
    data.unit3.length,
    data.unit4.length,
    1
  )

  const unitWidth = Math.max(90, maxUnitLength * 20 + 10)

  return (
    <div className="relative w-[768px] max-w-full overflow-hidden rounded-[2rem] bg-white shadow-2xl">
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: scheme.gradient,
            WebkitPrintColorAdjust: 'exact',
            printColorAdjust: 'exact',
          }}
        />
        <svg
          className="absolute inset-x-0 bottom-0 w-full"
          viewBox="0 0 800 60"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,60 L0,20 Q250,55 500,25 T800,30 L800,60 Z" fill="white" />
        </svg>

        <div className="relative flex items-center gap-4 px-8 pb-9 pt-2">
          <div className="flex h-19 w-19 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
            <Image
              src="/images/tooth-logo.png"
              alt="Digital Dental Lab logo"
              width={96}
              height={96}
              className="h-16 w-16 object-contain"
            />
          </div>

          <div className="min-w-0">
            <h1 className="font-serif text-3xl font-bold leading-tight text-balance" style={{ color: scheme.titleColor }}>
              Iram Digital Dental Lab
            </h1>
            <p className="font-sans text-xl font-semibold text-white">
              Certificate of Limited Warranty
            </p>
            <p className="mt-0.5 font-sans text-sm text-white font-medium">
              hereby offer a warranty for following done in our lab
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1.25fr_0.5fr] gap-6 px-8">
        <dl className="flex flex-col justify-center">
          {fields.map((field) => (
            <div
              key={field.label}
              className="flex items-center gap-2 border-white/15 py-0.2 last:border-b-0"
            >
              <dt className="w-32 shrink-0 font-sans text-xl font-bold" style={{ color: scheme.labelColor }}>
                {field.label}
              </dt>
              <span className="font-sans text-xl text-black">:</span>
              <dd className="font-sans text-2xl font-bold text-black">
                {field.value}
              </dd>
            </div>
          ))}
          
          <div className="flex items-center gap-2 border-white/15">
            <dt className="w-32 shrink-0 font-sans text-xl font-bold" style={{ color: scheme.labelColor }}>
              Unit
            </dt>
            <span className="font-sans text-xl text-black">:</span>
            <dd className="font-sans text-xl font-bold text-black">
              <div 
                className="relative flex items-center justify-center h-14"
                style={{ width: `${unitWidth}px`, minWidth: '140px' }}
              >
                <div 
                  className="absolute h-[2px] bg-black/60"
                  style={{ width: `${unitWidth - 30}px` }}
                ></div>
                <div className="absolute h-10 w-[2px] bg-black/60"></div>
                <span 
                  className="absolute text-black font-bold text-lg whitespace-nowrap"
                  style={{ top: '4px', left: '8px' }}
                >
                  {data.unit1}
                </span>
                <span 
                  className="absolute text-black font-bold text-lg whitespace-nowrap"
                  style={{ top: '4px', right: '8px' }}
                >
                  {data.unit2}
                </span>
                <span 
                  className="absolute text-black font-bold text-lg whitespace-nowrap"
                  style={{ bottom: '4px', left: '8px' }}
                >
                  {data.unit3}
                </span>
                <span 
                  className="absolute text-black font-bold text-lg whitespace-nowrap"
                  style={{ bottom: '4px', right: '8px' }}
                >
                  {data.unit4}
                </span>
              </div>
            </dd>
          </div>
        </dl>

        <div className="overflow-hidden rounded-2xl bg-white h-65" style={{width: '11rem'}}>
          <Image
            src={scheme.imagePath}
            alt="Dental implant with ceramic crown"
            width={600}
            height={600}
            className="h-full w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 px-8 pb-0">
        <CerconLogo />
        <VitaLogo />
        <LavaLogo />
        <IvoclarLogo />
        <AiditeLogo />
      </div>
    </div>
  )
}