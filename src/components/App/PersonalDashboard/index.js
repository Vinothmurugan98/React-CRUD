import { useEffect, useState } from "react";
import Dashboard from "../../Dashboard";
import EmpHome from "./empHome";
import Empvehicle from "./../VehicleDashboard/EmpVehicle";

const MainDashboard =()=>{
    const [page, setPage] = useState(0);

    useEffect(()=>{
        setPage(0)
    },[])
    const perDetail=(data)=>{
setPage(data);
    }
console.log (page,"Name")
return (
    
   <> {page==0&&(<><button onClick={()=>perDetail(1)}>Personal Details</button> &emsp;&emsp;
   <button onClick={()=>perDetail(2)}>Employee Details</button>&emsp;&emsp;
   <button onClick={()=>perDetail(3)}>Employee Vehicle Detail</button>
   </> )}

   {page==1&&(<Dashboard />)}
   {page==2&&(<EmpHome />)}
   {page==3&&(<Empvehicle />)}
   </>
)
}


export default MainDashboard;