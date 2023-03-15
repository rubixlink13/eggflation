import './Conclusion.css';

const conclusion = "\
There is no singular factor that created the great Eggflation. \
Rather, it was a combination of the higher demands and the lower \
supplies that inevitably drove the prices up, which drove businesses \
to bankrupcy."

function Conclusion() {
    return (
        <div className="Conclusion">
            <h2>Conclusion</h2>
            <p>{conclusion}</p>
        </div>
    );
}

export default Conclusion;