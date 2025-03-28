
# MyTreeMap



## An interactive urban forestry platform for Indian cities

MyTreeMap Explorer is an open-source platform that maps, monitors, and celebrates India's urban forests. The project aims to create awareness about the importance of trees in our cities and provide valuable data for urban forest management and conservation efforts.

**Live Demo:** [https://mytreemap.netlify.app](https//mytreemap.netlify.app)

## Screenshots
Here are some screenshots of the application:

![Screenshot 1](./public/ss1.png)
*Screenshot 1: Homepage with city view*

![Screenshot 2](./public/ss2.png)
*Screenshot 2: Detailed city analytics*

![Screenshot 3](./public/ss3.png)
*Screenshot 3: User interaction with map overlays*

![Screenshot 4](./public/ss4.png)
*Screenshot 4: Mobile responsive design*


## Features

- 🌳 **Interactive Tree Map**: Explore tree locations across major Indian cities
- 📊 **City Statistics**: View detailed tree statistics for each city
- 🌤️ **Air Quality Data**: Real-time AQI data and its correlation with tree cover
- 📱 **Embeddable Widgets**: Free widgets to share tree data on your website
- 📈 **Environmental Impact**: Visualize the benefits of urban trees on air quality and climate
- 📝 **Research Integration**: Access to research papers and methodologies

## City Coverage

The platform currently includes data for the following cities:

- Delhi
- Mumbai
- Bangalore
- Chennai
- Kolkata
- Hyderabad
- Ahmedabad
- Pune

*More cities are being added regularly*

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- MapBox GL JS
- Recharts
- Lucide Icons
- TanStack Query

## Running Locally

1. Clone the repository:

```bash
git clone https://github.com/liveupx/MyTreeMap.git
cd MyTreeMap-explorer
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory with:

```
VITE_MAPBOX_TOKEN=pk.eyJ1IjoibGl2ZXVweCIsImEiOiJjbThzbnU1aHowMXdiMmtzNnZrbnJ2bG93In0.dq6Z_8Cf7pj19tDqCWp9hQ
```

4. Start the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/           # UI components
│   ├── ui/               # shadcn/ui components
│   ├── MapBox.tsx        # Map rendering component
│   ├── StatsPanel.tsx    # City statistics visualizations
│   └── ...               # Other components
├── pages/                # Application pages
│   ├── Index.tsx         # Homepage
│   ├── About.tsx         # About page
│   └── ...               # Other pages
├── hooks/                # Custom React hooks
├── lib/                  # Utilities and helper functions
├── App.tsx               # Main application component
└── main.tsx              # Application entry point
```

## Embedding Widgets

MyTreeMap Explorer provides free embeddable widgets that can be added to any website. To use a widget:

1. Visit [https://mytreemap.pages.dev/widgets](https://mytreemap.pages.dev/widgets)
2. Choose a widget type (Tree Count, AQI, or Statistics)
3. Customize the widget
4. Copy the embed code and paste it into your website

Example embed code:

```html
<iframe 
  src="https://mytreemap.netlify.app/embed?city=Delhi&type=treeCount&theme=light" 
  width="300" 
  height="200" 
  frameborder="0"
  title="MyTreeMap Explorer - Delhi tree count widget"
></iframe>
```

## Contributing

We welcome contributions from developers, data scientists, urban planners, and tree enthusiasts! Here's how you can contribute:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

For major changes, please open an issue first to discuss what you would like to change.

## Data Sources & Methodology

MyTreeMap Explorer uses data from various sources, including:

- Municipal corporation tree censuses
- Satellite imagery analysis
- Community reporting
- Scientific research studies

For more information about our data methodology, visit [https://mytreemap.netlify.app/methodology](https://mytreemap.netlify.app/methodology)

## Contact & Support

- **Email**: mohit@liveupx.com (For support/help/donations)
- **General Inquiries**: ceo@liveupx.com
- **More Widgets**: [https://widgetx.site](https://widgetx.site)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Developed by Mohit Chaprana, Founder of [Liveupx.com](https://liveupx.com)
- Inspired by NYC's Tree Map project
- Thanks to all our [partner organizations](https://mytreemap.pages.dev/partners)
- Special thanks to all contributors and tree enthusiasts
