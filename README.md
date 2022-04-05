# Mongoose-Flight-Lab

## Part 1

1. Use express generator to create a `mongoose-flights` project. Be sure to install the node modules after you cd into the project.

2. Create a **config/database.js** module that connects to a database named `flights`. Be sure to require the module in **server.js**.

3. Create a `Flight` Model with the following properties:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `airline`| `String`| `enum` to include 'American', 'Southwest' & 'United' | n/a | 
	| `airport`| `String`| `enum` to include<br>'AUS', 'DFW', 'DEN', 'LAX' & 'SAN' | 'DEN' |
	| `flightNo`| `Number`| Required<br>Between `10` and `9999` | n/a | 
	| `departs`| `Date`| n/a | One year from date created | 

4. Implement the following User Stories:
	- AAU, I want to view a list of all flights (index view) that displays each flight's airline, airport, flight no., and departure date/time.
	
	- AAU, I want to create flights by entering the information on a page (new view) that has a form and submitting it.

	- AAU, I want to be able to access each view via a navigation bar at the top of the page with links to:
		- `ALL FLIGHTS`, and
		- `ADD FLIGHT`

## Part 2 

1. Create a `destinationSchema` that will provide the structure for _destination_ subdocuments that will be embedded:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `airport`| `String`| `enum` to include<br>'AUS', 'DFW', 'DEN', 'LAX' & 'SAN' | n/a |
	| `arrival`| `Date`| n/a | n/a | 

2. Add the following additional property to the `Flight` Model:

	| Property | Type | Validations | Default Value |
	|---|---|---|---| 
	| `destinations`| `[destinationSchema]`| n/a | n/a | 

3. Implement the following User Story:<br>_AAU, when viewing the list of flights, I want to click on a "detail" link displayed next to each flight to view all of the properties for that flight (`show` view), including each of its destinations._

5. Implement the following User Story:<br>_AAU, when viewing the details page (`show` view) for a flight, I want to be able to add a destination for that flight._  Each destination, as defined by the schema above, includes an `arrival` date/time & one of the established airport codes._<br>Note: Multiple destinations are possible by adding them one at a time.

4. Implement the following User Story:<br>_AAU, when viewing the details page (`show` view) for a flight, I want to see a list of that flight's `destinations` (`airport` & `arrival`)_

## Part 3

1. Create a `ticketSchema` that will be compiled into a `Ticket` Model with the following properties:

	| Property | Type | Validations | Default Value |
	|---|---|---|---|
	| `seat`| `String`| Must be 'A1' thru 'F99' (see hints) | n/a |
	| `price`| `Number`| Minimum of `0` | n/a |
	| `flight`| `ObjectId`| Include `ref: 'Flight'` to enable population | n/a |