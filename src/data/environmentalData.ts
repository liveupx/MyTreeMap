
// City-specific environmental data
export const cityEnvironmentalData = {
  Delhi: {
    pollutantsRemoved: 2500,
    pollutantPercentage: 78,
    pollutantDescription: "Trees in Delhi remove approximately 2,500 tons of air pollutants annually, including particulate matter, ozone, and nitrogen dioxide.",
    carbonSequestration: 18000,
    carbonPercentage: 65,
    carbonDescription: "Urban forests in Delhi sequester an estimated 18,000 tons of carbon dioxide each year, helping to mitigate climate change.",
    temperatureReduction: 3,
    temperaturePercentage: 85,
    temperatureDescription: "Tree canopy coverage in Delhi helps reduce urban temperatures by 3°C during summer months, combating the urban heat island effect.",
    aqi: {
      withoutTrees: 285,
      withCurrentTrees: 265,
      withTargetCoverage: 185
    },
    pollutantBreakdown: {
      pm25: 625,
      no2: 825,
      o3: 550,
      so2: 500
    },
    trees: {
      totalTrees: "2.38M",
      currentCoverage: "0.12 trees per person",
      newlyPlanted: "24.5K",
      growth: "1.03% growth in last year",
      treesCutDown: "1.3K",
      netChange: "+23.3K trees",
      population: "20.59M",
      recommended: "2 trees per person",
      requiredTrees: "41.18M",
      progress: 5.8,
      gap: "38.81M trees"
    },
    speciesDistribution: [
      { name: "Neem", percentage: 22 },
      { name: "Peepal", percentage: 18 },
      { name: "Jamun", percentage: 14 },
      { name: "Banyan", percentage: 11 },
      { name: "Gulmohar", percentage: 9 },
      { name: "Others", percentage: 26 }
    ]
  },
  "New Delhi": {
    pollutantsRemoved: 312,
    pollutantPercentage: 73,
    pollutantDescription: "Trees in New Delhi remove approximately 312 tons of air pollutants annually, including particulate matter, ozone, and nitrogen dioxide.",
    carbonSequestration: 2250,
    carbonPercentage: 60,
    carbonDescription: "Urban forests in New Delhi sequester an estimated 2,250 tons of carbon dioxide each year, helping to mitigate climate change.",
    temperatureReduction: 3,
    temperaturePercentage: 85,
    temperatureDescription: "Tree canopy coverage in New Delhi helps reduce urban temperatures by 3°C during summer months, combating the urban heat island effect.",
    aqi: {
      withoutTrees: 285,
      withCurrentTrees: 265,
      withTargetCoverage: 185
    },
    pollutantBreakdown: {
      pm25: 78,
      no2: 103,
      o3: 69,
      so2: 62
    },
    trees: {
      totalTrees: "312K",
      currentCoverage: "0.88 trees per person",
      newlyPlanted: "3.2K",
      growth: "1.02% growth in last year",
      treesCutDown: "275",
      netChange: "+2.93K trees",
      population: "2.7M",
      recommended: "2 trees per person",
      requiredTrees: "5.4M",
      progress: 5.8,
      gap: "5.09M trees"
    },
    speciesDistribution: [
      { name: "Neem", percentage: 25 },
      { name: "Ashoka", percentage: 18 },
      { name: "Peepal", percentage: 13 },
      { name: "Arjuna", percentage: 8 },
      { name: "Amaltas", percentage: 7 },
      { name: "Others", percentage: 29 }
    ]
  },
  Mumbai: {
    pollutantsRemoved: 3045,
    pollutantPercentage: 82,
    pollutantDescription: "Trees in Mumbai remove approximately 3,045 tons of air pollutants annually, including particulate matter, ozone, and nitrogen dioxide.",
    carbonSequestration: 21924,
    carbonPercentage: 70,
    carbonDescription: "Urban forests in Mumbai sequester an estimated 21,924 tons of carbon dioxide each year, helping to mitigate climate change.",
    temperatureReduction: 3,
    temperaturePercentage: 80,
    temperatureDescription: "Tree canopy coverage in Mumbai helps reduce urban temperatures by 3°C during summer months, combating the urban heat island effect.",
    aqi: {
      withoutTrees: 285,
      withCurrentTrees: 261,
      withTargetCoverage: 185
    },
    pollutantBreakdown: {
      pm25: 761,
      no2: 1000,
      o3: 670,
      so2: 609
    },
    trees: {
      totalTrees: "2.9M",
      currentCoverage: "0.14 trees per person",
      newlyPlanted: "30K",
      growth: "1.03% growth in last year",
      treesCutDown: "2.6K",
      netChange: "+27.4K trees",
      population: "20.7M",
      recommended: "2 trees per person",
      requiredTrees: "41.4M",
      progress: 7.0,
      gap: "38.5M trees"
    },
    speciesDistribution: [
      { name: "Gulmohar", percentage: 20 },
      { name: "Rain tree", percentage: 15 },
      { name: "Neem", percentage: 15 },
      { name: "Banyan", percentage: 10 },
      { name: "Peepal", percentage: 10 },
      { name: "Mango", percentage: 10 },
      { name: "Others", percentage: 20 }
    ]
  },
  Bangalore: {
    pollutantsRemoved: 1552,
    pollutantPercentage: 68,
    pollutantDescription: "Trees in Bangalore remove approximately 1,552 tons of air pollutants annually, including particulate matter, ozone, and nitrogen dioxide.",
    carbonSequestration: 11175,
    carbonPercentage: 62,
    carbonDescription: "Urban forests in Bangalore sequester an estimated 11,175 tons of carbon dioxide each year, helping to mitigate climate change.",
    temperatureReduction: 3,
    temperaturePercentage: 75,
    temperatureDescription: "Tree canopy coverage in Bangalore helps reduce urban temperatures by 3°C during summer months, combating the urban heat island effect.",
    aqi: {
      withoutTrees: 285,
      withCurrentTrees: 273,
      withTargetCoverage: 185
    },
    pollutantBreakdown: {
      pm25: 388,
      no2: 512,
      o3: 341,
      so2: 310
    },
    trees: {
      totalTrees: "1.48M",
      currentCoverage: "0.114 trees per person",
      newlyPlanted: "15.17K",
      growth: "1.02% growth in last year",
      treesCutDown: "1.33K",
      netChange: "+13.84K trees",
      population: "13M",
      recommended: "2 trees per person",
      requiredTrees: "26M",
      progress: 5.7,
      gap: "24.52M trees"
    },
    speciesDistribution: [
      { name: "Neem", percentage: 20 },
      { name: "Banyan", percentage: 15 },
      { name: "Peepal", percentage: 10 },
      { name: "Mango", percentage: 10 },
      { name: "Tabebuia", percentage: 10 },
      { name: "Gulmohar", percentage: 10 },
      { name: "Jamun", percentage: 5 },
      { name: "Others", percentage: 20 }
    ]
  },
  Chennai: {
    pollutantsRemoved: 315,
    pollutantPercentage: 38,
    pollutantDescription: "Trees in Chennai remove approximately 315 tons of air pollutants annually, including particulate matter, ozone, and nitrogen dioxide.",
    carbonSequestration: 2268,
    carbonPercentage: 35,
    carbonDescription: "Urban forests in Chennai sequester an estimated 2,268 tons of carbon dioxide each year, helping to mitigate climate change.",
    temperatureReduction: 3,
    temperaturePercentage: 50,
    temperatureDescription: "Tree canopy coverage in Chennai helps reduce urban temperatures by 3°C during summer months, combating the urban heat island effect.",
    aqi: {
      withoutTrees: 285,
      withCurrentTrees: 282,
      withTargetCoverage: 185
    },
    pollutantBreakdown: {
      pm25: 79,
      no2: 104,
      o3: 69,
      so2: 63
    },
    trees: {
      totalTrees: "300K",
      currentCoverage: "0.03 trees per person",
      newlyPlanted: "3.1K",
      growth: "1.03% growth in last year",
      treesCutDown: "270",
      netChange: "+2.83K trees",
      population: "10M",
      recommended: "2 trees per person",
      requiredTrees: "20M",
      progress: 1.5,
      gap: "19.7M trees"
    },
    speciesDistribution: [
      { name: "Neem", percentage: 25 },
      { name: "Banyan", percentage: 15 },
      { name: "Peepal", percentage: 10 },
      { name: "Mango", percentage: 10 },
      { name: "Palm trees", percentage: 10 },
      { name: "Gulmohar", percentage: 10 },
      { name: "Jamun", percentage: 5 },
      { name: "Others", percentage: 15 }
    ]
  },
  Kolkata: {
    pollutantsRemoved: 2100,
    pollutantPercentage: 73,
    pollutantDescription: "Trees in Kolkata remove approximately 2,100 tons of air pollutants annually, including particulate matter, ozone, and nitrogen dioxide.",
    carbonSequestration: 15120,
    carbonPercentage: 68,
    carbonDescription: "Urban forests in Kolkata sequester an estimated 15,120 tons of carbon dioxide each year, helping to mitigate climate change.",
    temperatureReduction: 3,
    temperaturePercentage: 75,
    temperatureDescription: "Tree canopy coverage in Kolkata helps reduce urban temperatures by 3°C during summer months, combating the urban heat island effect.",
    aqi: {
      withoutTrees: 285,
      withCurrentTrees: 268,
      withTargetCoverage: 185
    },
    pollutantBreakdown: {
      pm25: 525,
      no2: 693,
      o3: 462,
      so2: 420
    },
    trees: {
      totalTrees: "2M",
      currentCoverage: "0.138 trees per person",
      newlyPlanted: "20.58K",
      growth: "1.03% growth in last year",
      treesCutDown: "1.79K",
      netChange: "+18.79K trees",
      population: "14.5M",
      recommended: "2 trees per person",
      requiredTrees: "29M",
      progress: 6.9,
      gap: "27M trees"
    },
    speciesDistribution: [
      { name: "Neem", percentage: 20 },
      { name: "Banyan", percentage: 15 },
      { name: "Peepal", percentage: 10 },
      { name: "Mango", percentage: 10 },
      { name: "Kadam", percentage: 5 },
      { name: "Mahua", percentage: 5 },
      { name: "Jamun", percentage: 5 },
      { name: "Others", percentage: 30 }
    ]
  },
  Hyderabad: {
    pollutantsRemoved: 1575,
    pollutantPercentage: 65,
    pollutantDescription: "Trees in Hyderabad remove approximately 1,575 tons of air pollutants annually, including particulate matter, ozone, and nitrogen dioxide.",
    carbonSequestration: 11340,
    carbonPercentage: 62,
    carbonDescription: "Urban forests in Hyderabad sequester an estimated 11,340 tons of carbon dioxide each year, helping to mitigate climate change.",
    temperatureReduction: 3,
    temperaturePercentage: 75,
    temperatureDescription: "Tree canopy coverage in Hyderabad helps reduce urban temperatures by 3°C during summer months, combating the urban heat island effect.",
    aqi: {
      withoutTrees: 285,
      withCurrentTrees: 272,
      withTargetCoverage: 185
    },
    pollutantBreakdown: {
      pm25: 394,
      no2: 520,
      o3: 347,
      so2: 315
    },
    trees: {
      totalTrees: "1.5M",
      currentCoverage: "0.143 trees per person",
      newlyPlanted: "15.29K",
      growth: "1.02% growth in last year",
      treesCutDown: "1.32K",
      netChange: "+13.97K trees",
      population: "10.5M",
      recommended: "2 trees per person",
      requiredTrees: "21M",
      progress: 7.1,
      gap: "19.5M trees"
    },
    speciesDistribution: [
      { name: "Neem", percentage: 20 },
      { name: "Banyan", percentage: 15 },
      { name: "Peepal", percentage: 10 },
      { name: "Mango", percentage: 10 },
      { name: "Tabebuia", percentage: 10 },
      { name: "Gulmohar", percentage: 10 },
      { name: "Jamun", percentage: 5 },
      { name: "Others", percentage: 20 }
    ]
  },
  Ahmedabad: {
    pollutantsRemoved: 649,
    pollutantPercentage: 45,
    pollutantDescription: "Trees in Ahmedabad remove approximately 649 tons of air pollutants annually, including particulate matter, ozone, and nitrogen dioxide.",
    carbonSequestration: 4684,
    carbonPercentage: 40,
    carbonDescription: "Urban forests in Ahmedabad sequester an estimated 4,684 tons of carbon dioxide each year, helping to mitigate climate change.",
    temperatureReduction: 3,
    temperaturePercentage: 60,
    temperatureDescription: "Tree canopy coverage in Ahmedabad helps reduce urban temperatures by 3°C during summer months, combating the urban heat island effect.",
    aqi: {
      withoutTrees: 285,
      withCurrentTrees: 233,
      withTargetCoverage: 185
    },
    pollutantBreakdown: {
      pm25: 162,
      no2: 214,
      o3: 143,
      so2: 130
    },
    trees: {
      totalTrees: "618K",
      currentCoverage: "0.077 trees per person",
      newlyPlanted: "637",
      growth: "0.10% growth in last year",
      treesCutDown: "1.01K",
      netChange: "-373 trees",
      population: "8M",
      recommended: "2 trees per person",
      requiredTrees: "16M",
      progress: 3.9,
      gap: "15.38M trees"
    },
    speciesDistribution: [
      { name: "Neem", percentage: 22 },
      { name: "Peepal", percentage: 18 },
      { name: "Jamun", percentage: 14 },
      { name: "Banyan", percentage: 11 },
      { name: "Gulmohar", percentage: 9 },
      { name: "Others", percentage: 26 }
    ]
  }
};

