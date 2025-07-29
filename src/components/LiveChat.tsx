import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to Tomic Security. How can I help you with your security needs today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');

  const quickResponses = [
    'What services do you offer?',
    'Get a quote',
    'Service areas',
    'Emergency contact'
  ];

  const botResponses: { [key: string]: string } = {
    'what services do you offer?': 'We offer comprehensive security services including Home Security, CCTV Systems, Factory Security, Cybersecurity, Bodyguard Services, and Biometric Access Control. Which service interests you most?',
    'get a quote': 'I\'d be happy to help you get a quote! Please let me know: 1) What type of security service you need 2) Your location 3) Duration of service needed. You can also use our instant quote calculator above.',
    'service areas': 'We provide security services across Kenya, with our headquarters in Nairobi. We cover major cities and can discuss custom arrangements for remote locations. Where do you need our services?',
    'emergency contact': 'For emergencies, please call us immediately at (+254) 724630001. For non-urgent matters, you can continue chatting here or email us at info@tomicsecurity.com.',
    'default': 'Thank you for your question. For detailed information, please contact our team at (+254) 724630001 or email info@tomicsecurity.com. One of our security experts will assist you promptly.'
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      const response = botResponses[inputText.toLowerCase()] || botResponses.default;
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputText('');
  };

  const handleQuickResponse = (text: string) => {
    setInputText(text);
    handleSendMessage();
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed bottom-24 right-6 z-50 w-80 md:w-96 h-96 bg-card border border-border rounded-xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="bg-accent p-2 rounded-full">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Tomic Security Assistant</h3>
                  <p className="text-xs text-primary-foreground/80">Online • Usually replies instantly</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto h-64">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    <div className="flex items-start space-x-2">
                      {message.sender === 'bot' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      {message.sender === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Quick Responses */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickResponses.map((response, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleQuickResponse(response)}
                      className="text-xs bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground px-3 py-1 rounded-full transition-colors"
                    >
                      {response}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChat;