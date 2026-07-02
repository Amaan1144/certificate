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

        {/* Unit + Quantity - same label, 2 small inputs */}
        <div className="flex flex-col gap-1.5">
          <label className="font-sans text-sm font-medium text-neutral-300">
            Unit
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={data.unit}
              onChange={(e) =>
                onChange({ ...data, unit: e.target.value })
              }
              className="w-14 rounded-lg border border-white/10 bg-neutral-800 px-2 py-2 font-sans text-sm text-white text-center outline-none transition focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/30"
            />
            <span className="text-white/50 text-lg">|</span>
            <input
              type="text"
              value={data.quantity}
              onChange={(e) =>
                onChange({ ...data, quantity: e.target.value })
              }
              className="w-14 rounded-lg border border-white/10 bg-neutral-800 px-2 py-2 font-sans text-sm text-white text-center outline-none transition focus:border-[#00a3e0] focus:ring-2 focus:ring-[#00a3e0]/30"
            />
          </div>
        </div>
      </div>
    </form>
  )
}