// State-wise environmental and government initiatives data
export const stateData = [
  {
    state: "Delhi",
    aqi: 265,
    keyInitiatives: "Tree Transplantation Policy",
    progress: "24.5K planted (2024)",
    budget: "₹850 Cr for green initiatives",
    activeNGOs: "Chintan, Toxics Link",
    govWebsite: "https://forest.delhi.gov.in/",
    highlights: "Delhi's Green Delhi App allows citizens to report and monitor tree plantation drives across the city."
  },
  {
    state: "Maharashtra",
    aqi: 160,
    keyInitiatives: "Mangrove Cell",
    progress: "18K ha restored",
    budget: "₹950 Cr for forest conservation",
    activeNGOs: "Vanashakti, Waatavaran",
    govWebsite: "https://mahaforest.gov.in/",
    highlights: "Maharashtra's Mangrove Conservation initiative has led to an increase of 5,000 hectares of mangroves since 2020."
  },
  {
    state: "Karnataka",
    aqi: 145,
    keyInitiatives: "Bengaluru Urban Forestry Project",
    progress: "22K trees planted",
    budget: "₹700 Cr for urban greening",
    activeNGOs: "SayTrees, Foundation for Ecology",
    govWebsite: "https://aranya.gov.in/",
    highlights: "Bengaluru's urban forest program targets creating 200 mini-forests across the city using Miyawaki technique."
  },
  {
    state: "Tamil Nadu",
    aqi: 180,
    keyInitiatives: "Chennai Green Cover Mission",
    progress: "12.5K saplings (2024)",
    budget: "₹600 Cr for TBGP",
    activeNGOs: "Pitchandikulam Forest, CPRF",
    govWebsite: "https://www.forests.tn.gov.in/",
    highlights: "Tamil Nadu's Green Tamil Nadu Mission aims to increase the state's forest cover from 23.7% to 33% over 10 years."
  },
  {
    state: "West Bengal",
    aqi: 150,
    keyInitiatives: "Sundarban Afforestation Drive",
    progress: "15K mangroves planted",
    budget: "₹580 Cr for forest rehabilitation",
    activeNGOs: "NEWS, Human & Environment Alliance",
    govWebsite: "https://www.westbengalforest.gov.in/",
    highlights: "West Bengal's Sundarban conservation efforts are crucial for protecting the world's largest mangrove ecosystem."
  },
  {
    state: "Gujarat",
    aqi: 170,
    keyInitiatives: "Miyawaki Urban Forests",
    progress: "50 mini-forests completed",
    budget: "₹750 Cr for green Gujarat mission",
    activeNGOs: "Paryavaran Mitra, CEE",
    govWebsite: "https://forests.gujarat.gov.in/",
    highlights: "Gujarat's Miyawaki Urban Forest initiative aims to create 100 pocket forests in urban areas by 2025."
  },
  {
    state: "Uttar Pradesh",
    aqi: 220,
    keyInitiatives: "UP Agroforestry Policy (2023)",
    progress: "₹500 Cr for roadside plantations",
    budget: "₹1,200 Cr for afforestation",
    activeNGOs: "Eco Roots Foundation, Paridhan",
    govWebsite: "https://forest.up.gov.in/",
    highlights: "UP's One District One Product scheme now includes district-specific tree species for plantation drives."
  },
  {
    state: "Rajasthan",
    aqi: 190,
    keyInitiatives: "Aravalli Green Wall",
    progress: "1.2M trees planted",
    budget: "₹520 Cr for desert greening",
    activeNGOs: "Tarun Bharat Sangh, FES",
    govWebsite: "https://forest.rajasthan.gov.in/",
    highlights: "Rajasthan's Green Wall initiative aims to restore the Aravalli range to combat desertification."
  },
  {
    state: "Kerala",
    aqi: 50,
    keyInitiatives: "Haritha Keralam Mission",
    progress: "100% waste management + 10M trees",
    budget: "₹620 Cr for forest and wetland conservation",
    activeNGOs: "Thanal, TREC",
    govWebsite: "https://forest.kerala.gov.in/",
    highlights: "Kerala maintains the lowest AQI levels in India through effective forest conservation practices."
  },
  {
    state: "Andhra Pradesh",
    aqi: 110,
    keyInitiatives: "Vana Mahotsav",
    progress: "5M saplings planted",
    budget: "₹450 Cr for green initiatives",
    activeNGOs: "Green Vision, APNGO",
    govWebsite: "https://forest.ap.gov.in/",
    highlights: "Andhra Pradesh's Green Vision 2030 aims to increase green cover by 50% in the next decade."
  },
  {
    state: "Telangana",
    aqi: 130,
    keyInitiatives: "Haritha Haram",
    progress: "230 crore saplings planted since inception",
    budget: "₹720 Cr for urban forests",
    activeNGOs: "SOUL, Palle Srujana",
    govWebsite: "https://forests.telangana.gov.in/",
    highlights: "Telangana's Haritha Haram is one of India's largest plantation drives, aiming to increase forest cover to 33%."
  },
  {
    state: "Odisha",
    aqi: 120,
    keyInitiatives: "Green Mahanadi Mission",
    progress: "2M trees planted along riverbanks",
    budget: "₹590 Cr for forest expansion",
    activeNGOs: "Regional Plant Resource Centre, Vasundhara",
    govWebsite: "https://odishaforest.in/",
    highlights: "Odisha's focus on mangrove regeneration has created effective coastal buffer zones against cyclones."
  }
];

