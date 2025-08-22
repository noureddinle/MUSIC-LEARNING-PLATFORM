"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your MusicLearn assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const predefinedResponses: Record<string, string> = {
    hello: "Hello! Welcome to MusicLearn. How can I assist you with your musical journey?",
    hi: "Hi there! I'm here to help you with any questions about our courses and platform.",
    courses:
      "We offer a wide variety of music courses including Music Theory, Bass Guitar, Vocal Training, Music Production, and more. Would you like to know about a specific course?",
    pricing:
      "Our courses range from $39.99 to $199.99. We also offer subscription plans starting at $49.99/month with access to all courses. Would you like more details?",
    help: "I can help you with course information, technical support, billing questions, and general inquiries. What would you like to know?",
    support:
      "For technical support, you can contact us at support@musiclearn.com or use our contact form. I can also try to help you right now!",
    refund:
      "We offer a 30-day money-back guarantee on all courses. If you're not satisfied, you can request a full refund within 30 days of purchase.",
    certificate:
      "Yes! You'll receive a certificate of completion for each course you finish. These certificates can be downloaded from your dashboard.",
    progress:
      "You can track your progress in your dashboard. It shows completion percentages, time spent learning, and upcoming lessons.",
    default:
      "I understand you're asking about that. For detailed information, please contact our support team at support@musiclearn.com or fill out our contact form. Is there anything else I can help you with?",
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])

    // Simple bot response logic
    setTimeout(() => {
      const lowerInput = inputValue.toLowerCase()
      let botResponse = predefinedResponses.default

      // Check for keywords in the input
      for (const [keyword, response] of Object.entries(predefinedResponses)) {
        if (lowerInput.includes(keyword)) {
          botResponse = response
          break
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)

    setInputValue("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const quickActions = [
    "Tell me about courses",
    "How much do courses cost?",
    "How do I get a certificate?",
    "I need technical support",
  ]

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 rounded-full w-14 h-14 shadow-lg z-50"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    )
  }

  return (
    <Card className="fixed bottom-6 left-6 w-80 h-96 shadow-xl z-50 flex flex-col">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          <Bot className="w-4 h-4" />
          MusicLearn Assistant
        </CardTitle>
        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => setIsOpen(false)}>
          <X className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col p-0">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "bot" && (
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-3 h-3 text-primary-foreground" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-lg px-3 py-2 text-sm ${
                    message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  {message.text}
                </div>
                {message.sender === "user" && (
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-3 h-3" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Quick Actions */}
        {messages.length === 1 && (
          <div className="p-4 border-t">
            <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
            <div className="space-y-1">
              {quickActions.map((action) => (
                <Button
                  key={action}
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start text-xs h-auto py-1"
                  onClick={() => {
                    setInputValue(action)
                    setTimeout(handleSendMessage, 100)
                  }}
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button size="icon" onClick={handleSendMessage}>
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
