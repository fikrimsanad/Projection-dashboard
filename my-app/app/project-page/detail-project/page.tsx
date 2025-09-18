import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import React from "react";

const invoices = [
  {
    accountname: "Nilai Kontrak",
    nilai: "Rp 12.000.000.000",
    nilaidibayarkan: "Rp 5.000.000.000",
    sisapembayaran: "Rp 7.000.000.000",
  },
  {
    accountname: "Nilai DPP",
    nilai: "Rp 10.680.000.000",
    nilaidibayarkan: "Rp 5.000.000.000",
    sisapembayaran: "Rp 7.000.000.000",
  },
  {
    accountname: "Nilai PPN",
    nilai: "Rp 1.320.000.000",
    nilaidibayarkan: "Rp 5.000.000.000",
    sisapembayaran: "Rp 7.000.000.000",
  },
  {
    accountname: "Nilai PPH",
    nilai: "Rp 213.600.000",
    nilaidibayarkan: "Rp 5.000.000.000",
    sisapembayaran: "Rp 7.000.000.000",
  },
  {
    accountname: "HPP",
    nilai: "Rp 7.000.000.000",
    nilaidibayarkan: "Rp 5.000.000.000",
    sisapembayaran: "Rp 2.000.000.000",
  },
  {
    accountname: "ADM Jamlak",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "ADM Uang Muka",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "ADM Jamhar",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "SRENA",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "ADM POKJA",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "KASUBIT",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "Pemerataan",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "Biaya Komisi Lain",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "Biaya Oprasional",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "Biaya Entertaiment",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "Biaya Komisi Pemeriksaan",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "Biaya Lain",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
  {
    accountname: "Intensif",
    nilai: "Rp 4.000.000",
    nilaidibayarkan: "Rp 4.000.000",
    sisapembayaran: "Rp 0",
  },
];

function DetailProject() {
  return (
    <div className="px-8 py-10">
      <div className="px-10 py-8">
        <h2 className="text-3xl font-bold">Command Center Polda Jawa Timur</h2>
      </div>
      <div className="py-5 w-full bg-white">
        <div className="w-full grid grid-cols-3 gap-4 rounded-lg px-8">
          <div className="bg-gray-50 py-5 h-fit  px-6 space-y-5 rounded-lg">
            <div className="space-y-3">
              <Badge className="text-white bg-zinc-900">
                Total Nilai Kontrak
              </Badge>
              <h3 className="text-zinc-900 text-3xl font-bold">
                Rp 78.000.000.000
              </h3>
            </div>
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Nilai PPN</p>
                <h3 className="text-green-500 text-sm">Rp 28.000.000.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Belum PPH</p>
                <h3 className="text-green-500 text-sm">Rp 28.000.000.000</h3>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 py-5 h-fit  px-6 space-y-5 rounded-lg">
            <div className="space-y-3">
              <Badge className="text-white bg-zinc-900">
                Total Nilai Bersih
              </Badge>
              <h3 className="text-zinc-900 text-3xl font-bold">
                Rp 78.000.000.000
              </h3>
            </div>
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Nilai Diterima</p>
                <h3 className="text-green-500 text-sm">Rp 28.000.000.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Belum Diterima</p>
                <h3 className="text-green-500 text-sm">Rp 28.000.000.000</h3>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 py-5 h-fit  px-6 space-y-5 rounded-lg">
            <div className="space-y-3">
              <Badge className="text-white bg-zinc-900">
                Total Nilai Pengeluaran
              </Badge>
              <h3 className="text-zinc-900 text-3xl font-bold">
                Rp 52.000.000.000
              </h3>
            </div>
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Sudah Keluar</p>
                <h3 className="text-red-500 text-sm">Rp 28.000.000.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-900 text-xs">Belum Keluar</p>
                <h3 className="text-red-500 text-sm">Rp 28.000.000.000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-8">
        <Tabs defaultValue="Proyeksi" className="px-8">
          <div className="py-10">
            <h2 className="font-bold text-3xl">Proyeksi Laba Rugi</h2>
          </div>
          <TabsList>
            <TabsTrigger value="Proyeksi">Proyeksi</TabsTrigger>
            <TabsTrigger value="Riwayat">Riwayat</TabsTrigger>
            <TabsTrigger value="Form">Form Input</TabsTrigger>
          </TabsList>
          <TabsContent value="Proyeksi">
            <Table className="mt-6">
              <TableHeader>
                <TableRow>
                  <TableHead className="">Account</TableHead>
                  <TableHead>Nilai</TableHead>
                  <TableHead>Nilai Dibayarkan</TableHead>
                  <TableHead>Sisa Budget</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((hpp) => (
                  <TableRow key={hpp.accountname} className="hover:bg-zinc-100">
                    <TableCell className="font-medium">
                      {hpp.accountname}
                    </TableCell>
                    <TableCell>{hpp.nilai}</TableCell>
                    <TableCell>{hpp.nilaidibayarkan}</TableCell>
                    <TableCell>{hpp.sisapembayaran}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="Riwayat">Change your password here.</TabsContent>
          <TabsContent value="Form">Change your password here.</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default DetailProject;