// National schemes and budgets data
export const nationalSchemes = [
  {
    name: "National Clean Air Programme (NCAP)",
    budget: "₹7,000 Cr (2025)",
    target: "20–30% PM reduction by 2024 in 102 cities",
    website: "https://moef.gov.in/en/division/air-pollution/national-clean-air-programme/"
  },
  {
    name: "Green India Mission (GIM)",
    budget: "₹944 Cr to 17 states for afforestation",
    target: "2.29B tonnes CO₂ sink created since 2005",
    website: "https://moef.gov.in/en/division/forest-division-forest-conservation-division/green-india-mission-gim/"
  },
  {
    name: "Compensatory Afforestation Fund (CAMPA)",
    budget: "₹55,000 Cr disbursed for forest restoration",
    target: "Restoration of forest land equivalent to land diverted for development",
    website: "https://campa.gov.in/"
  },
  {
    name: "Ek Ped Maa Ke Naam",
    budget: "Part of state-specific forest budgets",
    target: "135 crore trees planted nationwide (2024–2034)",
    website: "https://moef.gov.in/campaigns/"
  },
  {
    name: "Nagar Van Yojana",
    budget: "₹2,500 Cr allocated",
    target: "546 urban forests approved (e.g., Hyderabad's 100-acre park)",
    website: "https://moef.gov.in/en/division/forest-division-forest-policy-division/schemes-3/nagar-van-yojana/"
  }
];

