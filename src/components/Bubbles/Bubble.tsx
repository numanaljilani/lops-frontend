import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { DollarSign } from "lucide-react";
import Wave from "react-wavify";

function Bubble({color} : any) {
  return (
    <div className="border bgbl size-64 rounded-full overflow-hidden relative flex justify-center items-center">
      <Wave
        // fill="#60a5fa"
        fill={color}
        paused={false}
        style={{ display: "flex", position: "absolute", bottom: 0 }}
        options={{
          height: 30,
          amplitude: 20,
          speed: 0.15,
          points: 3,
        }}
      ></Wave>

      <Card
        x-chunk="dashboard-01-chunk-0"
        className="rounded-full size-64 flex justify-center items-center "
      >
        <div className="z-30">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}

export default Bubble;
