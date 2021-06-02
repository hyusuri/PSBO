import { Button } from "@material-ui/core";
import Head from "next/head"
import Image from 'next/image'

const Profile = () => {
    return (
    <>
        <Head>
            <title>IPB Scholar | Profile</title>
        </Head>
        <div>
            <h1 className="text-4xl m-10">Profile</h1>

            <div className="count">
                <div className="diterima">
                    <h1>0</h1>
                    <h2>Beasiswa Diterima</h2>
                </div>
                <div className="dilamar">
                    <h1>2</h1>
                    <h2>Beasiswa Dilamar</h2>
                </div>
            </div>
            {/* <div className="flex m-8">
                <Image className="row-span-3  " src="/ipbscholar.png" width={400} height={100} ></Image>
                <div className="flex-2 space-y-4 block">
                    <h3>Nama Lengkap - G64192002</h3>
                    <h3>Fakultas X</h3>w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto
                    <h3>Departemen Y</h3> 
                </div>
            </div> */}
            <div className="text-center m-20 md:flex rounded-xl p-8 md:p-0 gap-x-16 justify-center ">
                <Image className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full" src="/profil.png" alt="" width="150" height="150"/>
                <div className="pt-6 md:p-8 text-center md:text-left space-x-9 space-y-4">
                    <div className="text-cyan-600">
                        
                    </div>
                    
                    {/* <div className="font-medium"> */}
                        <div className="font-medium text-cyan-600">
                            Nama Lengkap
                        </div>
                        <div className="text-cyan-600">
                            G64192002
                        </div>
                        <div className="text-cyan-600">
                            Fakultas X
                        </div>
                        <div className="text-black-500">
                            Departemen Y
                        </div>
                    {/* </div> */}
                </div>
            </div>

            <div className="text-center m-10 space-y-2">
                    <label for="foto">Ubah Foto</label>
                    <div>
                        <input id="foto" type="file"></input>
                        <Button variant="contained" color="primary">simpan</Button>
                    </div>
            </div>

            <h2 className="text-3xl m-10">Berkas Tambahan</h2>
            
            <form className="text-center m-8 md:flex rounded-xl p-8 md:p-0 gap-x-16 justify-center">
                {/* <select id="berkas" name="berkas">
                    <option value="Kartu keluarga">Kartu Keluarga</option>
                    <option value="KTM">KTM</option>
                </select> */}
                <div className="m-10 space-y-2">
                    <label for="ktm">Kartu Tanda Mahasiswa</label>
                    <div>
                        <input id="ktm" type="file"></input>
                        <Button variant="contained" color="primary">simpan</Button>
                    </div>
                </div>
                
                <div className="m-10 space-y-2">
                    <label for="kk">Kartu Keluarga</label>
                    <div >
                        <input  id="kk" type="file"></input>
                        <Button variant="contained" color="primary">simpan</Button>
                    </div>
                </div>
                
                
            </form>


        </div>
    </>
    )
}

export default Profile;