'use client';
import { useContext } from "react";
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart } from "recharts";
import { UserInfoContext } from "../../../UserInfoContext";




function HomeChart() {
    const { userInfo } = useContext(UserInfoContext);

    const producSales = [
        {
            name: 'Rank',
            صحیح: userInfo.good,
            غلط: userInfo.bad,
        }
    ]
    return (
        <div className="home-chart">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart width={500} height={400} data={producSales} margin={{ right: 30 }}>
                    <YAxis />
                    <XAxis dataKey="name" />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip content={<CustomeTooltip />} />
                    <Legend />
                    <Bar type={"monotone"} dataKey="صحیح" fill="#3b82f6" />
                    <Bar type={"monotone"} dataKey="غلط" fill="#8b5cf6" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )

}

const CustomeTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="tooltip">
                <p>{label}</p>
                <p>
                    صحیح:
                    <span>{payload[0].value}</span>
                </p>
                <p>
                    غلط:
                    <span>{payload[1].value}</span>
                </p>
            </div>
        )
    }
}
export default HomeChart