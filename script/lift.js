const test = [[], [0], [1, 6], [5, 0], [2], [3], []];
const test_2 = [[], [], [6], [5], [], [], []];
const test_3 = [[], [], [5, 5, 5], [], [], [], []];

const test_4 = [[], [0], [1, 6], [5, 0], [2], [3], []];

const theLift = (queues, capacity = 2) => {
    const Array = [];
    function up() {
        const Arr = [0];
        queues.forEach((People, Floor) => {
            if (People.length) {
                People.forEach((Person, Index) => {
                    if (Person > Floor) {
                        Arr.push(Floor, Person);
                        queues[Floor] = queues[Floor].filter(
                            (item) => item != Person,
                        );
                    }
                });
            }
        });
        const reducedArr = [];

        Arr.forEach((item) => {
            if (!reducedArr.includes(item)) {
                reducedArr.push(item);
            }
        });
        Array.push(reducedArr.sort());

        const PeopleWaitingToGoDown = queues.filter(
            (People) => People.length > 0,
        );

        if (PeopleWaitingToGoDown.length) {
            down();
        } else {
            Array.push(0);
        }
    }

    function down() {
        const Arr = [];

        queues.forEach((People, Floor) => {
            if (People.length) {
                People.forEach((Person, Index) => {
                    if (Person < Floor) {
                        Arr.push(Floor, Person);
                        queues[Floor] = queues[Floor].filter(
                            (item) => item != Person,
                        );
                    }
                });
            }
        });

        const reducedArr = [];
        Arr.forEach((item) => {
            if (!reducedArr.includes(item)) {
                reducedArr.push(item);
            }
        });

        Array.push(reducedArr.sort().reverse());

        const PeopleWaitingToGoUp = queues.filter(
            (People) => People.length > 0,
        );

        if (PeopleWaitingToGoUp.length) {
            up();
        } else {
            if (!Arr.includes(0)) {
                Array.push(0);
            }
        }
    }

    up();

    return Array.flat();
};
