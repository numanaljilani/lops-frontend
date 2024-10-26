"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { calculateHours } from "@/lib/calculateHours";
import { date, formatDate, formatDateForApi } from "@/lib/dateFormat";
import { useComponiesMutation } from "@/redux/query/componiesApi";
import { useCreateEmployeeMutation } from "@/redux/query/employee";
import { useCreateTimeSheetMutation } from "@/redux/query/timesheet";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CreateEmployee() {
  const router = useRouter();
  const [timeSheet, setTimeSheet] = useState<{
    date: any;
    startTime: any;
    endTime: any;
    remark: string;
    hours_logged: any;
    hourly_rate: any;
    total_amount: any;
    // hour
  }>({
    date: date(Date.now()),
    startTime: 0,
    endTime: 0,
    remark: "",
    hours_logged: "",
    hourly_rate: 0,
    total_amount: 0,
  });

  const [createTimeSheetApi, { data, isSuccess, error, isError }] =
    useCreateTimeSheetMutation();
  const saveEmployeeDetails = async () => {
    if (!timeSheet.date) {
      toast(`Date cant be empty.`);
      return;
    }
    if (!timeSheet.startTime) {
      toast(`startTime cant be empty.`);
      return;
    }
    if (!timeSheet.endTime) {
      toast(`location cant be empty.`);
      return;
    }
    if (!timeSheet.hours_logged) {
      toast(`hours_logged cant be empty.`);
      return;
    }

    console.log(timeSheet);
    const res = await createTimeSheetApi({
      data: {
        hours_logged: Number(timeSheet.hours_logged) | 6,
        hourly_rate: Number(timeSheet.hourly_rate) | 10,
        date_logged: formatDateForApi(),
        remarks: timeSheet.remark,
        total_amount: Number(timeSheet.total_amount),
      },
    });
    console.log(res, "response from the server");
  };
  console.log(timeSheet.endTime, timeSheet.startTime);
  useEffect(() => {
    if (isSuccess) {
      console.log(data, "response from the server");
      toast(`You have added your logs.`, {
        description: `${timeSheet?.date} ,${timeSheet?.endTime} in ${timeSheet?.startTime}`,
        // action: {
        //   label: "Undo",
        //   onClick: () => console.log("Undo"),
        // },
      });
      router.replace("/timesheet");
    }
  }, [isSuccess]);

  const [companies, setCompanies] = useState([]);
  const [
    companiesApi,
    {
      data: comapniesData,
      isSuccess: companiesIsSuccess,
      error: companiesError,
      isError: companiesIsError,
    },
  ] = useComponiesMutation();

  const getCompanies = async () => {
    const res = await companiesApi({});
    // console.log(res, "response");
  };

  // useEffect(() => {
  //   getCompanies();
  // }, []);

  useEffect(() => {
    if (companiesIsSuccess) {
      console.log(comapniesData, "response from server");
      if (comapniesData) {
        setCompanies(comapniesData);
      }
    }
  }, [companiesIsSuccess]);
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
            <div className="flex items-center gap-4">
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Add Time and Logs
              </h1>

              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button size="sm" onClick={saveEmployeeDetails}>
                  Save
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>{date(Date.now())}</CardTitle>
                    <CardDescription>Enter the Details</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Start Time</Label>
                        <Input
                          id="name"
                          type="time"
                          className="w-full"
                          placeholder="Hamdan Al Maktoom"
                          onChange={(e) => {
                            e.preventDefault();
                            setTimeSheet({
                              ...timeSheet,
                              startTime: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">End Time </Label>
                        <Input
                          id="end"
                          type="time"
                          className="w-full"
                          onChange={(e) => {
                            e.preventDefault();
                            setTimeSheet({
                              ...timeSheet,
                              endTime: e.target.value,
                              hours_logged: calculateHours(
                                timeSheet.startTime,
                                timeSheet.endTime
                              ),
                            });
                          }}
                        />
                      </div>

                      <div className="grid gap-3">
                        <Label htmlFor="description">Remark</Label>
                        <Textarea
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                          className="min-h-32"
                          onChange={(e) => {
                            e.preventDefault();
                            setTimeSheet({
                              ...timeSheet,
                              remark: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Compony Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Compony</Label>
                        <Select
                          onValueChange={(value) =>
                            setTimeSheet({
                              ...timeSheet,
                              companyf: value,
                            })
                          }
                        >
                          <SelectTrigger
                            id="category"
                            aria-label="Select Compony"
                          >
                            <SelectValue placeholder="Select Compony" />
                          </SelectTrigger>
                          <SelectContent>
                            {companies.map(
                              (data: { name: string; url: string }, index) => (
                                <SelectItem key={index} value={data?.url}>
                                  {data?.name}
                                </SelectItem>
                              )
                            )}
                  
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">Designation</Label>
                        <Select
                          onValueChange={(value) =>
                            setTimeSheet({
                              ...timeSheet,
                              position: value,
                            })
                          }
                        >
                          <SelectTrigger
                            id="subcategory"
                            aria-label="Select Designation"
                          >
                            <SelectValue placeholder="Select subcategory" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Sales Member">
                              Sales Member
                            </SelectItem>
                            <SelectItem value="Team Leads">
                              Team Leads
                            </SelectItem>
                            <SelectItem value="Team Members">
                              Team Members
                            </SelectItem>
                            <SelectItem value="Sub-Contractors">
                              Sub-Contractors
                            </SelectItem>
                            <SelectItem value="Accountant Members">
                              Accountant Members
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="Salary">Salary (AED)</Label>
                        <Input
                          id="Salary"
                          type="number"
                          className="w-full"
                          placeholder="5000 AED"
                          onChange={(e) => {
                            e.preventDefault();
                            setTimeSheet({
                              ...timeSheet,
                              salary: Number(e.target.value),
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">Currency</Label>
                        <Select
                          onValueChange={(value) =>
                            setTimeSheet({
                              ...timeSheet,
                              Currency: value,
                            })
                          }
                        >
                          <SelectTrigger
                            id="subcategory"
                            aria-label="Select Currency"
                          >
                            <SelectValue placeholder="Select Currency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="AED">AED</SelectItem>
                            <SelectItem value="USD">USD</SelectItem>
                            <SelectItem value="INR">INR</SelectItem>
                            <SelectItem value="SAR">SAR</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="Hourly">Hourly Rate (AED)</Label>
                        <Input
                          id="Hourly"
                          type="number"
                          className="w-full"
                          placeholder="20 AED"
                          onChange={(e) => {
                            e.preventDefault();
                            setTimeSheet({
                              ...timeSheet,
                              hourly: Number(e.target.value),
                            });
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Houres Logged</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">
                          {calculateHours(
                            timeSheet.startTime,
                            timeSheet.endTime
                          )}{" "}
                          Hours
                        </Label>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-5">
                  <CardHeader>
                    <CardTitle>Archive Product</CardTitle>
                    <CardDescription>
                      Lipsum dolor sit amet, consectetur adipiscing elit.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div></div>
                    <Button size="sm" variant="secondary">
                      Archive Product
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 md:hidden">
              <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Product</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
