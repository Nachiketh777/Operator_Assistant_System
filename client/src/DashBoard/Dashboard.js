import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BarChart } from '@mui/x-charts/BarChart';
import { GetCount, GetGraph } from '../ApiService';
import { colors } from '@mui/material';
import { blue, green, red } from '@mui/material/colors';


// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
// const pData = [3,3,44,23,18,51,25,9,30,10,3,3,44,23,18,51,25,9,30,10,34,20,0,0];
const xLabels = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
  '20',
  '21',
  '22',
  '23',
];
//
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabel = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];
//

const bull = (
  <Box
  component="span"
  sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)'}}
  >
    •
  </Box>
);

function Dashboard() {
  
  const [count, setCount] = useState([]);

  const [graphsTotal, setGraphsTotal] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [graphsApproved, setGraphsApproved] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
  const [graphsRejected, setGraphsRejected] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);

  useEffect(() => {

    GetCount(DeviceSuccess, DeviceException);
      console.log("Counting :") 
    }, []);
  
    const DeviceSuccess= (data) =>{
      console.log("count", data)
      setCount(data)
  }
  const DeviceException= () =>{
      console.log("Error in count")
  }
  useEffect(() => {

    GetGraph(DeviceSuccess1, DeviceException1);
      console.log("Graphhhhhhhhhh :") 
    }, []);
  
    const DeviceSuccess1= (data) =>{
      console.log("graph", data)

      const totalCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      const approvedCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
      const rejectedCount = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

      data.map((d)=>{
        console.log("slice",d.readingUploadTime.slice(11,13))
        const dateInUtc = new Date(d.readingUploadTime)
        // console.log("sliceIST", dateInUtc.getHours())
        // // const time = d.toLocalString();
        // // console.log("time",time)
        // const time = d.readingUploadTime.slice(11,13)
        // return {
        //   // time : Number(time), count: d.Counts
        // }
        totalCount[dateInUtc.getHours()] = d.Counts
        approvedCount[dateInUtc.getHours()] = d.ApprovedCount
        rejectedCount[dateInUtc.getHours()] = d.RejectedCount
      })
      // console.log("sliced", countData);
      setGraphsTotal(totalCount)
      setGraphsApproved(approvedCount)
      setGraphsRejected(rejectedCount)
  }
  const DeviceException1= () =>{
      console.log("Error in graph")
  }

  return (
    <div style={{ height: 300, width: '90%', marginLeft: "auto",marginRight:"auto", marginTop:0 }}>
    <h2 style={{color:"#1976D2", fontFamily:"serif"}}>DashBoard</h2>
      {/* <h1>DashBoard</h1> */}
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <Card sx={{ width: 200, marginRight:'10px',border: "2px solid #1976D2" }}>
      <CardContent>
      <Typography sx={{ fontSize: 20, display:'flex', justifyContent:'center'}} color="#1976D2" >
          Total Item Tested
        </Typography>
        {
          count.map((data)=>
        <Typography sx={{ fontSize: 30, display:'flex', justifyContent:'center'}} color="text.primary">
          {data.totalCount}
        </Typography>)
}
      </CardContent>
    </Card>
    <Card sx={{ width: 200 ,marginRight:'10px',border: "2px solid #1976D2"}}>
      <CardContent>
      <Typography sx={{ fontSize: 20, display:'flex', justifyContent:'center'}} color="#1976D2" >
          Approved
        </Typography>
        {
        count.map((data)=>
        <Typography sx={{ fontSize: 30, display:'flex', justifyContent:'center'}} color="text.primary">
          {data.ApprovedCount}
        </Typography>)
}
      </CardContent>
    </Card>
    <Card sx={{ width: 200 , marginRight:'10px',border: "2px solid #1976D2"}}>
      <CardContent>
      <Typography sx={{ fontSize: 20, display:'flex', justifyContent:'center'}} color="#1976D2" >
          Rejected
        </Typography>
        {
        count.map((data)=>
        <Typography sx={{ fontSize: 30, display:'flex', justifyContent:'center'}} color="text.primary">
          {data.RejectedCount}
        </Typography>)
}
      </CardContent>
    </Card>
    <Card sx={{ width: 200 ,marginRight:'10px', border: "2px solid #1976D2"}}>
      <CardContent>
        <Typography sx={{ fontSize: 20,  display:'flex', justifyContent:'center'}} color="#1976D2" >
          Efficiency
        </Typography>
        {
        count.map((data)=>
        <Typography sx={{ fontSize: 30, display:'flex', justifyContent:'center'}} color="text.primary">
          {data.AvgCount}%
        </Typography>)
}
      </CardContent>
    </Card>
    </div>
      {/* <BarChart  
      // sx={{fill:"#1976D2"}}
        width={1000}
        height={300}
        series={[
          { data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,0,0,0], label: 'approved', stack: "stack1" },
          { data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0], label: 'Rejected' },
          { data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0], label: 'Total', stack: "stack2" },
          // { data: uData, label: 'uv', id: '', stack: '' },
        ]}
        xAxis={[{ data: xLabels, scaleType: 'band' }]}
      /> */}

    

        
      <BarChart
      width={800}
      height={400}
      series={[
        { data: graphsApproved, label: 'Approved', stack: 'stack1', color:'green' },
        { data: graphsRejected, label: 'Rejected', stack: 'stack1', color:'red' },
        { data: graphsTotal, label: 'Total', stack: 'total',color:'blue' }, 
      ]}
      xAxis={[{ data: xLabels, scaleType: 'band' }]}
      
    />
    </div>
  )
}







  
export default Dashboard;