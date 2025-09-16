import { PollDetails } from "@/app/components/polls/poll-details";
import { PollResults } from "@/app/components/polls/poll-results";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface PollPageProps {
  params: {
    id: string;
  };
}

export default function PollPage({ params }: PollPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/polls">
            <Button variant="outline">← Back to Polls</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <PollDetails pollId={params.id} />
          <PollResults pollId={params.id} />
        </div>
      </div>
    </div>
  );
}
