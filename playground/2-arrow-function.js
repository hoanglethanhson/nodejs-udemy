// const square = x => x*x
// console.log(square(3))
const event = {
    name: 'Birthday party',
    guestList: ['son', 'john', 'paul'],
    printGuestList() {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach(guest => console.log(guest) + ' attending')
    }
}

event.printGuestList()