import React from "react";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";

const Formulir = () => {
    return ( 

        <section className="input_section">
            <h2>Masukkan data</h2>
            <form id="inputBook">
                <div className="input">
                    <Input type="text" color="lightBlue" size="regular" outline={true} placeholder="Nama" required/>
                </div>
                <div className="input">
                    <Input type="text" color="lightBlue" size="regular" outline={true} placeholder="NIM" required/>
                </div>
                <div className="input">
                    <Input type="text" color="lightBlue" size="regular" outline={true} placeholder="Fakultas" required/>
                </div>
                <div className="input">
                    <Input type="text" color="lightBlue" size="regular" outline={true} placeholder="Departemen" required/>
                </div>
                <div className="input">
                    <Input type="number" color="lightBlue" size="regular" outline={true} placeholder="IPK" required/>
                </div>
                <div className="input">
                    <Input type="number" color="lightBlue" size="regular" outline={true} placeholder="Semester" required/>
                </div>
                <div className="input">
                    <Input type="number" color="lightBlue" size="regular" outline={true} placeholder="Nomor Rekening" required/>
                </div>
                <div className="input">
                    <label className="mr-5" for="ktm">Scan Kartu Tanda Mahasiswa</label>
                    <select id="ktm" name="cars">
                        <option value="" selected disabled hidden>Pilih Berkas</option>
                        <option value="ktm">Kartu Tanda Mahasiswa</option>
                        <option value="kk">Kartu Keluarga</option>
                    </select>
                </div>
                <div className="input">
                    <label className="mr-5" for="ktm">Scan Kartu Keluarga</label>
                    <select className="md:mx-16 sm:mr-16" id="ktm" name="cars">
                        <option value="" selected disabled hidden>Pilih Berkas</option>
                        <option value="ktm">Kartu Tanda Mahasiswa</option>
                        <option value="kk">Kartu Keluarga</option>
                    </select>
                </div>
                <Button id="beasiswaSubmit" type="submit">Daftar</Button>
            </form>
        </section>
    );
}
 
export default Formulir;
