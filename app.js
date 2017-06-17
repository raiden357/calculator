// to generate state

function generateState(operation. numA, numB, result) {
	var newState = {
	  numA: numA || 0,
	  numB: numB || 0,
	  operation: operation,
	  result: result
	};
	return newState;
}

// To add new number to calculator state

function setNumber(state, newValue) {
	if (state.operation == null) {
	  return generateState(state.operation, state.numA += newValue, state.numB, state.result);
	} else {
	    // if operator is present, set as numB
	    return generateState(state.operation, state.numA, state.numB += newValue, state.result);
	}
}

// To set an operator
function set
