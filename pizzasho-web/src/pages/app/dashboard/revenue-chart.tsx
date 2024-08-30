import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import colors from 'tailwindcss/colors';

import { ResponsiveContainer, LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip } from 'recharts';

const data = [
  { data: '11/12', revenue: 1200 },
  { data: '12/12', revenue: 800 },
  { data: '13/12', revenue: 900 },
  { data: '14/12', revenue: 400 },
  { data: '15/12', revenue: 2300 },
  { data: '16/12', revenue: 1400 },
];

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no Período</CardTitle>
          <CardDescription>Receita Diária no Período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={colors.amber['500']} />
            <XAxis dataKey="data" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
