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
import { useComponiesMutation } from "@/redux/query/componiesApi";
import { useCreateEmployeeMutation } from "@/redux/query/employee";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function CreateEmployee() {
  const router = useRouter();
  const [employeeDetails, setEmployeeDetails] = useState<{
    name: string;
    email: string;
    contact: string;
    description: string;
    location: string;
    companyf: string;
    position: string;
    salary: number;
    hourly: number;
    Currency: string;
    status: string;
  }>({
    name: "",
    email: "",
    contact: "",
    description: "",
    location: "",
    companyf: "",
    position: "",
    salary: 0,
    hourly: 0,
    Currency: "",
    status: "",
  });

  const [createEmployeeApi, { data, isSuccess, error, isError }] =
    useCreateEmployeeMutation();
  const saveEmployeeDetails = async () => {

    if(!employeeDetails.name){
      toast(`Name cant be empty.`);
      return
    }
    if(!employeeDetails.email){
      toast(`email cant be empty.`);
      return
    }
    if(!employeeDetails.location){
      toast(`location cant be empty.`);
      return
    }
    if(!employeeDetails.description){
      toast(`description cant be empty.`);
      return
    }
    if(!employeeDetails.position){
      toast(`position cant be empty.`);
      return
    }
    if(!employeeDetails.companyf){
      toast(`Company cant be empty.`);
      return
    }
    console.log(employeeDetails);
    const res = await createEmployeeApi({ ...employeeDetails });
    console.log(res, "response from the server");
  };

  useEffect(() => {
    if (isSuccess) {
      console.log(data, "response from the server");
      toast(`User has been created.`, {
        description: `${employeeDetails?.name} has been joint as ${employeeDetails?.position} in ${employeeDetails?.companyf}`,
        // action: {
        //   label: "Undo",
        //   onClick: () => console.log("Undo"),
        // },
      });
      router.replace("/employee");
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

  useEffect(() => {
    getCompanies();
  }, []);

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
                Create Employee
              </h1>

              <div className="hidden items-center gap-2 md:ml-auto md:flex">
                <Button variant="outline" size="sm">
                  Discard
                </Button>
                <Button size="sm" onClick={saveEmployeeDetails}>
                  Save Employee
                </Button>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Employee Details</CardTitle>
                    <CardDescription>
                      Enter the employee details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          placeholder="Hamdan Al Maktoom"
                          onChange={(e) => {
                            e.preventDefault();
                            setEmployeeDetails({
                              ...employeeDetails,
                              name: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          className="w-full"
                          placeholder="example@gmail.com"
                          onChange={(e) => {
                            e.preventDefault();
                            setEmployeeDetails({
                              ...employeeDetails,
                              email: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Location</Label>
                        <Input
                          id="location"
                          type="text"
                          className="w-full"
                          placeholder="Dubai , Abu dhabi , Sharjah"
                          onChange={(e) => {
                            e.preventDefault();
                            setEmployeeDetails({
                              ...employeeDetails,
                              location: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="contact">Contact</Label>
                        <Input
                          id="contact"
                          type="number"
                          className="w-full"
                          placeholder="+971 999999999"
                          onChange={(e) => {
                            e.preventDefault();
                            setEmployeeDetails({
                              ...employeeDetails,
                              contact: e.target.value,
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                          className="min-h-32"
                          onChange={(e) => {
                            e.preventDefault();
                            setEmployeeDetails({
                              ...employeeDetails,
                              description: e.target.value,
                            });
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card x-chunk="dashboard-07-chunk-1">
                  <CardHeader>
                    <CardTitle>Compony Details</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="grid gap-3">
                        <Label htmlFor="category">Compony</Label>
                        <Select
                          onValueChange={(value) =>
                            setEmployeeDetails({
                              ...employeeDetails,
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
                            {/* <SelectItem value="http://127.0.0.1:8000/api/v1/employees/4/">
                              LECS
                            </SelectItem> */}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">Designation</Label>
                        <Select
                          onValueChange={(value) =>
                            setEmployeeDetails({
                              ...employeeDetails,
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
                            setEmployeeDetails({
                              ...employeeDetails,
                              salary: Number(e.target.value),
                            });
                          }}
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">Currency</Label>
                        <Select
                          onValueChange={(value) =>
                            setEmployeeDetails({
                              ...employeeDetails,
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
                            setEmployeeDetails({
                              ...employeeDetails,
                              hourly: Number(e.target.value),
                            });
                          }}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-3">
                  <CardHeader>
                    <CardTitle>Employee Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="status">Status</Label>
                        <Select
                          onValueChange={(value) =>
                            setEmployeeDetails({
                              ...employeeDetails,
                              status: value,
                            })
                          }
                        >
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            {/* <SelectItem value="draft">On Leave</SelectItem> */}
                            <SelectItem value={"Active"}>Active</SelectItem>
                            <SelectItem value={"Inactive"}>Inactive</SelectItem>
                          </SelectContent>
                        </Select>
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
