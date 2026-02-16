import React, { useState } from 'react';
import { Brain, Send, ShieldCheck } from 'lucide-react';
import { model } from './services/geminiService';

function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input) return;
    setLoading(true);
    try {
      const result = await model.generateContent(input);
      setResponse(result.response.text());
    } catch (error) {
      console.error(error);
      setResponse("Error: Check your API key or connection.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <header className="mb-12 flex items-center gap-3">
        <div className="rounded-xl bg-teal-600 p-2 text-white">
          <Brain size={32} />
        </div>
        <h1 className="text-3xl font-bold text-slate-800">JFDI - Brain Backup</h1>
      </header>

      <main className="mx-auto max-w-4xl">
        <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200">
          <div className="flex gap-4">
            <input 
              className="flex-1 rounded-lg border border-slate-300 px-4 py-2 focus:outline-teal-500"
              placeholder="Dump your brain here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button 
              onClick={handleSend}
              disabled={loading}
              className="flex items-center gap-2 rounded-lg bg-teal-600 px-6 py-2 font-semibold text-white hover:bg-teal-700 disabled:opacity-50"
            >
              {loading ? 'Processing...' : <><Send size={18} /> Send</>}
            </button>
          </div>

          {response && (
            <div className="mt-8 rounded-xl bg-teal-50 p-6 border border-teal-100">
              <div className="flex items-center gap-2 mb-2 text-teal-800 font-semibold">
                <ShieldCheck size={20} />
                <span>AI Response:</span>
              </div>
              <p className="text-slate-700 leading-relaxed">{response}</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
