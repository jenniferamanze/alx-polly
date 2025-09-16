"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Poll {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  totalVotes: number;
  isActive: boolean;
  category: string;
}

export function PollList() {
  const [polls, setPolls] = useState<Poll[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch polls
    // Simulate loading
    setTimeout(() => {
      setPolls([
        {
          id: "1",
          title: "What's your favorite programming language?",
          description: "Help us understand the community's preferences",
          author: "John Doe",
          createdAt: "2024-01-15",
          totalVotes: 42,
          isActive: true,
          category: "Technology",
        },
        {
          id: "2",
          title: "Best framework for web development?",
          description: "Share your experience with different frameworks",
          author: "Jane Smith",
          createdAt: "2024-01-14",
          totalVotes: 28,
          isActive: true,
          category: "Web Development",
        },
      ]);
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <CardHeader>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/2"></div>
            </CardHeader>
            <CardContent>
              <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-2/3"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {polls.map((poll) => (
        <Card key={poll.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-lg line-clamp-2">{poll.title}</CardTitle>
                <CardDescription className="mt-1">
                  by {poll.author} • {new Date(poll.createdAt).toLocaleDateString()}
                </CardDescription>
              </div>
              <Badge variant={poll.isActive ? "default" : "secondary"}>
                {poll.isActive ? "Active" : "Closed"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {poll.description}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>{poll.totalVotes} votes</span>
                <Badge variant="outline">{poll.category}</Badge>
              </div>
              <Link href={`/polls/${poll.id}`}>
                <Button size="sm">View Poll</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
