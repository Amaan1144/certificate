'use client'

import { useEffect, useRef, useState } from 'react'
import {
  CertificateCard,
  defaultCertificateData,
  type CertificateData,
  colorSchemes,
  type ColorScheme,
} from '@/components/certificate-card'
import { CertificateForm } from '@/components/certificate-form'
import { Button } from '@/components/ui/button'
import { Printer } from 'lucide-react'

// Standard PVC card size — same as Aadhaar / ATM card (CR-80 spec)
// Height slightly increased for better visual proportion (54mm → 55mm)
const CARD_WIDTH_IN = 87 / 25.4 // 85.6mm
const CARD_HEIGHT_IN = 64 / 25.4 // 55mm (slightly increased from 53.98mm)
const PX_PER_IN = 96 // CSS reference pixel density used by browsers

// CertificateCard is authored at a fixed 768px design width
// Height increased for better proportions; quality improvements for print
const CARD_DESIGN_WIDTH = 768

export default function Page() {
  const [data, setData] = useState<CertificateData>(defaultCertificateData)
  const [colorScheme, setColorScheme] = useState<ColorScheme>('ocean')
  const measureRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  // Whenever the data changes, the card's natural height can change too
  // (longer names, etc.), so we re-measure and recompute the print scale.
  useEffect(() => {
    function computeScale() {
      const el = measureRef.current
      if (!el) return

      const designHeight = el.offsetHeight // natural height at 768px width

      const targetWidthPx = CARD_WIDTH_IN * PX_PER_IN
      const targetHeightPx = CARD_HEIGHT_IN * PX_PER_IN

      // Fill full width of CR-80 card - use width scale only
      const widthScale = targetWidthPx / CARD_DESIGN_WIDTH

      setScale(widthScale)
    }

    computeScale()
    window.addEventListener('resize', computeScale)
    return () => window.removeEventListener('resize', computeScale)
  }, [data])

  return (
    <>
      {/* On-screen app (hidden while printing) */}
      <main
        id="app-main"
        className="screen-only min-h-screen bg-black p-4 print:hidden sm:p-8"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[minmax(320px,420px)_1fr] lg:items-start">
          {/* Form */}
          <div className="lg:sticky lg:top-8">
            <CertificateForm data={data} onChange={setData} />
          </div>

          {/* Card preview */}
          <div className="flex flex-col items-center gap-5">
            {/* Color Scheme Selector */}
            <div className="w-full max-w-xl">
              <p className="text-white text-sm font-medium mb-3 text-center">Design Options</p>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {(Object.keys(colorSchemes) as ColorScheme[]).map((scheme) => (
                  <button
                    key={scheme}
                    onClick={() => setColorScheme(scheme)}
                    className={`py-2 px-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      colorScheme === scheme
                        ? 'bg-white text-black ring-2 ring-white'
                        : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    }`}
                  >
                    {colorSchemes[scheme].name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-center">
              <CertificateCard data={data} colorScheme={colorScheme} />
            </div>

            <Button
              onClick={() => window.print()}
              size="lg"
              className="gap-2 bg-white text-black hover:bg-white/90"
            >
              <Printer className="h-5 w-5" />
              Print PVC Card
            </Button>
          </div>
        </div>
      </main>

      {/* Hidden, off-screen clone used only to measure the card's natural
          height at its 768px design width. Not visible on screen; forced
          out of the print flow entirely via display:none below. */}
      <div
        ref={measureRef}
        id="measure-clone"
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: -99999,
          left: -99999,
          pointerEvents: 'none',
        }}
      >
        <CertificateCard data={data} colorScheme={colorScheme} />
      </div>

      {/* Print-only copy: the ONLY thing rendered on paper, scaled down to
          the exact CR-80 (Aadhaar / ATM) card dimensions. Kept in normal
          document flow for print (NOT position:fixed) — fixed-position
          elements repeat on every printed page, which was causing the
          card to print twice / duplicate blank pages. */}
      <div
        id="print-card"
        className="hidden print:block"
      >
        <div
          style={{
            width: CARD_DESIGN_WIDTH,
            // Use `zoom`, not `transform: scale()`. `transform` rasterizes
            // the gradient header and the SVG wave overlay separately at
            // full size and THEN shrinks the pixels, which leaves a
            // sub-pixel seam/hairline right where the wave meets the
            // black body. `zoom` re-lays-out and re-paints everything at
            // the target size directly, so the wave and gradient are
            // rendered together with no seam.
            zoom: scale,
          }}
        >
          <CertificateCard data={data} colorScheme={colorScheme} />
        </div>
      </div>

      {/* Print-only sizing rules: forces the physical page/card size.
          This is the ONLY print stylesheet in the app — do not add
          another @media print block elsewhere (e.g. globals.css), as
          conflicting rules there previously caused duplicate pages.
          High-quality rendering optimized for crisp, sharp prints. */}
      <style>{`
        @media print {
          #app-main,
          #measure-clone {
            display: none !important;
          }

          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
            print-color-adjust: exact !important;
            image-rendering: high-quality !important;
            -webkit-font-smoothing: antialiased !important;
            -moz-osx-font-smoothing: grayscale !important;
          }

          @page {
            size: ${CARD_WIDTH_IN}in ${CARD_HEIGHT_IN}in;
            margin: 0;
          }

          html, body {
            margin: 0 !important;
            padding: 0 !important;
            width: ${CARD_WIDTH_IN}in;
            height: ${CARD_HEIGHT_IN}in;
            overflow: hidden !important;
            background: #fff !important;
          }

          #print-card {
            width: ${CARD_WIDTH_IN}in;
            height: ${CARD_HEIGHT_IN}in;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          #print-card > div {
            border-radius: 0 !important;
            box-shadow: none !important;
            transform-origin: top left;
          }
        }
      `}</style>
    </>
  )
}