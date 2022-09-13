
// create the store
const counterSlice = RTK.createSlice({
    // here enter the needed pars for the slice
    name: 'counter',
    initialState: {
        total: 0
    },
    reducers: {
        increment: (state, action) => {
            state.total += action.payload;
        },
        decrement: (state, action) => {
            state.total -= action.payload;
        }
    }
})

// register slice
const store = RTK.configureStore({
    //register your slice reducer in the store
    reducer: {
        counter: counterSlice.reducer
    }
})

// render the new value of total
function render() {
    const state = store.getState();
    const counterEl = document.getElementById('counter');
    // your code here
    counterEl.innerHTML = `${state.counter.total}`;
}

// subscribe to changes
store.subscribe(render);

// register button onClick
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

// increment
increment.addEventListener('click', () => {
    store.dispatch(counterSlice.actions.increment(1));
});

// decrement
decrement.addEventListener('click', () => {
    store.dispatch(counterSlice.actions.decrement(1));
});

// render first time
render();