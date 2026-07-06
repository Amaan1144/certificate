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

export function CertificateCard({ data }: { data: CertificateData }) {
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
    <div className="relative w-[768px] max-w-full overflow-hidden rounded-[2rem] bg-black shadow-2xl">
      <div className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: '#1ba7a0',
            backgroundImage:
              'linear-gradient(to right, #2bb673, #1ba7a0, #00a3e0)',
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
          <path d="M0,60 L0,20 Q250,55 500,25 T800,30 L800,60 Z" fill="black" />
        </svg>

        <div className="relative flex items-center gap-4 px-8 pb-11 pt-6">
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white shadow-md">
            <Image
              src="/images/tooth-logo.png"
              alt="Digital Dental Lab logo"
              width={96}
              height={96}
              className="h-16 w-16 object-contain"
            />
          </div>

          <div className="min-w-0">
            <h1 className="font-serif text-3xl font-bold leading-tight text-[#0b2942] text-balance">
              Iram Digital Dental Lab
            </h1>
            <p className="mt-1 font-sans text-xl font-semibold text-white">
              Certificate of Limited Warranty
            </p>
            <p className="mt-0.5 font-sans text-sm text-white/90 font-medium">
              hereby offer a warranty for following done in our lab
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1.25fr_0.6fr] gap-6 px-8 pb-2">
        <dl className="flex flex-col justify-center">
          {fields.map((field) => (
            <div
              key={field.label}
              className="flex items-center gap-3 border-white/15 py-0.2 last:border-b-0"
            >
              <dt className="w-32 shrink-0 font-sans text-xl font-medium text-[#2bb6ea]">
                {field.label}
              </dt>
              <span className="font-sans text-xl text-white">:</span>
              <dd className="font-sans text-2xl font-bold text-white">
                {field.value}
              </dd>
            </div>
          ))}
          
          <div className="flex items-center gap-3 border-white/15 py-1">
            <dt className="w-32 shrink-0 font-sans text-xl font-medium text-[#2bb6ea]">
              Unit
            </dt>
            <span className="font-sans text-xl text-white">:</span>
            <dd className="font-sans text-xl font-bold text-white">
              <div 
                className="relative flex items-center justify-center h-14"
                style={{ width: `${unitWidth}px`, minWidth: '140px' }}
              >
                <div 
                  className="absolute h-[2px] bg-white/60"
                  style={{ width: `${unitWidth - 30}px` }}
                ></div>
                <div className="absolute h-10 w-[2px] bg-white/60"></div>
                <span 
                  className="absolute text-white font-bold text-lg whitespace-nowrap"
                  style={{ top: '4px', left: '8px' }}
                >
                  {data.unit1}
                </span>
                <span 
                  className="absolute text-white font-bold text-lg whitespace-nowrap"
                  style={{ top: '4px', right: '8px' }}
                >
                  {data.unit2}
                </span>
                <span 
                  className="absolute text-white font-bold text-lg whitespace-nowrap"
                  style={{ bottom: '4px', left: '8px' }}
                >
                  {data.unit3}
                </span>
                <span 
                  className="absolute text-white font-bold text-lg whitespace-nowrap"
                  style={{ bottom: '4px', right: '8px' }}
                >
                  {data.unit4}
                </span>
              </div>
            </dd>
          </div>
        </dl>

        <div className="overflow-hidden rounded-2xl bg-black h-68">
          <Image
            src="/images/dental-implant.png"
            alt="Dental implant with ceramic crown"
            width={600}
            height={600}
            className="h-full w-full mix-blend-hard-light"
          />
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5 px-8 pb-1">
        <CerconLogo />
        <VitaLogo />
        <LavaLogo />
        <IvoclarLogo />
        <AiditeLogo />
      </div>
    </div>
  )
}