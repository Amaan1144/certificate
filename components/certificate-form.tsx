'use client'

import type { CertificateData } from '@/components/certificate-card'

const inputFields: { key: keyof CertificateData; label: string }[] = [
  { key: 'date', label: 'Date' },
  { key: 'jobNo', label: 'Job no' },
  { key: 'doctorName', label: 'Doctor name' },
  { key: 'patientName', label: 'Patient name' },
  { key: 'shade', label: 'Shade' },
  { key: 'typeOfWork', label: 'Type of work' },
  { key: 'warranty', label: 'Warranty' },
]

export function CertificateForm({
  data,
  onChange,
}: {
  data: CertificateData
  onChange: (data: CertificateData) => void
}) {
  return (
    <form className="rounded-2xl border border-white/10 bg-neutral-900 p-6 shadow-xl">
      <h2 className="font-sans text-lg font-semibold text-white">
        Card Details
      </h2>
      <p className="mt-1 font-sans text-sm text-neutral-400">
        Edit any field to update the certificate preview.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {inputFields.map((field) => (
          <div key={field.key} className="flex flex-col gap-1.5">
            <label
              htmlFor={field.key}
              className="font-sans text-sm font-medium text-neutral-300"
            >
              {field.label}
            </label>
            <input
              id={field.key}
              type="text"
              value={data[field.key]}
              onChange={(e) =>
                onChange({ ...data, [field.key]: e.target.value })
              }
              className="rounded-lg border border-white/10 bg-neutral-800 px-3 py-2 font-sans text-sm text-white outline-none transition focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/30"
            />
          </div>
        ))}

        {/* 4 Unit inputs in grid */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-sm font-medium text-neutral-300">
            Units (4 values)
          </label>
          <div className="grid grid-cols-4 gap-2">
            <input
              type="text"
              value={data.unit1}
              onChange={(e) =>
                onChange({ ...data, unit1: e.target.value })
              }
              placeholder="Top Left"
              className="rounded-lg border border-white/10 bg-neutral-800 px-2 py-2 font-sans text-sm text-white text-center outline-none transition focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/30"
            />
            <input
              type="text"
              value={data.unit2}
              onChange={(e) =>
                onChange({ ...data, unit2: e.target.value })
              }
              placeholder="Top Right"
              className="rounded-lg border border-white/10 bg-neutral-800 px-2 py-2 font-sans text-sm text-white text-center outline-none transition focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/30"
            />
            <input
              type="text"
              value={data.unit3}
              onChange={(e) =>
                onChange({ ...data, unit3: e.target.value })
              }
              placeholder="Bottom Left"
              className="rounded-lg border border-white/10 bg-neutral-800 px-2 py-2 font-sans text-sm text-white text-center outline-none transition focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/30"
            />
            <input
              type="text"
              value={data.unit4}
              onChange={(e) =>
                onChange({ ...data, unit4: e.target.value })
              }
              placeholder="Bottom Right"
              className="rounded-lg border border-white/10 bg-neutral-800 px-2 py-2 font-sans text-sm text-white text-center outline-none transition focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/30"
            />
          </div>
          <p className="text-xs text-neutral-500 mt-1">TL: Top-Left, TR: Top-Right, BL: Bottom-Left, BR: Bottom-Right</p>
        </div>
      </div>
    </form>
  )
}