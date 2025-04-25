import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

export default function ThankYouPage() {
    return (
      <div className="h-screen flex items-center justify-center text-center px-4">
        <div>
          <h1 className="text-4xl font-black mb-4 text-purple-700">Thank you!</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">Your message has been sent successfully.</p>
          <Button className="mt-4"><Link href={'/'} className="flex gap-2 items-center"><BiArrowBack />Return to Home</Link></Button>
        </div>
      </div>
    );
  }
  