"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PollDetailsProps {
  pollId: string;
}

interface Poll {
  id: string;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  totalVotes: number;
  isActive: boolean;
  category: string;
  options: PollOption[];
}

interface PollOption {
  id: string;
  text: string;
  votes: number;
}

export function PollDetails({ pollId }: PollDetailsProps) {
  const [poll, setPoll] = useState<Poll | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    // TODO: Implement API call to fetch poll details
    setTimeout(() => {
      setPoll({
        id: pollId,
        title: "What's your favorite programming language?",
        description: "Help us understand the community's preferences and share your experience with different programming languages.",
        author: "John Doe",
        createdAt: "2024-01-15",
        totalVotes: 42,
        isActive: true,
        category: "Technology",
        options: [
          { id: "1", text: "JavaScript", votes: 15 },
          { id: "2", text: "Python", votes: 12 },
          { id: "3", text: "TypeScript", votes: 8 },
          { id: "4", text: "Rust", votes: 4 },
          { id: "5", text: "Go", votes: 3 },
        ],
      });
      setIsLoading(false);
    }, 1000);
  }, [pollId]);

  const handleVote = async () => {
    if (!selectedOption || !poll) return;
    
    // TODO: Implement vote submission
    console.log("Voting for option:", selectedOption);
    setHasVoted(true);
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-10 bg-gray-200 rounded"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!poll) {
    return (
      <Card>
        <CardContent className="text-center py-8">
          <p className="text-gray-500">Poll not found</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-2xl">{poll.title}</CardTitle>
            <CardDescription className="mt-2">
              by {poll.author} • {new Date(poll.createdAt).toLocaleDateString()}
            </CardDescription>
          </div>
          <Badge variant={poll.isActive ? "default" : "secondary"}>
            {poll.isActive ? "Active" : "Closed"}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-6">{poll.description}</p>
        
        {poll.isActive && !hasVoted ? (
          <div className="space-y-3">
            <h3 className="font-semibold">Select your answer:</h3>
            {poll.options.map((option) => (
              <div
                key={option.id}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedOption === option.id
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedOption(option.id)}
              >
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="poll-option"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={() => setSelectedOption(option.id)}
                    className="mr-3"
                  />
                  <span>{option.text}</span>
                </div>
              </div>
            ))}
            <Button 
              onClick={handleVote} 
              disabled={!selectedOption}
              className="w-full mt-4"
            >
              Submit Vote
            </Button>
          </div>
        ) : hasVoted ? (
          <div className="text-center py-4">
            <p className="text-green-600 font-semibold">Thank you for voting!</p>
            <p className="text-sm text-gray-500 mt-1">
              Your vote has been recorded
            </p>
          </div>
        ) : (
          <div className="text-center py-4">
            <p className="text-gray-500">This poll is no longer active</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
