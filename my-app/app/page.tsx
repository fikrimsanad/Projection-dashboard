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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export default function Home() {
  return (
    <div className="py-4 px-4">
      <div className="py-10 w-full bg-zinc-900 rounded-4xl">
        <div className="w-full grid grid-cols-3 gap-2 rounded-lg px-8">
          <div className="bg-zinc-800 py-5 px-6 space-y-8 rounded-lg">
            <div className="space-y-3">
              <p className="text-white text-xs">Total Proyek</p>
              <h3 className="text-white text-2xl font-bold">12</h3>
            </div>
            <div className="space-y-3">
              <Badge className="text-black bg-zinc-100">
                Total Nilai Proyek
              </Badge>
              <h3 className="text-white text-3xl font-bold">
                Rp 52.000.000.000
              </h3>
            </div>
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-white text-xs">Nilai PPN</p>
                <h3 className="text-white text-sm">Rp 28.000.000.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-white text-xs">Nilai PPH</p>
                <h3 className="text-white text-sm">Rp 28.000.000.000</h3>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 py-5 h-fit  px-6 space-y-5 rounded-lg">
            <div className="space-y-3">
              <Badge className="text-black bg-zinc-100">
                Total Nilai Bersih
              </Badge>
              <h3 className="text-white text-3xl font-bold">
                Rp 78.000.000.000
              </h3>
            </div>
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-white text-xs">Nilai Diterima</p>
                <h3 className="text-green-500 text-sm">Rp 28.000.000.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-white text-xs">Belum Diterima</p>
                <h3 className="text-green-500 text-sm">Rp 28.000.000.000</h3>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 py-5 h-fit  px-6 space-y-5 rounded-lg">
            <div className="space-y-3">
              <Badge className="text-black bg-zinc-100">
                Total Nilai Pengeluaran
              </Badge>
              <h3 className="text-white text-3xl font-bold">
                Rp 52.000.000.000
              </h3>
            </div>
            <div className="flex justify-between">
              <div className="space-y-2">
                <p className="text-white text-xs">Sudah Keluar</p>
                <h3 className="text-red-500 text-sm">Rp 28.000.000.000</h3>
              </div>
              <div className="space-y-2">
                <p className="text-white text-xs">Belum Keluar</p>
                <h3 className="text-red-500 text-sm">Rp 28.000.000.000</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-28 px-12">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
      <div className="mt-28 px-12">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.paymentStatus}</TableCell>
                <TableCell>{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right">
                  {invoice.totalAmount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
