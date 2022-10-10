import actions from "./Actions";

function reducer(state, action) {
	//let meal, quantity, item, id;
	let instrument, quantity, item, id;
	switch (action.type) {
		case actions.ADD_INSTRUMENT:
			instrument = action.payload.instrument;
			quantity = action.payload.quantity;
			item = state.cart.find((c) => c.instrument.id === instrument.id);
			//item = state.cart.find((c) => c.meal.id === meal.id);

			if (!item) {
				return {
					...state,
					cart: [...state.cart, { instrument, quantity }],
				};
			}

			return reducer(state, {
				type: actions.UPDATE_INSTRUMENT,
				payload: {
					id: instrument.id,
					quantity,
				},
			});

		case actions.UPDATE_INSTRUMENT:
			id = action.payload.id;
			quantity = action.payload.quantity;
			item = state.cart.find((c) => c.instrument.id === id);
			item.quantity += quantity;
			return { ...state, cart: [...state.cart] };

		case actions.SET_INSTRUMENT:
			return {
				...state,
				instrument: action.payload
			}
		
		case action.DELETE_INSTRUMENT:
			instrument = action.payload.instrument;
			quantity = action.payload.quantity;
			item = state.cart.find((c) => c.instrument.id === instrument.id);
			//item = state.cart.find((c) => c.meal.id === meal.id);

			if (item) {
				
				return {
					...state,
					cart: [...state.cart],
				};
			}


		default:
			throw new Error("No existe dicha acción");
	}
}

export default reducer;