import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BukuListing = () => {
    const [bukudata, bukudatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/buku/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/buku/edit/" + id);
    }
    const Removefunction = (id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("http://localhost:8000/buku/" + id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("http://localhost:8000/buku").then((res) => {
            return res.json();
        }).then((resp) => {
            bukudatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>PERPUSTAKAAN</h2>
                </div>
                <div className="card-body">
                    <div className="divbtn">
                        <Link to="buku/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <div className="divbtn">
                        <Link to="karyawan" className="btn btn-success">Data Karyawan</Link>
                    </div>
                    <table className="table table-bordered">
                        <thead className="bg-dark text-white">
                            <tr>
                                <td>ID</td>
                                <td>Nama Buku</td>
                                <td>Tahun Terbit</td>
                                <td>Penulis</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            {bukudata &&
                                bukudata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.tahunTerbit}</td>
                                        <td>{item.penulis}</td>
                                        <td><a onClick={() => { LoadEdit(item.id) }} className="btn btn-success">Edit</a>
                                            <a onClick={() => { Removefunction(item.id) }} className="btn btn-danger">Remove</a>
                                            <a onClick={() => { LoadDetail(item.id) }} className="btn btn-primary">Details</a>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
}

export default BukuListing;