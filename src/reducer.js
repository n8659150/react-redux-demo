function reducer (state = { text: '', anotherText: 'anotherText' }, action) {
    switch (action.type) {
        case 'changeText':
        let newState = JSON.parse(JSON.stringify(state))
            newState.text = action.payload;
            return newState
        default:
            return state;

    }
        
}

export default reducer;