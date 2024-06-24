let count = 3
let inputBox = document.getElementById("number-player-input")
inputBox.value = count
let dropdown = document.getElementById("dropdown")
let spies
document.getElementById("words-textarea").value = "apple\nbanana\npotato\ntomato\ncarrot\nonion\nstrawberry\nblueberry\nraspberry\nblackberry\ngrape\nwatermelon\npeach\nplum\nmango\nkiwi\norange\nlemon\nlime\ngrapefruit\npear\npineapple\ncoconut\npapaya\nfig\ndate\napricot\ncherry\npomegranate\ncranberry\ncucumber\nzucchini\nsquash\npumpkin\npepper\nbroccoli\ncauliflower\nspinach\nlettuce\nkale\ncelery\nasparagus\nartichoke\navocado\ncabbage\neggplant\nokra\nradish\nbeet\nturnip\nrhubarb\nparsnip\nyam\ncorn\npea\nbean\nlentil\nchickpea\nsoybean\nalmond\ncashew\nwalnut\npecan\npistachio\nmacadamia\nhazelnut\nchestnut\npeanut"
function updateDropdown() {
    let count = inputBox.value;
    let max = Math.floor(count / 3);
    let currentSelection = dropdown.value;

    dropdown.innerHTML = "";
    for (let i = 1; i <= max; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.text = i;
        dropdown.appendChild(option);
    }

    if (dropdown.querySelector(`option[value='${currentSelection}']`)) {
        dropdown.value = currentSelection;
    } else if (dropdown.options.length > 0) {
        dropdown.value = dropdown.options[0].value;
        spies = dropdown.value; // Set spies to the default selected value
    }
}

function getSpies() {
    return spies
}

function getCount() {
    return count
}


inputBox.addEventListener('input', () => {
    count = inputBox.value
    if (count <= 0) {
        count = 1
        inputBox.value = count
    }
    updateDropdown()
})

dropdown.addEventListener('change', () => {
    spies = dropdown.value
    dropdown.value = spies
    console.log(spies)
    updateDropdown()
})

function increment() {
    count = inputBox.value

    if (count <= 0) {
        count = 1
    } else

        count++

    inputBox.value = count
    updateDropdown()
}

function decrement() {
    count = inputBox.value
    if (count > 1)
        count--

    inputBox.value = count
    updateDropdown()
}

document.getElementById('start-button').addEventListener('click', () => {
    console.log(spies)
    if (spies >= 1) {
        localStorage.setItem('playerCount', count);
        localStorage.setItem('spies', spies);
        localStorage.setItem('words', document.getElementById("words-textarea").value)
        window.location.href = 'pass.html';
    }
});

updateDropdown()