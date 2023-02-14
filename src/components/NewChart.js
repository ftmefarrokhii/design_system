import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Fragment } from 'react';
const NewChart=()=>{
    const data=[
        {name: "Sunday" ,numberofproduct:100},
        {name: "Monday" ,numberofproduct:50},
        {name: "Tuesday" ,numberofproduct:43},
        {name: "Wendsday" ,numberofproduct:20},
        {name: "Friday" ,numberofproduct:200},
        {name: "Saturday" ,numberofproduct:56},
    ]
    const data1=[
        {name: "January" ,numberofproduct:20},
        {name: "February" ,numberofproduct:50},
        {name: "March" ,numberofproduct:73},
        {name: "April" ,numberofproduct:44},
        {name: "May" ,numberofproduct:100},
        {name: "June" ,numberofproduct:56},
        {name: "July" ,numberofproduct:100},
        {name: "August" ,numberofproduct:50},
        {name: "September" ,numberofproduct:78},
        {name: "Octobor" ,numberofproduct:20},
        {name: "November" ,numberofproduct:46},
        {name: "December" ,numberofproduct:56},
    ]
    return(
        <Fragment>
        <div>
            <h1>میزان فروش روزانه براساس ارزش فروش کالا</h1>
            <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="numberofproduct" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
        <div>
        <h1>میزان فروش ماهانه براساس ارزش فروش کالا</h1>
            <BarChart
          width={500}
          height={300}
          data={data1}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barSize={30}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="numberofproduct" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
        </div>
        </Fragment>
    )
}
export default NewChart;