const users = [
    { name: 'Vazgen ', surname: "Sargsyan" },
    { name: 'Vahe  ', surname: "Sargsyan" },
    { name: 'David ', surname: "Burnazyan" },
    { name: 'Vahag ', surname: "Miqayelyan" },
    { name: 'Gndik ', surname: "Gndikyan" },
];


let text = ''

for (i = 0; i < users.length; i++) {
    text += users[i].name + users[i].surname + '||'
}

// users[0] = 'Vazgen ||'
// users[1] = 'Vahe ||'
// users[2] = 'David ||'
// users[3] = 'Vahag ||'
// users[4] = 'Gndik ||'
// console.log(users.surname);\

console.log(text);