import Image from 'next/image'

export type CertificateData = {
  labName: string
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
  labName: 'Iram Digital Dental Lab',
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
    imagePath: '/images/dental-implant-professional.png',
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
  rose: {
    name: 'Rose Gold',
    gradient: 'linear-gradient(to right, #be185d, #db2777, #ec4899)',
    labelColor: '#1e3a8a',
    titleColor: '#ffffff',
    imagePath: '/images/dental-implant-rose.png',
  },
  teal: {
    name: 'Deep Teal',
    gradient: 'linear-gradient(to right, #0d9488, #14b8a6, #2dd4bf)',
    labelColor: '#7c2d12',
    titleColor: '#1f2937',
    imagePath: '/images/dental-implant-teal.png',
  },
}

export type ColorScheme = keyof typeof colorSchemes

export function ClassicCadCamCard({ data, colorScheme = 'ocean' }: { data: CertificateData; colorScheme?: ColorScheme }) {
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
      <div className="relative" style={{borderBottom: "2px solid red"}}>
        <div
          className="absolute inset-0"
          style={{
            WebkitPrintColorAdjust: 'exact',
            printColorAdjust: 'exact',
          }}
        />
        <div className="relative flex items-center gap-5 px-8 py-5">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-white shadow-md">
            <Image
              src="/images/tooth-logo.png"
              alt="Digital Dental Lab logo"
              width={96}
              height={96}
              className="h-[4.25rem] w-[4.25rem] object-contain"
            />
          </div>
          <div>
          <div className="min-w-0 flex-1 bg-[#172d47]" style={{borderRadius: "20px", padding: "6px", paddingLeft: "17px", position: "absolute", right:"4px", top: "5px", width: "80%"}}>
            <h1 className="font-sans text-3xl font-extrabold uppercase leading-none tracking-[0.08em] text-white">
              {data.labName}
            </h1>
            <p className="mt-3 border-t border-white/70 pt-2 font-sans text-sm font-bold uppercase tracking-[0.22em] text-white/95">
              Certificate of Limited Warranty
            </p>
          </div>
          <div style={{position: 'absolute', bottom: '4px', color: '#172d47', right: "5%", fontWeight: '700', fontStyle: 'oblique'}}>ESTHETICS ALL YOU NEED</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-[1.25fr_0.5fr] gap-6 px-8 py-3" style={{paddingRight: '0px'}}>
        <dl className="flex flex-col justify-center">
          {fields.map((field) => (
            <div
              key={field.label}
              className="flex items-center gap-2 border-white/15 py-0.2 last:border-b-0"
            >
              <dt className="w-32 shrink-0 font-sans font-bold" style={{ color: 'black', fontSize: '18px' }}>
                {field.label}
              </dt>
              <span className="font-sans text-xl text-black">:</span>
              <dd className="font-sans text-2xl font-bold text-black">
                {field.value}
              </dd>
            </div>
          ))}
          
          <div className="flex items-center gap-2 border-white/15">
            <dt className="w-32 shrink-0 font-sans text-xl font-bold" style={{ color: 'black' }}>
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

        <div className="overflow-hidden bg-white h-55" style={{width: '11rem',position: 'relative',left: '26px', top: '10%'}}>
          <Image
            src={scheme.imagePath}
            alt="Dental implant with ceramic crown"
            width={600}
            height={600}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  )
}