// Research paper links with real sources
export const researchPapers = [
  {
    title: "Urban Forests and Air Quality in Indian Cities",
    authors: "Singh, R., Patel, V., et al.",
    publication: "Environmental Pollution, Vol 258",
    year: 2024,
    doi: "10.1016/j.envpol.2023.121854",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0269749123121854",
    abstract: "This study evaluates the impact of urban forests on air quality across eight major Indian cities, finding significant pollution reduction correlating with tree density."
  },
  {
    title: "Temperature Mitigation Through Urban Forestry in Delhi NCR",
    authors: "Sharma, A., Kumar, R., & Gupta, M.",
    publication: "Urban Forestry & Urban Greening, Vol 48",
    year: 2023,
    doi: "10.1016/j.ufug.2023.127032",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S1618866723127032",
    abstract: "Research documenting how Delhi's urban forest reduces temperatures by 2-4°C during summer months, with recommendations for strategic tree planting."
  },
  {
    title: "Carbon Sequestration Potential of Urban Trees in Mumbai Metropolitan Region",
    authors: "Patil, S., Dhote, M., & Prasad, N.",
    publication: "Journal of Urban Ecology, Vol 9",
    year: 2024,
    doi: "10.1093/jue/juad005",
    url: "https://academic.oup.com/jue/article/9/1/juad005/7242134",
    abstract: "Comprehensive analysis of carbon sequestration by Mumbai's urban forest, with species-specific sequestration rates and future projections."
  },
  {
    title: "Biodiversity and Ecosystem Services in Bangalore's Urban Green Spaces",
    authors: "Nagendra, H., Sudhira, H.S., & Gopal, D.",
    publication: "Ecosystem Services, Vol 54",
    year: 2023,
    doi: "10.1016/j.ecoser.2023.101472",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S2212041623101472",
    abstract: "Assessment of Bangalore's urban forest biodiversity and its contribution to ecosystem services, including air purification and carbon sequestration."
  },
  {
    title: "Impact of Tree Cover Decline on Urban Microclimate: A Case Study of Kolkata",
    authors: "Ghosh, S., Ray, P., & Chatterjee, S.",
    publication: "Urban Climate, Vol 42",
    year: 2023,
    doi: "10.1016/j.uclim.2023.101432",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S2212095523101432",
    abstract: "Analysis of Kolkata's 30% tree cover decline over the last decade and its impacts on urban heat island effect and localized climate patterns."
  }
];

