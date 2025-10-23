import Link from "next/link";
import React from "react";

function ProjectPage() {
  return (
    <div className="px-8 mt-24">
      <div className="px-10 py-15">
        <h2 className="font-bold text-2xl">List Project</h2>
      </div>
      <div className="grid grid-cols-3 gap-4 px-8 mb-10">
        <Link
          href={"/project-page/detail-project"}
          className="border border-gray-100 bg-gray-50 py-8 px-6 rounded-2xl hover:border-gray-600"
        >
          <div>
            <h3 className="font-bold text-xl">Command Center Polda Jatim</h3>
            <div className="space-y-1 mt-3">
              <p className="font-light text-xs">Lokasi</p>
              <p className="font-medium text-sm">POLDA JAWA TIMUR</p>
            </div>
            <div className="space-y-1 mt-3">
              <p className="font-light text-xs">Waktu Pengerjaan</p>
              <p className="font-medium text-sm">25/02/2025 - 25/04/2025</p>
            </div>
            <div className="space-y-1 mt-7">
              <p className="font-light text-xs">Nilai Kontrak</p>
              <p className="font-bold text-lg">Rp 12.000.000.000</p>
            </div>
            <div className="flex justify-between mt-10">
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Nilai PPN</p>
                <h3 className="text-zinc-900 text-sm">Rp 28.000.000.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Nilai PPH</p>
                <h3 className="text-zinc-900 text-sm">Rp 28.000.000.000</h3>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href={"/project-page/detail-project"}
          className="border border-gray-100 bg-gray-50 py-8 px-6 rounded-2xl hover:border-gray-600"
        >
          <div>
            <h3 className="font-bold text-xl">Command Center Polda Jatim</h3>
            <div className="space-y-1 mt-3">
              <p className="font-light text-xs">Lokasi</p>
              <p className="font-medium text-sm">POLDA JAWA TIMUR</p>
            </div>
            <div className="space-y-1 mt-3">
              <p className="font-light text-xs">Waktu Pengerjaan</p>
              <p className="font-medium text-sm">25/02/2025 - 25/04/2025</p>
            </div>
            <div className="space-y-1 mt-7">
              <p className="font-light text-xs">Nilai Kontrak</p>
              <p className="font-bold text-lg">Rp 12.000.000.000</p>
            </div>
            <div className="flex justify-between mt-10">
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Nilai PPN</p>
                <h3 className="text-zinc-900 text-sm">Rp 28.000.000.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Nilai PPH</p>
                <h3 className="text-zinc-900 text-sm">Rp 28.000.000.000</h3>
              </div>
            </div>
          </div>
        </Link>
        <Link
          href={"/project-page/detail-project"}
          className="border border-gray-100 bg-gray-50 py-8 px-6 rounded-2xl hover:border-gray-600"
        >
          <div>
            <h3 className="font-bold text-xl">Command Center Polda Jatim</h3>
            <div className="space-y-1 mt-3">
              <p className="font-light text-xs">Lokasi</p>
              <p className="font-medium text-sm">POLDA JAWA TIMUR</p>
            </div>
            <div className="space-y-1 mt-3">
              <p className="font-light text-xs">Waktu Pengerjaan</p>
              <p className="font-medium text-sm">25/02/2025 - 25/04/2025</p>
            </div>
            <div className="space-y-1 mt-7">
              <p className="font-light text-xs">Nilai Kontrak</p>
              <p className="font-bold text-lg">Rp 12.000.000.000</p>
            </div>
            <div className="flex justify-between mt-10">
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Nilai PPN</p>
                <h3 className="text-zinc-900 text-sm">Rp 28.000.000.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Nilai PPH</p>
                <h3 className="text-zinc-900 text-sm">Rp 28.000.000.000</h3>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ProjectPage;
