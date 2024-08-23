import React, {useState} from 'react'
import AppSideBar from "./AppSideBar";
import TableCom from "./Components/AddTemp";
import { BrowserRouter , Routes, Route, Outlet } from 'react-router-dom';
import Login from "./Login";
import DialogBox from "./QCField/dialogBox";
import TableCom2 from "./Components/TempAssign";
import DialogBoxQC from "./Components/dialogBoxTemp";
import QcTable from "./QCField/TableQCField";
import QCActual from './QCActual/TableQCActual';
import QCResult from './QCResult/TableQCResult';
import QCdataEntry from './QCActual/QCdataEntry';
import QCReport from './QCReport/QcReport';
import QCView from "./QCReport/QCView";
import Dashboard from './DashBoard/Dashboard';
import './App.css'



function App() {
  const [logedIn, setLogedIn] = useState(localStorage.authentication || false);

  return (
    <div>
      {/* <TableQC /> */}
      {/* <DialogBoxQC /> */}
      {/* <DialogBoxQC /> */}
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppSideBar />}>
        <Route path="dashboard" element={<Dashboard />}></Route>
        <Route path="template" element={<TableCom />}></Route>
        <Route path="template2" element={<TableCom2 />}></Route>
        <Route path="template/:qcfield" element={<QcTable />}></Route>
        <Route path="qcactual" element={<QCdataEntry />}></Route> 
        <Route path="qcactual/:rowId" element={<QCActual />}></Route>
        <Route path="qcresult" element={<QCResult />}></Route>
        <Route path="qcreport" element={<QCReport />}></Route>
        <Route path="qcreport/:rowId" element={<QCView />}></Route>
        </Route>
        <Route path="login" element={<Login /> }> </Route>
        <Route path='*' element={"Sari Address Bare mare"} />
        </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default App;
