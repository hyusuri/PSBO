import React, { useContext, useEffect, useState } from "react";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import Cookies from "js-cookie";
import cookie from "cookie";
import axios from "axios";

const Formulir = () => {
  const [nama, setNama] = useState("");
  const [nim, setNIM] = useState("");
  const [fakultas, setFakultas] = useState("");
  const [departemen, setDepartemen] = useState("");
  const [count, setCount] = useState(0);

  let cookies = Cookies.get();
  // console.log("token", cookies.token);

  let axiosConfig = {
    headers: {
      "X-IPBAPI-TOKEN": "Bearer 1f70343f-5478-38da-8aa7-47d662d2078a",
      "Content-Type": "application/json",
      Authorization: "Bearer " + cookies.token,
    },
  };

  useEffect(() => {
    axios
      .get("https://api.ipb.ac.id/v1/Orang/Mahasiswa/BiodataSaya", axiosConfig)
      .then((res) => {
        console.log("GET Orang", res.data);
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
        console.log("GET API Nilai", res.data);
      });

    axios
      .get("https://api.ipb.ac.id/v1/nilai/Akademik/NilaiSaya", axiosConfig)
      .then((res) => {
        console.log("GET API Akademik", res.data);
      });
  }, []);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let counter = count + 1;
    setCount(counter);
    console.log("submitCount", counter);
    Cookies.set("counter", counter);
  };

  return (
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
            color="lightBlue"
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
            required
          />
        </div>
        <div className="input">
          <Input
            type="number"
            color="lightBlue"
            size="regular"
            outline={true}
            placeholder="Semester"
            required
          />
        </div>
        <div className="input">
          <Input
            type="number"
            color="lightBlue"
            size="regular"
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
  );
};

export default Formulir;
