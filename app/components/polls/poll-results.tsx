"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PollResultsProps {
  pollId: string;
}

interface PollOption {
  id: string;
  text: string;
  votes: number;
  percentage: number;
}

export function PollResults({ pollId }: PollResultsProps) {
  const [options, setOptions] = useState<PollOption[]>([]);
  const [totalVotes, setTotalVotes] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement API call to fetch poll results
    setTimeout(() => {
      const mockOptions = [
        { id: "1", text: "JavaScript", votes: 15, percentage: 35.7 },
        { id: "2", text: "Python", votes: 12, percentage: 28.6 },
        { id: "3", text: "TypeScript", votes: 8, percentage: 19.0 },
        { id: "4", text: "Rust", votes: 4, percentage: 9.5 },
        { id: "5", text: "Go", votes: 3, percentage: 7.1 },
      ];
      setOptions(mockOptions);
      setTotalVotes(42);
      setIsLoading(false);
    }, 1000);
  }, [pollId]);

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-2 bg-gray-200 rounded"></div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Poll Results</CardTitle>
        <CardDescription>
          {totalVotes} total votes
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {options.map((option) => (
            <div key={option.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{option.text}</span>
                <span className="text-sm text-gray-500">
                  {option.votes} votes ({option.percentage.toFixed(1)}%)
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${option.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
