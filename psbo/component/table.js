import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import Link from "next/link";

export default function ScholarCard() {
  return (
    <Card>
      <CardHeader color="blue" contentPosition="none">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-white text-2xl">Daftar Beasiswa</h2>
        </div>
      </CardHeader>
      <CardBody>
        <div className="overflow-x-auto">
          <table className="items-center w-full bg-amber border-collapse">
            <thead>
              <tr>
                <th className="text-center px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  No
                </th>
                <th className="text-center px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Nama Beasiswa
                </th>
                <th className="text-center px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="text-center border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  1
                </th>
                <td className="text-center border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Dakota Rice
                </td>
                <td className=" border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="text-center flex space-x-4 justify-center">
                    <div>
                      <Button color="amber" size="lg" style={{ padding: 8 }}>
                        <Link href="/admin/edit-beasiswa">Edit</Link>
                      </Button>
                    </div>

                    <div>
                      <Button color="blueGray" size="lg" style={{ padding: 8 }}>
                        <Link href="/admin/list-pendaftar">Detail</Link>
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="text-center border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  2
                </th>
                <td className="text-center border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Minerva Hooper
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="text-center flex space-x-4 justify-center">
                    <div>
                      <Button color="amber" size="lg" style={{ padding: 8 }}>
                        <Link href="/admin/edit-beasiswa">Edit</Link>
                      </Button>
                    </div>

                    <div>
                      <Button color="blueGray" size="lg" style={{ padding: 8 }}>
                        <Link href="/admin/list-pendaftar">Detail</Link>
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="text-center border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  3
                </th>
                <td className="text-center border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Sage Rodriguez
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="text-center flex space-x-4 justify-center">
                    <div>
                      <Button color="amber" size="lg" style={{ padding: 8 }}>
                        <Link href="/admin/edit-beasiswa">Edit</Link>
                      </Button>
                    </div>

                    <div>
                      <Button color="blueGray" size="lg" style={{ padding: 8 }}>
                        <Link href="/admin/list-pendaftar">Detail</Link>
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <th className="text-center border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  4
                </th>
                <td className="text-center border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  Philip Chaney
                </td>
                <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                  <div className="text-center flex space-x-4 justify-center">
                    <div>
                      <Button color="amber" size="lg" style={{ padding: 8 }}>
                        <Link href="/admin/edit-beasiswa">Edit</Link>
                      </Button>
                    </div>

                    <div>
                      <Button color="blueGray" size="lg" style={{ padding: 8 }}>
                        <Link href="/admin/list-pendaftar">Detail</Link>
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}
