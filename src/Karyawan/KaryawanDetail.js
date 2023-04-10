import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const KaryawanDetail = () => {
    const { karyawanid } = useParams();

    const [karyawandata, karyawandatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/karyawan/" + karyawanid).then((res) => {
            return res.json();
        }).then((resp) => {
            karyawandatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);
    return (
        <div>
            {/* <div className="row">
                <div className="offset-lg-3 col-lg-6"> */}

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Tambah Karyawan</h2>
                </div>
                <div className="card-body"></div>

                {karyawandata &&
                    <div>
                        <h2>Nama Karyawan : <b>{karyawandata.name}</b>  ({karyawandata.id})</h2>
                        <h3>Karyawan Details</h3>
                        <h5>Email : {karyawandata.email}</h5>
                        <h5>Nomor Telefon : {karyawandata.phone}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            {/* </div>
            </div> */}
        </div >
    );
}

export default KaryawanDetail;