import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import { useEffect, useState } from "react";
import axios from "axios";
import Markdown from "react-markdown";
const CodeReview = () => {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);

  const [review, setReview] = useState("");

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    const res = await axios.post("http://localhost:3000/ai/get-review", {
      code,
    });

    setReview(res.data.response);
  }
  return (
    <>
      <main className="flex flex-col md:flex-row w-full h-screen bg-[#0f172a] text-white">
        {/* LEFT SIDE - Code Editor */}
        <section className="flex flex-col w-full md:w-1/2 h-1/2 md:h-full border-r border-gray-700">
          <div className="p-4 flex justify-between items-center bg-[#1e293b] border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-200">Code Editor</h2>
            <button
              onClick={reviewCode}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 transition rounded-md text-sm font-medium"
            >
              Review Code
            </button>
          </div>

          <div className="flex-1 overflow-auto p-4 bg-[#0f172a]">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: 15,
                minHeight: "100%",
                background: "transparent",
                outline: "none",
                color: "#e2e8f0",
              }}
            />
          </div>
        </section>

        {/* RIGHT SIDE - AI Review */}
        <section className="flex flex-col w-full md:w-1/2 h-1/2 md:h-full bg-[#1e293b]">
          <div className="p-4 border-b border-gray-700">
            <h2 className="text-lg font-semibold text-gray-200">AI Review</h2>
          </div>

          <div className="flex-1 overflow-auto p-6 text-gray-300 leading-relaxed markdown-body">
            {review ? (
              <Markdown>{review}</Markdown>
            ) : (
              <p className="text-gray-500 text-sm italic">
                Your AI-generated review will appear here...
              </p>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default CodeReview;
