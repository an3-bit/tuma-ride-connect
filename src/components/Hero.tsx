import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CalendarDays, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { LocationInput } from "@/components/LocationInput";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "sonner";

const waitlistFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type WaitlistFormValues = z.infer<typeof waitlistFormSchema>;

const WaitlistForm = ({ setOpen }: { setOpen: (open: boolean) => void }) => {
  const form = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(data: WaitlistFormValues) {
    console.log("Waitlist form submitted:", data);
    toast.success("You've been added to the waitlist!", {
      description: `We'll notify you at ${data.email} when we launch.`,
    });
    setOpen(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
          Join Waitlist
        </Button>
      </form>
    </Form>
  );
};

export const Hero = () => {
  const [destination, setDestination] = useState("");
  const [locationDialogOpen, setLocationDialogOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [waitlistDialogOpen, setWaitlistDialogOpen] = useState(false);

  const handleLocationSelect = (location: string) => {
    setDestination(location);
    setLocationDialogOpen(false);
  };

  return (
    <section
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/lovable-uploads/c53bc5a9-471a-4502-9cdb-f5534845c084.png')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col items-center justify-center text-center min-h-[70vh] text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Monetize your Movement with TumaRide
        </h1>
        <p className="text-lg text-gray-200 mb-8 max-w-3xl">
          Whenever you're heading somewhere on public transport, earn money
          by helping others move things effortlessly.
        </p>

        <div className="w-full max-w-2xl bg-white/20 backdrop-blur-md p-6 rounded-lg border border-white/30">
          <div className="space-y-4 text-left">
            <Dialog
              open={locationDialogOpen}
              onOpenChange={setLocationDialogOpen}
            >
              <DialogTrigger asChild>
                <div className="relative">
                  <Send className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Where are you going?"
                    className="pl-10 h-12 bg-gray-50 border-gray-200 cursor-pointer text-gray-900"
                    value={destination}
                    readOnly
                  />
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-gray-900">
                    Set your destination
                  </DialogTitle>
                </DialogHeader>
                <LocationInput onLocationSelect={handleLocationSelect} />
              </DialogContent>
            </Dialog>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 z-10" />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-10 h-12 w-full justify-start text-left font-normal bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-900",
                        !date && "text-muted-foreground"
                      )}
                    >
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Now"
                  className="pl-10 h-12 bg-gray-50 border-gray-200 text-gray-900"
                  defaultValue="Now"
                />
              </div>
            </div>
            <Dialog
              open={waitlistDialogOpen}
              onOpenChange={setWaitlistDialogOpen}
            >
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 font-semibold"
                >
                  Join our waitlist
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="text-gray-900">
                    Join the Waitlist
                  </DialogTitle>
                  <DialogDescription className="text-gray-500">
                    Be the first to know when TumaRide launches. We'll send you
                    an email once we're live.
                  </DialogDescription>
                </DialogHeader>
                <WaitlistForm setOpen={setWaitlistDialogOpen} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};
