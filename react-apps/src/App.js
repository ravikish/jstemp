import React, { useState } from "react";



function App() {
    const [score, setScore] = useState("10");
    const [comment,setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Number(score) < 5 && comment.length <= 10) {
            alert("Please provide a comment explaining the why the experience was poor!");
            return;
        }
        console.log("Form submitted successfully!");
    };
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Feedback Form</legend>
                    <div>
                        <label> Rating: {score}</label>
                        <input type="range" min="0" max="10" value={score} onChange={(e) => setScore(e.target.value)}></input>
                    </div>

                    <div>
                        <label htmlFor="comment">Comment:</label>
                        <textarea id="comment" value={comment} onChange={(e)=>setComment(e.target.value)}>Comment</textarea>
                    </div>
                    <button disabled={!comment } type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}
export default App;
