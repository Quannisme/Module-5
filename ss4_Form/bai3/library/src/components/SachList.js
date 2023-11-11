import {useEffect, useState} from "react";
import { Sach } from "./Sach";
export function SachList(){
    const [sachs,setSachs]=useState([]);
    const[selectSach , setSelectSach]=useState(null);
    useEffect(()=>{
        setSachs([
            {
                title:"NguyenVanA",
                number:1
            },
            {
                title:"NguyenVanB",
                number:2
            },
            {
                title:"NguyenVanC",
                number:3
            }
        ])
    },[]);
    const handleDelet=(title)=>{
        const updateSach=sachs.filter((sach)=>sach.title!=title);
        setSachs(updateSach);
    }
    const handleUpdate=(title)=>{
        const updateSach=sachs.find((sach)=>sach.title!=title);
        setSelectSach(updateSach);
    }
    return(
        <>
        <table>
            <thead>
                <th>Tieu de </th>
                <th>So luong</th>
            </thead>
            <tbody>
                {
                    sachs.map((values , index) =>{
                        return(
                            <tr key={index}>
                                <td>{values.title}</td>
                                <td>{values.number}</td>
                                <td><button type="button" onClick={()=>handleUpdate(values.title)}>Cap nhat</button></td>
                                <td><button type="button" onClick={()=>handleDelet(values.title)}>Xoa</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        {
            selectSach &&(
                <Sach
                    sach={selectSach}
                />
            )
        }
        </>
    );
}