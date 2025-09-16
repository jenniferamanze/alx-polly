"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PollOption {
  id: string;
  text: string;
}

export function CreatePollForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    duration: "7", // days
  });
  const [options, setOptions] = useState<PollOption[]>([
    { id: "1", text: "" },
    { id: "2", text: "" },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOptionChange = (id: string, text: string) => {
    setOptions(options.map(option => 
      option.id === id ? { ...option, text } : option
    ));
  };

  const addOption = () => {
    const newId = (options.length + 1).toString();
    setOptions([...options, { id: newId, text: "" }]);
  };

  const removeOption = (id: string) => {
    if (options.length > 2) {
      setOptions(options.filter(option => option.id !== id));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const pollData = {
      ...formData,
      options: options.filter(option => option.text.trim() !== ""),
    };
    
    // TODO: Implement poll creation logic
    console.log("Creating poll:", pollData);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // TODO: Redirect to the new poll page
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">Poll Title</Label>
        <Input
          id="title"
          name="title"
          placeholder="What's your question?"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description (Optional)</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Provide more context about your poll"
          value={formData.description}
          onChange={handleInputChange}
          rows={3}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category}
            onValueChange={(value) => setFormData({ ...formData, category: value })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="politics">Politics</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
              <SelectItem value="sports">Sports</SelectItem>
              <SelectItem value="lifestyle">Lifestyle</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duration">Duration (days)</Label>
          <Select
            value={formData.duration}
            onValueChange={(value) => setFormData({ ...formData, duration: value })}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 day</SelectItem>
              <SelectItem value="3">3 days</SelectItem>
              <SelectItem value="7">1 week</SelectItem>
              <SelectItem value="14">2 weeks</SelectItem>
              <SelectItem value="30">1 month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <Label>Poll Options</Label>
        {options.map((option, index) => (
          <div key={option.id} className="flex items-center space-x-2">
            <Input
              placeholder={`Option ${index + 1}`}
              value={option.text}
              onChange={(e) => handleOptionChange(option.id, e.target.value)}
              required
            />
            {options.length > 2 && (
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => removeOption(option.id)}
              >
                Remove
              </Button>
            )}
          </div>
        ))}
        <Button
          type="button"
          variant="outline"
          onClick={addOption}
          className="w-full"
        >
          Add Option
        </Button>
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Creating Poll..." : "Create Poll"}
      </Button>
    </form>
  );
}