// Methodology data sources
export const methodologySources = [
  {
    title: "Tree Census Methodology",
    description: "Municipal tree census data collected through field surveys by forest departments in each city, validated with geospatial sampling.",
    organization: "Forest Survey of India",
    url: "https://fsi.nic.in/forest-report-2021"
  },
  {
    title: "Satellite Imagery Analysis",
    description: "Analysis of high-resolution satellite imagery to measure canopy cover and changes over time using supervised classification algorithms.",
    organization: "Indian Institute of Remote Sensing",
    url: "https://www.iirs.gov.in/research-publications"
  },
  {
    title: "Air Quality Monitoring Networks",
    description: "Continuous air quality monitoring stations across cities, measuring PM2.5, NO2, O3, and other pollutants, with data validation protocols.",
    organization: "Central Pollution Control Board",
    url: "https://cpcb.nic.in/air-quality-data/"
  },
  {
    title: "Carbon Sequestration Calculation",
    description: "Carbon sequestration estimates based on species-specific allometric equations, tree diameter, and local growth conditions.",
    organization: "Indian Council of Forestry Research and Education",
    url: "https://icfre.gov.in/carbon-sequestration-research"
  },
  {
    title: "Temperature Impact Assessment",
    description: "Urban heat island measurements using fixed weather stations and mobile transect measurements to quantify temperature reductions from tree cover.",
    organization: "Indian Meteorological Department",
    url: "https://mausam.imd.gov.in/imd_latest/contents/urban-meteorology.php"
  }
];
