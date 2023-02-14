import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SatisfactionTime=()=>{
    const data = [
        {
          month: 'January',
          satisfaction: 3,
        },
        {
          month: 'February',
          satisfaction: 5,
        },
        {
          month: 'March',
          satisfaction: 2,
        },
        {
          month: 'April',
          satisfaction: 3.6,
        },
        {
          month: 'May',
          satisfaction: 1,
        },
        {
          month: 'June',
          satisfaction: 4.7,
        },
        {
            month: 'July',
          satisfaction: 5,
        },
        {
            month: 'August',
            satisfaction: 3.5,
          },
          {
            month: 'September',
            satisfaction: 3.7,
          },
          {
            month: 'Octobor',
            satisfaction: 3.5,
          },
          {
            month: 'November',
            satisfaction: 4.5,
          },
          {
            month: 'December',
            satisfaction: 5,
          },
      ];      

    return(
        <div style={{ width: '100%' }}>
        <h4>میزان رضایت کاربران در در بازه زمانی یکسال</h4>      
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="satisfaction" stroke="#8884d8" fill="#8884d8" />
          </AreaChart>
        </ResponsiveContainer>

      </div>
        
    )
}
export default SatisfactionTime;