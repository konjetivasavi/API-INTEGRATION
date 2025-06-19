# API-INTEGRATION
Company : CODETECH IT SOLUTIONS

Name : Konjeti Vasavi

INTERN ID : CT04DF720

Duration : 4-WEEKS

Mentor : Neela Santhosh Kumar

Description For Developing a Webpage that Fetches and Displays Data from a public API like(Weather)

The weather app developed here is a simple yet visually appealing web-based application that allows users to check the current weather conditions of any city using the OpenWeatherMap API. This project involves three core components: the HTML for structure, the CSS for styling, and the JavaScript for interactivity and data fetching. Together, they deliver a user-friendly interface with dynamic content updates.

The HTML (HyperText Markup Language) section of the application sets up the page's structure. It begins with standard declarations like the <!DOCTYPE html> tag and necessary metadata such as character encoding and viewport settings for responsive design. The title of the page is set to “Weather App”, and an external CSS file named style.css is linked for styling purposes. Inside the <body>, there is a div with the class container which acts as the central layout area. It includes a heading (<h1>🌤️ Weather App) to give the page a clear title, an <input> field where the user can type a city name, and a <button> that triggers the JavaScript function getWeather() on click. There is also a <div> with the id weatherResult, which will be used to display the weather data returned by the API dynamically.

The CSS (Cascading Style Sheets) defines the visual layout and aesthetics of the application. The body is styled with a smooth gradient background transitioning from blue to a light aqua color, using a linear-gradient. It centers the content both vertically and horizontally using flexbox, and ensures that the page takes the full viewport height with height: 100vh. The .container class styles the main content area with a white background, padding, rounded corners, and a subtle box shadow for a card-like appearance. The input field is styled to be wide and neatly padded, while the button is styled with a bold blue background and white text, changing to a darker shade when hovered over to indicate interactivity. The #weatherResult section is styled to display output text with appropriate spacing and font sizing.

The JavaScript provides the interactive behavior and handles communication with the OpenWeatherMap API. The function getWeather() begins by capturing the value entered into the input field with the id cityInput. It then checks if the user has entered a valid city name; if not, an alert prompts the user to enter one. If a city is provided, the script constructs a URL using that city name and an API key to query the OpenWeatherMap service. However, a small issue in the current code is that the URL is defined using double quotes and {city} instead of backticks and ${city}, which must be corrected for the request to work properly. The function then makes an asynchronous fetch call to retrieve weather data. If the response is successful, it parses the JSON data and dynamically updates the HTML content inside the #weatherResult div to display the city name, temperature in Celsius, and a brief description of the weather. If an error occurs, such as an invalid city or network issue, an error message is shown instead.

In summary, this weather app is an excellent beginner-friendly project that demonstrates the integration of front-end technologies (HTML, CSS, and JavaScript) with a real-world API. It enhances user experience through clean design, real-time data updates, and simple validation, serving as a great starting point for learning full-stack web development.

OUTPUT:
![Image](https://github.com/user-attachments/assets/b4b524d4-9a2e-417a-aacc-166798baed8a)
