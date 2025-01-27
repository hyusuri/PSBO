import React, { useContext, useEffect, useState } from "react";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import Cookies from "js-cookie";
// import cookie from "cookie";
import axios from "axios";
import { data } from "autoprefixer";
import { useRouter } from "next/router";

const Formulir = () => {
  const [nama, setNama] = useState("");
  const [nim, setNIM] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [departemen, setDepartemen] = useState("");
  const [ipk, setIPK] = useState(0);
  const [rekening, setrekening] = useState(0);
  const [semester, setSemester] = useState(0);
  const [count, setCount] = useState(0);

  // let cookies = Cookies.get();
  // const router = useRouter();
  // // console.log("token", cookies.token);

  let axiosConfig = {
    headers: {
      "X-IPBAPI-TOKEN": "Bearer 1f70343f-5478-38da-8aa7-47d662d2078a",
      "Content-Type": "application/json",
      Authorization: "Bearer " + Cookies.get("token"),
    },
  };

  useEffect(() => {
    axios
      .get("https://api.ipb.ac.id/v1/Orang/Mahasiswa/BiodataSaya", axiosConfig)
      .then((res) => {
        // console.log("GET Orang", res.data);
        const { Nama, NIM, Fakultas, Departemen } = res.data;
        setNama(Nama);
        setNIM(NIM);
        setFakultas(Fakultas);
        setDepartemen(Departemen);
      });

    axios
      .get(
        "https://api.ipb.ac.id/v1/nilai/Akademik/IndeksPrestasiSaya",
        axiosConfig
      )
      .then((res) => {
        let data = res.data;
        for (var i = 0; i < res.data.length; i++) {
          if (data[i].IP === 0.0) {
            data = data[i];
            break;
          }
        }

        let lastIndex = res.data.length;
        // console.log("GET API Nilai", res.data[lastIndex - 1]);
        let last = res.data[lastIndex - 1];
        // console.log(last.IPK);
        setIPK(data.IPK);
        setSemester(data.SemesterMahasiswa);
      });

    axios
      .get("https://api.ipb.ac.id/v1/nilai/Akademik/NilaiSaya", axiosConfig)
      .then((res) => {
        // let last = res.data.length - 1;
        // console.log("GET API Akademik", res.data);
      });
  }, []);

  const handleSubmit = (evt) => {
    const username = cookies.username;
    evt.preventDefault();

    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get("data");

    const datapos = {
      username: username,
      beasiswa_id: id,
      nama: nama,
      nim: nim,
      fakultas: fakultas,
      departemen: departemen,
      ipk: ipk,
      semester: semester,
      no_rekening: rekening,
      link_ktm: cookies.link_ktm,
      link_kk: cookies.link_kk,
    };
    console.log(datapos);
    axios
      .post("http://localhost:3001/beasiswa/daftar", datapos)
      .then((response) => {
        if (response.data.message == "Sudah Terdaftar") {
          alert("Anda Sudah Terdaftar");

          let counter = count + 1;
          setCount(counter);
          console.log("submitCount", counter);
          Cookies.set("counter", counter);
        } else {
          router.push("/detail-beasiswa/" + id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid justify-items-center">
      <section className="input_section">
        <h2>Formulir Beasiswa</h2>
        <form id="inputBeasiswa" onSubmit={handleSubmit}>
          <div className="input">
            <Input
              type="text"
              color="lightBlue"
              size="regular"
              outline={true}
              placeholder="Nama"
              value={nama}
              disabled
            />
          </div>
          <div className="input">
            <Input
              type="text"
              color="lightBlue"
              size="regular"
              outline={true}
              placeholder="NIM"
              value={nim}
              disabled
            />
          </div>
          <div className="input">
            <Input
              type="text"
              color="gray"
              size="regular"
              outline={true}
              placeholder="Fakultas"
              value={fakultas}
              disabled
            />
          </div>
          <div className="input">
            <Input
              type="text"
              color="lightBlue"
              size="regular"
              outline={true}
              placeholder="Departemen"
              value={departemen}
              disabled
            />
          </div>
          <div className="input">
            <Input
              type="number"
              color="lightBlue"
              size="regular"
              outline={true}
              placeholder="IPK"
              value={ipk}
              disabled
            />
          </div>
          <div className="input">
            <Input
              type="number"
              color="lightBlue"
              size="regular"
              outline={true}
              placeholder="Semester"
              value={semester}
              disabled
            />
          </div>
          <div className="input">
            <Input
              type="number"
              color="lightBlue"
              size="regular"
              onChange={(e) => setrekening(e.target.value)}
              outline={true}
              placeholder="Nomor Rekening"
              required
            />
          </div>
          <div className="input">
            <label className="mr-5" for="ktm">
              Scan Kartu Tanda Mahasiswa
            </label>
            <select id="ktm" name="cars">
              <option value="" selected disabled hidden>
                Pilih Berkas
              </option>
              <option value="ktm">Kartu Tanda Mahasiswa</option>
              <option value="kk">Kartu Keluarga</option>
            </select>
          </div>
          <div className="input">
            <label className="mr-5" for="ktm">
              Scan Kartu Keluarga
            </label>
            <select className="md:mx-16 sm:mr-16" id="ktm" name="cars">
              <option value="" selected disabled hidden>
                Pilih Berkas
              </option>
              <option value="ktm">Kartu Tanda Mahasiswa</option>
              <option value="kk">Kartu Keluarga</option>
            </select>
          </div>
          <Button id="beasiswaSubmit" type="submit">
            Daftar
          </Button>
        </form>
      </section>
    </div>
  );
};

export default Formulir;
