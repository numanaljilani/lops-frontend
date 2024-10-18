

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
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

export default function CreateEmployee() {
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
                <Button size="sm">Save Employee</Button>
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
                          defaultValue="Gamer Gear Pro Controller"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="name">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          className="w-full"
                          defaultValue="example@gmail.com"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="contact">Contact</Label>
                        <Input
                          id="contact"
                          type="number"
                          className="w-full"
                          placeholder="+971 999999999"
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                          className="min-h-32"
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
                        <Select>
                          <SelectTrigger
                            id="category"
                            aria-label="Select Compony"
                          >
                            <SelectValue placeholder="Select Compony" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem
                              value="
Lonsdaleite technical services"
                            >
                              Lonsdaleite technical services{" "}
                            </SelectItem>
                            <SelectItem value="electronics">
                              Electronics
                            </SelectItem>
                            <SelectItem value="accessories">
                              Accessories
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">
                          Designation
                        </Label>
                        <Select>
                          <SelectTrigger
                            id="subcategory"
                            aria-label="Select Designation"
                          >
                            <SelectValue placeholder="Select subcategory" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Team Leads">Team Leads</SelectItem>
                            <SelectItem value="Team Members">Team Members</SelectItem>
                            <SelectItem value="Sub-Contractors">Sub-Contractors</SelectItem>
                            <SelectItem value="Accountant">Accountant</SelectItem>
                          
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
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="subcategory">
                          Currency
                        </Label>
                        <Select>
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
                        <Label htmlFor="Salary">Hourly Rate (AED)</Label>
                        <Input
                          id="Salary"
                          type="number"
                          className="w-full"
                          placeholder="20 AED"
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
                        <Select>
                          <SelectTrigger id="status" aria-label="Select status">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="draft">On Leave</SelectItem>
                            <SelectItem value="published">Active</SelectItem>
                            <SelectItem value="archived">Suspended</SelectItem>
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
