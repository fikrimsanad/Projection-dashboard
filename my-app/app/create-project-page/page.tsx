import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

function createproject() {
  return (
    <div className="mt-24 px-16 py-20">
      <div className="px-12">
        <div className="text-center py-5 space-y-2">
          <h2 className="font-bold text-4xl text-blue-800">Data Project</h2>
          <p className="font-light text-sm">
            Pengisian data project , isi data di bawah ini
          </p>
        </div>
        <form className="space-y-5">
          <div className="py-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Informasi Project</h3>
            </div>
            <div className="grid w-full items-center gap-3">
              <Label className="">Nama Proyek</Label>
              <Input
                id="project-name"
                type="text"
                placeholder="Input Nama Proyek"
                className="border border-gray-300 py-5"
              />
            </div>
            <div className="grid w-full items-center gap-3">
              <Label className="">Proyek Lokasi</Label>
              <Input
                id="project-name"
                type="text"
                placeholder="Input Nama Proyek"
                className="border border-gray-300 py-5"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid w-full items-center gap-3">
                <Label>Waktu Pengerjaan Mulai</Label>
                <Input
                  id="date"
                  type="date"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Waktu Pengerjaan Selesai</Label>
                <Input
                  id="date"
                  type="date"
                  className="border border-gray-300 py-5"
                />
              </div>
            </div>
          </div>
          <div className="py-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Pendapatan Project</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="grid w-full items-center gap-3">
                <Label>Nilai Kontrak</Label>
                <Input
                  id="nilai"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai DPP</Label>
                <Input
                  id="dpp"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai PPN</Label>
                <Input
                  id="ppn"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai PPH</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
            </div>
          </div>

          <div className="py-10 space-y-6">
            <div>
              <h3 className="text-2xl font-bold">Pengeluaran Project</h3>
            </div>

            <div className="grid w-full items-center gap-3">
              <div className="mt-15 mb-10">
                <span className="text-sm bg-blue-50 text-blue-700 px-6 py-2 rounded-full">
                  HPP
                </span>
              </div>
              <Label>Nilai HPP</Label>
              <Input
                id="pph"
                type="number"
                placeholder="Rp 0, -"
                className="border border-gray-300 py-5"
              />
            </div>
            <div className="mt-15 mb-10">
              <span className="text-sm bg-blue-50 text-blue-700 px-6 py-2 rounded-full">
                Administrasi
              </span>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="grid w-full items-center gap-3">
                <Label>Nilai ADM Jamlak</Label>
                <Input
                  id="nilai"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai ADM Uang Muka</Label>
                <Input
                  id="dpp"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai ADM Jamhar</Label>
                <Input
                  id="ppn"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
            </div>
            <div className="mt-15 mb-10">
              <span className="text-sm bg-blue-50 text-blue-700 px-6 py-2 rounded-full">
                Komisi
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="grid w-full items-center gap-3">
                <Label>Nilai SRENA</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai ADM Pokja</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai KASUBIT</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai Pemerataan</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai Komisi Lain</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
            </div>
            <div className="mt-15 mb-10">
              <span className="text-sm bg-blue-50 text-blue-700 px-6 py-2 rounded-full">
                Lain-lain
              </span>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="grid w-full items-center gap-3">
                <Label>Nilai Oprasional</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai Entertaiment</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai Komisi Pemeriksaan</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai Biaya Lain</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
              <div className="grid w-full items-center gap-3">
                <Label>Nilai Intensif</Label>
                <Input
                  id="pph"
                  type="number"
                  placeholder="Rp 0, -"
                  className="border border-gray-300 py-5"
                />
              </div>
            </div>
            <div className="grid w-full items-center gap-3">
              <Label htmlFor="picture">Keterangan</Label>
              <Textarea className="border border-gray-300 py-5" />
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <button className="bg-blue-800 px-32 py-4 text-white rounded-lg hover:cursor-pointer hover:bg-blue-900">
                Submit
              </button>
            </div>
            <div>
              <button className=" px-12 py-4 text-black font-bold rounded-full">
                Reset
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default createproject;
