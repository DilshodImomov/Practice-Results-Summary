import "./Result.css";
const Result = () => {
    return (
        <div className="resultBox">
            <h2>Your Result</h2>
            <div className="scoreCircle">
                <h1 className="score">76</h1>
                <p className="totalScore">of 100</p>
            </div>
            <div className="lowerText">
                <h1>Great</h1>
                <p>  You scored higher than 65% of the people who have taken these tests.</p>
            </div>
        </div>
    )
}
export default Result;