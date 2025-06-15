
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, CalendarDays, Clock } from "lucide-react";

export const Hero = () => (
  <section className="bg-white">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Monetize your Movement with TumaRide
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Whenever you're heading somewhere on public transport, earn money by helping others move things effortlessly.
          </p>
          <div className="space-y-4">
            <div className="relative">
              <Send className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Where are you going?"
                className="pl-10 h-12 bg-gray-50 border-gray-200"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Today"
                  className="pl-10 h-12 bg-gray-50 border-gray-200"
                  defaultValue="Today"
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Now"
                  className="pl-10 h-12 bg-gray-50 border-gray-200"
                  defaultValue="Now"
                />
              </div>
            </div>
            <Button size="lg" className="w-full bg-gray-900 hover:bg-gray-800 text-white h-12 font-semibold">
              Join our waitlist
            </Button>
          </div>
        </div>
        <div>
          <img
            src="/lovable-uploads/ea745938-e1f0-4a2e-8dd6-cf27b49dbba3.png"
            alt="Person on a bus in traffic"
            className="rounded-xl shadow-lg w-full h-full object-cover max-h-[500px]"
          />
        </div>
      </div>
    </div>
  </section>
);
