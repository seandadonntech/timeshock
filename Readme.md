# City Time Zones

A simple HTML page that displays the current time in different cities based on the user's selection from a dropdown list. The time is automatically updated whenever a new city is selected.

## Features

- **City Selector**: Choose from a list of major cities (New York, Los Angeles, Chicago, London, Paris, Tokyo, Sydney).
- **Current Time Display**: Shows the current local time for the selected city.
- **Automatic Updates**: The time is updated immediately when a new city is selected.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Styling for centering elements and providing a clean, minimalistic design.
- **JavaScript**: Used to dynamically update the time display based on the selected city and its corresponding time zone.

## How to Use

1. **Open the HTML File**: Open `index.html` in any modern web browser (e.g., Chrome, Firefox, Edge).
2. **Select a City**: Use the dropdown menu to select a city.
3. **View the Time**: The current local time for the selected city will be displayed below the dropdown.

## Code Explanation

- **HTML Structure**: Contains a header (`<h1>`), a dropdown `<select>` menu for city selection, and a `<div>` to display the time.
- **CSS Styles**:
  - Centers all elements using CSS Grid.
  - Provides basic styling for the dropdown and text display.
- **JavaScript**:
  - Adds an event listener to the dropdown menu to detect changes.
  - Uses `Intl.DateTimeFormat` to format and display the current time based on the selected city's time zone.
  - Automatically updates the time display when the page loads and whenever a different city is selected.





## Setup

No installation or additional setup is required. Simply open the `index.html` file in a web browser.

## Contributing

If you would like to contribute to this project, feel free to fork the repository and submit a pull request with your changes.

## License

This project is open source and available under the MIT License.

---

**Enjoy using the City Time Zones page!**
