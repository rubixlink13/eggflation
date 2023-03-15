import './EggDisaster.css'

const intro = "\
One of the leading causes of the massive increase in egg prices \
is the shortages. Due to multiple events within the past year, \
egg supply has taken a massive hit."

const flu = "\
The avian influenza outbreak heavily impacted poultry farmers. \
While birds often do carry flu in their stomachs without any \
problems, occasionally the flu virus becomes super contagious \
and deadly. Recently, many birds have been infected with a \
deadly strain of avian flu, which greatly reduced the chicken \
population. It is worth noting that eggs laid by chicken infected \
by the bird flu are still safe to eat, provided that they are \
properly prepared."

const fire = "\
A much more sudden incident that reduced the chicken population \
to an extent was the fire at the Hillandale Farms property \
in Connecticut, where about 100,000 egg-laying hens perished. \
As tragic as this event was, it did not affect the egg prices \
nearly as much as the avian flu. In 2021, the US had almost 400 \
million egg-laying hens, so in the grand scheme of things, 100,000 \
hens doesn't even amount to a tenth of a percent of the population. "

const summary = "\
The loss of supply combined with the increase in demand greatly \
shifted the market equilibrium price up drastically. The graph \
below shows the change in the supply and demand curves, and how \
the market equilibrium is affected. The sliders can be used to \
simulate different shifts in the market."

function EggDisaster() {
    return (
        <div className = "EggDisaster">
            <h2>Egg Shortages</h2>
            <p>{intro}</p>
            <p>{flu}</p>
            <p>{fire}</p>
            <p>{summary}</p>
        </div>
    )
};

export default EggDisaster;