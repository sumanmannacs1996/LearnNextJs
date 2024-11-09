import Card from "@/app/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>Notification</div>
      <div>
        <Link href="/complex-dashboard/archived" className="text-blue-500 mr-4">
          Archived
        </Link>
      </div>
    </Card>
  );
}
