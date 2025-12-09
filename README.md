# # Traffic Analysis – Google Maps

Small personal project to explore Google Maps traffic data in the browser.

## What this does

- Shows a Google Map centered on a location (default: Pune, India)
- Lets you:
  - Change center with latitude/longitude and zoom
  - Toggle the Google Maps traffic layer
  - Take simple “snapshots” of what you’re looking at

No AI, no prediction. Just basic traffic visualization using the official Google Maps JavaScript API.

## How to run

1. Create a Google Cloud project and enable **Maps JavaScript API**.
2. Generate an API key and restrict it to your domain or localhost.
3. Replace `YOUR_API_KEY` in `index.html` with your key.
4. Serve the folder with any static server, for example:
