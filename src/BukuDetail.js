import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const BukuDetail = () => {
    const { bukuid } = useParams();

    const [bukudata, bukudatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/buku/" + bukuid).then((res) => {
            return res.json();
        }).then((resp) => {
            bukudatachange(resp);
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
                    <h2>Tambah Buku</h2>
                </div>
                <div className="card-body"></div>

                {bukudata &&
                    <div>
                        <h2>Nama Buku : <b>{bukudata.name}</b>  ({bukudata.id})</h2>
                        <h3>Buku Details</h3>
                        <h5>Tahun terbit : {bukudata.tahunTerbit}</h5>
                        <h5>Penulis : {bukudata.penulis}</h5>
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

export default BukuDetail;