import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const SatisfactionCategory=()=>{
    const data=[
        {name: "T-Shirts" ,value:4.8,label:"T-Shirts"},
        {name: "Bestselling" ,value:2.5,label:"Bestselling"},
        {name: "Newest" ,value:5,label:"Newest"},
    ]
    return(
        <div>
            <h1>میزان رضایت کاربران در هر دسته بندی</h1>
            <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label="label"
          />
          <Tooltip />
        </PieChart>
        </div>
    )
}
export default SatisfactionCategory;