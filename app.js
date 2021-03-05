const MyApp = {
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
        }
    }
};

Vue.createApp(MyApp).mount('#app');



// const buttonEl = document.querySelector('button');
// const inputE1 = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     console.log('jajajajajaj')
//     const enteredValue = inputE1.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputE1.value = '';

// }

// buttonEl.addEventListener('click', addGoal);