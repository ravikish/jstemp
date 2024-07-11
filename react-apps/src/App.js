import React, { useState } from "react";



function App() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        console.log("Form submitted successfully!");
    };
    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Personalia</legend>
                    <div className="Field">
                        <label htmlFor="name">Name:</label>
                        <input id="name" type="text" placeholder="Name" name="name" value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <button disabled={!name} type="submit">Submit</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}
export default App;
