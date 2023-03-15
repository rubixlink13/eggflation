import './Introduction.css';

const intro1 = "\
In August 2020, I was hired to work at MoDo Hawaii, \
a mochi donut shop. When I started, we were still a \
pop-up shop in San Jose. Just a few months after, we \
closed the pop-up and opened a permanent shop in Santa \
Clara. Although I was hired as a food service worker, \
at the new shop I took on new responsibilities as a \
supervisor. I oversaw daily operations, and was also \
in charge of ordering from our suppliers.";

const intro2 = "\
When I returned to Irvine for in person classes, I \
transferred to our Irvine location, starting as a food \
service worker. Months later, I was promoted to supervisor \
again, becoming one of two supervisors at two separate \
locations. Unfortunately, in October 2022, MoDo Hawaii \
went out of business due to massive increases in supply \
prices. Out of our 5 locations, only the Santa Clara \
location survived. As a result, I was also laid off, \
as the Irvine location ceased to exist.";

const eggs = "\
Mochi donuts are comprised of common ingredients, \
including eggs. Due to their (originally) cheap price \
and high nutritional value, eggs are actually considered \
an ";

const inferiorgoods = "\
According to the textbook, \"a good is inferior when its \
quantity demanded increases when income/wealth decreases.\" \
Throughout the pandemic, families across the world have \
struggled financially. According to a ";

const study = " \
by Pew Research Center, between 2019 and 2020, \"the median \
income of lower-income households decreased by 3.0% and the \
median income of middle-income households fell by 2.1%.\"";

const graph = "\
The interactive graph below shows how changes in income \
will shift the demand curve (click and drag the slider!)"

function Introduction() {
    return (
        <div className = "Introduction">
            <h2>Background</h2>
            <p>{intro1}</p>
            <p>{intro2}</p>
            <h2>Eggs</h2>
            <p>{eggs}<strong>inferior good</strong>.</p>
            <p>{inferiorgoods}<a target="_blank" href="https://www.pewresearch.org/social-trends/2022/04/20/covid-19-pandemic-pinches-finances-of-americas-lower-and-middle-income-families/#:~:text=From%202019%20to%202020%2C%20the,Center%20analysis%20of%20government%20data.">study</a>{study}</p>
            <p>{graph}</p>
        </div>
    );
}

export default Introduction;