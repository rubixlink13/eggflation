import './EggPrices.css';

const intro = "\
As everyone knows, egg prices have been soaring globally, \
even more than most people might have realized. While egg \
prices by the dozen might have doubled or tripled, larger \
orders of egg have suffered much more. At MoDo, we ordered \
eggs in boxes of 180 (containing 6 trays of 30 eggs each). \
In June 2020, one box of 180 eggs cost $22.58, but this month, \
the same box costs $112.99, 5 times the original price.";

const graph = "\
The interactive graph below shows different price points \
throughout the pandemic (hover over the data points!)";

function EggPrices() {
    return (
        <div className = "EggPrices">
            <h2>The Rise of Egg Prices</h2>
            <p>{intro}</p>
            <p>{graph}</p>
        </div>
    );
}

export default EggPrices;