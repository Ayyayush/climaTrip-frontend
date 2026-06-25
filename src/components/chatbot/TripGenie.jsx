import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const TripGenie = ({ user, onShowAuth }) => {

    const [isOpen, setIsOpen] = useState(false);

    const [input, setInput] = useState("");

    const [loading, setLoading] = useState(false);

    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content: `👋 Hi! I'm TripGenie ✨

I can help with:

• Trip planning
• Destination recommendations
• Budget suggestions
• Travel tips
• Weather guidance

Where would you like to travel?`
        }
    ]);

    const handleOpen = () => {

        if (!user) {

            toast.error("Please login to access TripGenie");

            setTimeout(() => {
                onShowAuth();
            }, 1000);

            return;
        }

        setIsOpen(!isOpen);
    };

    const sendMessage = async () => {

        if (!input.trim()) return;

        const userMessage = {
            role: "user",
            content: input
        };

        setMessages(prev => [...prev, userMessage]);

        const currentInput = input;

        setInput("");

        try {

            setLoading(true);

            const res = await axios.post(
                `${API_URL}/api/chat`,
                {
                    message: currentInput
                }
            );

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    content: res.data.response
                }
            ]);

        }
        catch (error) {

            setMessages(prev => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, I couldn't process your request."
                }
            ]);

        }
        finally {

            setLoading(false);

        }
    };

    return (
        <>
            <button
                onClick={handleOpen}
                className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-3 rounded-full shadow-xl transition-all duration-300"
            >
                🧞 TripGenie
            </button>

            {
                isOpen && (

                    <div className="fixed bottom-24 right-6 w-96 h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border">

                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl font-semibold">
                            🧞 TripGenie AI Assistant
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-3">

                            {
                                messages.map((msg, index) => (

                                    <div
                                        key={index}
                                        className={`p-3 rounded-xl max-w-[85%] whitespace-pre-line ${
                                            msg.role === "user"
                                                ? "ml-auto bg-blue-600 text-white"
                                                : "bg-gray-100 text-gray-800"
                                        }`}
                                    >
                                        {msg.content}
                                    </div>

                                ))
                            }

                            {
                                loading && (

                                    <div className="bg-gray-100 p-3 rounded-xl w-fit">
                                        TripGenie is typing...
                                    </div>

                                )
                            }

                        </div>

                        <div className="p-3 border-t flex gap-2">

                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Ask about your next trip..."
                                className="flex-1 border rounded-lg px-3 py-2 outline-none"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        sendMessage();
                                    }
                                }}
                            />

                            <button
                                onClick={sendMessage}
                                disabled={loading}
                                className="bg-blue-600 text-white px-4 rounded-lg disabled:opacity-50"
                            >
                                Send
                            </button>

                        </div>

                    </div>

                )
            }
        </>
    );
};

export default TripGenie;