import Card from "@/app/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>Archived Notification</div>
      <div>
        <Link href="/complex-dashboard" className="text-blue-500 mr-4">
          Default
        </Link>
      </div>
    </Card>
  );
}
