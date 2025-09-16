import { CreatePollForm } from "@/app/components/polls/create-poll-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CreatePollPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/polls">
            <Button variant="outline">← Back to Polls</Button>
          </Link>
        </div>
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Create New Poll</h1>
            <p className="mt-1 text-sm text-gray-600">
              Share your question with the community
            </p>
          </div>
          <div className="p-6">
            <CreatePollForm />
          </div>
        </div>
      </div>
    </div>
  );
}
