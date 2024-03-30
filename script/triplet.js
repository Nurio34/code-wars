function gimme(triplet) {
    const middle = [...triplet].sort((a, b) => a - b);
    console.log({ triplet, middle });
    // return triplet.indexOf([...triplet].sort()[1]);
}
