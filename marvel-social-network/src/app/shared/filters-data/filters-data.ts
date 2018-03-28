// Data
import {rgb} from "d3-color";

export const maxLinksCount = 548;

export const races: string[] = [
  'All', 'Abstract entity', 'Alien', 'Alien/Human hybrid', 'Android', 'Arthrosian', 'Artificial being', 'Asgardian',
  'Astran', 'Ataraxian', 'Baluurian', 'Beyonder', 'Breakworldian', 'Brood', 'Cat', 'Celestial', 'Chaos sprite', 'Clone',
  'Cosmic being', 'Cyborg', 'Daeva', 'Deity', 'Demon', 'Deviant hybrid', 'Devil beast', 'Dinosaur', 'Dog',
  'Duckworldian', 'Elan', 'Entity', 'Eternal', 'Ethereal', 'External', 'Faltine', 'Faltine/Mhuruuk hybrid', 'Flock',
  'Flora colossus', 'Ghost', 'God', 'Halfworlder', 'Hellbent', 'Homo supreme', 'Human', 'Human cursed',
  'Human enhanced', 'Human immortal', 'Human mutate', 'Human/Atlantean hybrid', 'Human/Deity hybrid',
  'Human/Demon hybrid', 'Human/Djinn hybrid', 'Human/Spartoi hybrid', 'Human/Vampire hybrid', 'Inhuman', 'Insectivorid',
  'Intelligent', 'Korbinite', 'Kree', 'Kree/Cockroach hybrid', 'Kronan', 'Landlak', 'Lava men', 'Laxidazian', 'Lizard',
  'Luphomoid', 'Magician', 'Majesdanian', 'Makluan', 'Mephitisoid', 'Mojoworlder', 'Mongoose', 'Mummudrai', 'Mummy',
  'Mutant', 'Mutant depowered', 'Mutant enhanced', 'Mutant/Alien hybrid', 'N/A', 'New men', 'Olympian',
  'Olympian/Human hybrid', 'Otherwolder/Mutant hybrid', 'Panspermian', 'Planet', 'Poppupian', 'Rat', 'Rigellian',
  'Robot', 'Rock Troll', 'Sakaaran', 'Saurid', 'Savage land mutate', 'Sentinel', 'Shadow People',
  'Shadow People/Human hybrid', "Shi'ar", "Shi'ar/Mutant hybrid", 'Siren', 'Skrull', 'Skrull/Kree hybrid',
  'Sleepwalker', 'Sorcerer', 'Squirrel', 'Symbiote host', 'Synthezoid', 'Taa-an', 'Talisman', 'Technarch', 'Tiger',
  'Titanian', 'Titanian/Kree hybrid', 'Traanian', 'Undead', 'Valkyrie', 'Vampire', 'Watcher', 'Xandarian',
  'Zen Whoberian', 'Zenn-Lavian', 'Zombie'
];
export const citizenships: string[] = [
  'All', 'Acturus', 'Afghanistan', 'Algeria', 'Argentina', 'Arthrosis', 'Asgard', 'Astra', 'Ataraxia', 'Atlantic ocean',
  'Atlantis', 'Attilan', 'Australia', 'Austria', 'Baluur', 'Belgium', 'Blood', 'Bosnia and Herzegovina', 'Brazil',
  'Breakworld', 'Broodworld', 'Cambodia', 'Camelot', 'Canada', 'Celestial', 'China', 'Costa Verde', 'Croatia',
  'Dark Dimension', 'Delvadia', 'Domain of the Trolls', 'Dream Dimension', 'Duckworld', 'Egypt', 'Elan', 'Ethereals',
  'Flock', 'France', 'Germany', 'Greece', 'Haiti', 'Halfworld', 'Hell', 'Hunan Pacha', 'Hungary', 'India', 'Ireland',
  'Israel', 'Italy', 'Japan', "K'un-Lun", 'Kakaranthara', 'Kaliklak', 'Korbin', 'Krauncha', 'Kree Empire', 'Kvch',
  'Landlak', 'Latveria', 'Lava Men', 'Laxidazia', 'Limbo', 'Luphom', 'Madripoor', 'Majesdane', 'Mexico', 'Mindscape',
  'Mojoworld', 'Monaco', 'Moon', 'N/A', 'Negative zone', 'Nepal', 'Netherlands', 'New Attilan', 'New Men',
  'Nucleus of Hope', 'Olympia', 'Panto-9', 'Planet X', 'Poland', 'Polaria', 'Poppup', 'Pralagon System', 'Puerto Rico',
  'Ria', 'Rigellian Empire', 'Roman Empire', 'Romania', 'Russia', 'Sakaar', 'Savage land', 'Serbia', "Shi'ar Empire",
  'Singapore', 'Skrull Empire', 'Slovakia', 'South Korea', 'Spain', 'Srenesk', 'Stygian', 'Subterranea', 'Sudan',
  'Switzerland', 'Symkaria', 'Taa', 'Technarchy', 'Tibet', 'Tiger Island', 'Titan', 'Traan', 'Transia', 'Transylvania',
  'UK', 'USA', 'United Sisterhood Republic', 'Venezuela', 'Vietnam', 'Wakanda', 'Watchers', 'Xandar', "Z'Gambo",
  'Zen-Whoberi', 'Zenn-La'
];
export const colorizationSchemes: string[] = [
  'Homophily',
  'Centrality',
  'Gender',
  'Citizenship',
  'Race',
  'None'
];
// Colors
export const filterColors = {
  'Homophily': {},
  'Centrality': {},
  'Gender': {
    'Male': rgb(61, 135, 255), // blue
    'Female': rgb(255, 114, 245), // pink
    'Genderfluid': rgb(108, 255, 50), // acid
    'Agender': rgb(239, 135, 0), // orange
    'N/A': rgb(255, 251, 56) // lemon
  },
  'Citizenship': {
    'Acturus': "hsl(334.000023430178, 93.4325744308231%, 54.32%)",
    'Afghanistan': "hsl(4.00004580852038, 58.7301587301587%, 37.17%)",
    'Algeria': "hsl(15.9999837662338, 62.6016260162602%, 9.84%)",
    'Argentina': "hsl(344.000169779287, 18.3431952662722%, 32.11%)",
    'Arthrosis': "hsl(15.9999095022624, 23.9956568946797%, 53.95%)",
    'Asgard': "hsl(156, 70%, 56%)",
    'Astra': "hsl(9.99996251874063, 76.9319492502884%, 65.32%)",
    'Ataraxia': "hsl(336.0, 16.6170339487791%, 91.605%)",
    'Atlantic ocean': "hsl(336.0, 0.714372200024218%, 58.705%)",
    'Atlantis': "hsl(15.0, 48.959032907992%, 62.775%)",
    'Attilan': "hsl(21.0, 73.9243807040417%, 61.65%)",
    'Australia': "hsl(355.0, 44.3742098609355%, 60.45%)",
    'Austria': "hsl(347.00009896091, 27.3885350318471%, 36.895%)",
    'Baluur': "hsl(7.00000000000001, 57.7167019027484%, 78.715%)",
    'Belgium': "hsl(0.0, 0.0%, 63.0%)",
    'Blood': "hsl(344.0, 4.71204188481676%, 12.415%)",
    'Bosnia and Herzegovina': "hsl(6.99997416688194, 96.078431372549%, 40.29%)",
    'Brazil': "hsl(25.0, 19.7604790419162%, 10.855%)",
    'Breakworld': "hsl(39.0, 76.9911504424778%, 1.695%)",
    'Broodworld': "hsl(30.0, 43.9252336448598%, 89.3%)",
    'Cambodia': "hsl(32.0003496503497, 14.9425287356322%, 19.14%)",
    'Camelot': "hsl(342.0, 48.1481481481482%, 2.025%)",
    'Canada': "hsl(86.0000239750659, 93.2900917020801%, 55.29%)",
    'Celestial': "hsl(34.0, 81.8181818181818%, 5.5%)",
    'China': "hsl(43.0014705882352, 4.16666666666667%, 16.32%)",
    'Costa Verde': "hsl(30.0, 29.8701298701299%, 3.08%)",
    'Croatia': "hsl(38.0, 9.89010989010989%, 45.5%)",
    'Dark Dimension': "hsl(41.0, 47.0588235294118%, 18.36%)",
    'Delvadia': "hsl(43.9999390801096, 33.218658302135%, 50.585%)",
    'Domain of the Trolls': "hsl(39.0, 29.8701298701299%, 33.11%)",
    'Dream Dimension': "hsl(26.0, 27.3885350318471%, 21.195%)",
    'Duckworld': "hsl(40.0, 53.8461538461538%, 29.25%)",
    'Egypt': "hsl(43.0, 4.71204188481675%, 15.28%)",
    'Elan': "hsl(49.0005494505495, 7.52688172043011%, 24.18%)",
    'Ethereals': "hsl(60.0, 81.8181818181818%, 31.9%)",
    'Flock': "hsl(46.9999169090154, 41.4499741691062%, 70.965%)",
    'France': "hsl(61.0, 4.71204188481676%, 18.145%)",
    'Germany': "hsl(41, 97%, 53%)",
    'Greece': "hsl(48.0, 80.1801801801802%, 49.95%)",
    'Haiti': "hsl(58.0, 3.62694300518135%, 37.635%)",
    'Halfworld': "hsl(52.9998214285714, 11.2903225806452%, 50.4%)",
    'Hell': "hsl(57.0, 61.8320610687023%, 73.8%)",
    'Hunan Pacha': "hsl(60.0, 34.2281879194631%, 28.31%)",
    'Hungary': "hsl(50.0, 56.25%, 23.68%)",
    'India': "hsl(48.0, 76.9911504424779%, 28.815%)",
    'Ireland': "hsl(50.0, 52.6717557251908%, 42.575%)",
    'Israel': "hsl(48.0, 36.986301369863%, 5.11%)",
    'Italy': "hsl(50.0001176470588, 33.3333333333333%, 25.5%)",
    'Japan': "hsl(51.9996710526316, 11.2426035502959%, 72.96%)",
    "K'un-Lun": "hsl(58.9995789473684, 10.4972375690608%, 22.625%)",
    'Kakaranthara': "hsl(129.0, 3.62694300518135%, 19.3%)",
    'Kaliklak': "hsl(162.0, 50.6578947368421%, 75.68%)",
    'Korbin': "hsl(87.0, 29.0322580645161%, 13.175%)",
    'Krauncha': "hsl(107.000012239902, 75.4385964912281%, 10.83%)",
    'Kree Empire': "hsl(185, 97%, 53%)",
    'Kvch': "hsl(81.0, 2.04081632653061%, 24.5%)",
    'Landlak': "hsl(154.999928800285, 36.0544217687075%, 38.955%)",
    'Latveria': "hsl(96.0, 33.3333333333333%, 3.0%)",
    'Lava Men': "hsl(67.0, 60.0%, 31.25%)",
    'Laxidazia': "hsl(93.0, 59.016393442623%, 75.6%)",
    'Limbo': "hsl(83.9999999999999, 1.52284263959391%, 28.565%)",
    'Luphom': "hsl(172.0, 6.38297872340426%, 1.88%)",
    'Madripoor': "hsl(147.0, 11.731843575419%, 38.485%)",
    'Majesdane': "hsl(174.0, 49.2537313432836%, 32.16%)",
    'Mexico': "hsl(69.0, 6.95187165775401%, 10.285%)",
    'Mindscape': "hsl(106.0, 68.0672268907563%, 48.195%)",
    'Mojoworld': "hsl(142.999954751131, 48.1481481481481%, 45.9%)",
    'Monaco': "hsl(96.0, 18.5946872322194%, 53.32%)",
    'Moon': "hsl(119.0, 75.4385964912281%, 25.65%)",
    'N/A': "hsl(164.0, 38.8888888888889%, 19.44%)",
    'Negative zone': "hsl(148.000384615385, 14.9425287356322%, 1.74%)",
    'Nepal': "hsl(246.0, 76.6181315761505%, 52.955%)",
    'Netherlands': "hsl(244.0, 15.606936416185%, 25.95%)",
    'New Attilan': "hsl(197.0, 49.2537313432836%, 16.75%)",
    'New Men': "hsl(180.0, 98.019801980198%, 10.1%)",
    'Nucleus of Hope': "hsl(200.0, 51.7087667161961%, 73.08%)",
    'Olympia': "hsl(223.999675324675, 7.52688172043011%, 40.92%)",
    'Panto-9': "hsl(180.0, 10.2503542749173%, 57.66%)",
    'Planet X': "hsl(198.0, 96.078431372549%, 10.71%)",
    'Poland': "hsl(255.0, 81.6176470588235%, 78.24%)",
    'Polaria': "hsl(227.0, 33.3333333333333%, 22.5%)",
    'Poppup': "hsl(195.999901477833, 40.8450704225352%, 24.85%)",
    'Pralagon System': "hsl(223.00006993007, 48.1481481481481%, 29.7%)",
    'Puerto Rico': "hsl(0.0, 0.0%, 62.0%)",
    'Ria': "hsl(185.0, 28.2051282051282%, 44.46%)",
    'Rigellian Empire': "hsl(254.0, 43.5205522434892%, 52.195%)",
    'Roman Empire': "hsl(247.0, 9.89010989010989%, 48.23%)",
    'Romania': "hsl(249.0, 94.1747572815534%, 41.2%)",
    'Russia': "hsl(0, 97%, 29%)",
    'Sakaar': "hsl(311.0, 83.4862385321101%, 32.7%)",
    'Savage land': "hsl(322.0, 4.71204188481676%, 38.2%)",
    'Serbia': "hsl(307.0, 53.2710280373832%, 57.2%)",
    "Shi'ar Empire": "hsl(68, 64%, 56%)",
    'Singapore': "hsl(285.0, 15.9663865546219%, 71.44%)",
    'Skrull Empire': "hsl(302.002702702703, 1.40310959423587%, 73.63%)",
    'Slovakia': "hsl(289.000089206066, 41.8439716312057%, 26.79%)",
    'South Korea': "hsl(329.0, 42.8571428571428%, 0.7%)",
    'Spain': "hsl(307.0, 83.6467702371218%, 57.195%)",
    'Srenesk': "hsl(286.000078492936, 58.6016559337626%, 78.26%)",
    'Stygian': "hsl(327.0, 43.8848920863309%, 38.92%)",
    'Subterranea': "hsl(287.000049176297, 54.4663184679255%, 62.665%)",
    'Sudan': "hsl(294.0, 61.2903225806452%, 22.94%)",
    'Switzerland': "hsl(325.000193050193, 22.6993865030675%, 22.82%)",
    'Symkaria': "hsl(295.0, 15.606936416185%, 12.975%)",
    'Taa': "hsl(325.000043478261, 29.8701298701299%, 0.77%)",
    'Technarchy': "hsl(265.000051948052, 53.8461538461538%, 35.75%)",
    'Tibet': "hsl(0.0, 0.0%, 85.0%)",
    'Tiger Island': "hsl(275.000114810563, 20.8822824262767%, 58.29%)",
    'Titan': "hsl(265.0, 36.0730593607306%, 67.15%)",
    'Traan': "hsl(276.0, 58.5553582001184%, 66.22%)",
    'Transia': "hsl(263.000082236842, 47.0588235294118%, 25.84%)",
    'Transylvania': "hsl(265.0, 18.3431952662722%, 45.63%)",
    'UK': "hsl(340, 97%, 52%)",
    'USA': "hsl(247, 97%, 52%)",
    'United Sisterhood Republic': "hsl(266.0, 78.8135593220339%, 66.96%)",
    'Venezuela': "hsl(264.0, 78.7460148777896%, 76.475%)",
    'Vietnam': "hsl(270.999667774086, 17.6954732510288%, 82.99%)",
    'Wakanda': "hsl(273.0, 66.6666666666667%, 33.6%)",
    'Watchers': "hsl(261.0, 80.1801801801802%, 23.31%)",
    'Xandar': "hsl(262.999846153846, 14.2857142857143%, 45.5%)",
    "Z'Gambo": "hsl(263.0, 36.986301369863%, 11.68%)",
    'Zen-Whoberi': "hsl(261.0, 55.0387596899225%, 7.095%)",
    'Zenn-La': "hsl(261.0, 55.0387596899225%, 7.095%)"
  },
  'Race': {
    'Abstract entity': "hsl(46, 64%, 21%)",
    'Alien': "hsl(82, 70%, 74%)",
    'Alien/Human hybrid': "hsl(58, 57%, 57%)",
    'Android': "hsl(84, 26%, 48%)",
    'Arthrosian': "hsl(92, 6%, 41%)",
    'Artificial being': "hsl(19, 13.5%, 13.6%)",
    'Asgardian': "hsl(24, 21%, 20%)",
    'Astran': "hsl(26, 10%, 4.7%)",
    'Ataraxian': "hsl(99, 76%, 82%)",
    'Baluurian': "hsl(69, 16%, 23%)",
    'Beyonder': "hsl(85, 80%, 80%)",
    'Breakworldian': "hsl(91, 90%, 90%)",
    'Brood': "hsl(19, 16%, 17%)",
    'Cat': "hsl(15, 14.7%, 14.7%)",
    'Celestial': "hsl(43, 31.39%, 34.1%)",
    'Chaos sprite': "hsl(65, 45.9%, 38.35%)",
    'Clone': "hsl(0, 0%, 0%)",
    'Cosmic being': "hsl(53, 40%, 26.5%)",
    'Cyborg': "hsl(52, 40.1%, 12.5%)",
    'Daeva': "hsl(50, 45%, 32.5%)",
    'Deity': "hsl(15, 7.52%, 1.8%)",
    'Demon': "hsl(11, 1%, 9.46%)",
    'Deviant hybrid': "hsl(70, 62.72%, 58.8%)",
    'Devil beast': "hsl(78, 45.3%, 24.96%)",
    'Dinosaur': "hsl(54, 36.774%, 18.36%)",
    'Dog': "hsl(43, 30.96%, 22.36%)",
    'Duckworldian': "hsl(48, 38.08%, 18.24%)",
    'Elan': "hsl(85, 72.53%, 38.25%)",
    'Entity': "hsl(18, 14.652%, 12.42%)",
    'Eternal': "hsl(292, 54%, 46%)",
    'Ethereal': "hsl(50, 3.8%, 3%)",
    'External': "hsl(61, 54.229%, 38.43%)",
    'Faltine': "hsl(92, 80.362%, 61.64%)",
    'Faltine/Mhuruuk hybrid': "hsl(22.62, 27%, 29%)",
    'Flock': "hsl(13.8857, 14%, 7.14%)",
    'Flora colossus': "hsl(89, 85.5142%, 47.17%)",
    'Ghost': "hsl(60, 56.64%, 34.8%)",
    'God': "hsl(181, 100%, 33%)",
    'Halfworlder': "hsl(58, 46.69%, 5.8%)",
    'Hellbent': "hsl(7, 6.9%, 4.41%)",
    'Homo supreme': "hsl(4, 3.908%, 1.24%)",
    'Human': "hsl(114, 100%, 33%)",
    'Human cursed': "hsl(14, 13.832%, 3.92%)",
    'Human enhanced': "hsl(49, 99%, 51%)",
    'Human immortal': "hsl(81, 74.196%, 46.98%)",
    'Human mutate': "hsl(232, 98%, 63%)",
    'Human/Atlantean hybrid': "hsl(27, 26.406%, 21.06%)",
    'Human/Deity hybrid': "hsl(7, 6.979%, 6.79%)",
    'Human/Demon hybrid': "hsl(51, 50%, 45.39%)",
    'Human/Djinn hybrid': "hsl(54, 44.28%, 5.4%)",
    'Human/Spartoi hybrid': "hsl(50, 49.6%, 38%)",
    'Human/Vampire hybrid': "hsl(52.5, 70%, 58%)",
    'Inhuman': "hsl(72.96, 76%, 75%)",
    'Insectivorid': "hsl(43.6427, 49%, 28.91%)",
    'Intelligent': "hsl(76.5013, 88%, 73.92%)",
    'Korbinite': "hsl(32.56, 88%, 79.684%)",
    'Kree': "hsl(19, 18.544%, 14.44%)",
    'Kree/Cockroach hybrid': "hsl(16.77, 39%, 34.9245%)",
    'Kronan': "hsl(59.148, 93%, 40.92%)",
    'Landlak': "hsl(24.676, 31%, 15.19%)",
    'Lava men': "hsl(63.48, 92%, 76.314%)",
    'Laxidazian': "hsl(34.751, 38%, 16.34%)",
    'Lizard': "hsl(27.776, 28%, 27.16%)",
    'Luphomoid': "hsl(57.4, 82%, 62.32%)",
    'Magician': "hsl(79.05, 93%, 91.8375%)",
    'Majesdanian': "hsl(3.7, 5%, 3.78667%)",
    'Makluan': "hsl(2.6, 5%, 4.52%)",
    'Mephitisoid': "hsl(26.88, 64%, 52.864%)",
    'Mojoworlder': "hsl(0, 0%, 0%)",
    'Mongoose': "hsl(3.115, 1.9%, 10%)",
    'Mummudrai': "hsl(11.76, 35.84%, 84%)",
    'Mummy': "hsl(19.95, 29.4817%, 35%)",
    'Mutant': "hsl(358, 87%, 64%)",
    'Mutant depowered': "hsl(6.44, 36.11%, 46%)",
    'Mutant enhanced': "hsl(35.28, 61.614%, 63%)",
    'Mutant/Alien hybrid': "hsl(26, 26%, 26%)",
    'N/A': "hsl(72.75, 81.2375%, 97%)",
    'New men': "hsl(12.22, 12.493%, 13%)",
    'Olympian': "hsl(4.48, 28.288%, 64%)",
    'Olympian/Human hybrid': "hsl(30.08, 33.472%, 64%)",
    'Otherwolder/Mutant hybrid': "hsl(11.05, 13.7475%, 65%)",
    'Panspermian': "hsl(15.08, 19.952%, 29%)",
    'Planet': "hsl(42, 59.2667%, 70%)",
    'Poppupian': "hsl(0.15, 4.41667%, 5%)",
    'Rat': "hsl(69.92, 71.2373%, 76%)",
    'Rigellian': "hsl(35, 25.2%, 34.02%)",
    'Robot': "hsl(52, 9.36%, 37.076%)",
    'Rock Troll': "hsl(70.8, 57.6%, 72%)",
    'Sakaaran': "hsl(59, 40.71%, 56.5613%)",
    'Saurid': "hsl(17.097, 10.26%, 18%)",
    'Savage land mutate': "hsl(56, 47.04%, 54.5067%)",
    'Sentinel': "hsl(18.7533, 15.6%, 20%)",
    'Shadow People': "hsl(85, 77.35%, 84.49%)",
    'Shadow People/Human hybrid': "hsl(10.5893, 9.24%, 11%)",
    "Shi'ar": "hsl(54, 44.28%, 50.598%)",
    "Shi'ar/Mutant hybrid": "hsl(14, 12.46%, 13.7177%)",
    'Siren': "hsl(76, 17.48%, 45.7647%)",
    'Skrull': "hsl(47, 20.68%, 33.4013%)",
    'Skrull/Kree hybrid': "hsl(53.676, 9.52%, 56%)",
    'Sleepwalker': "hsl(36.4167, 28.5%, 38%)",
    'Sorcerer': "hsl(4, 34.8%, 39.6533%)",
    'Squirrel': "hsl(35, 8.75%, 33.6875%)",
    'Symbiote host': "hsl(305, 100%, 36%)",
    'Synthezoid': "hsl(69.03, 60.06%, 78%)",
    'Taa-an': "hsl(60.03, 33.06%, 87%)",
    'Talisman': "hsl(67.15, 43.45%, 79%)",
    'Technarch': "hsl(9.783, 3.06%, 18%)",
    'Tiger': "hsl(27.37, 23.8%, 34%)",
    'Titanian': "hsl(58, 98%, 63%)",
    'Titanian/Kree hybrid': "hsl(18.615, 9.3%, 30%)",
    'Traanian': "hsl(82.904, 79.12%, 86%)",
    'Undead': "hsl(43.7148, 12.41%, 73%)",
    'Valkyrie': "hsl(51.25, 39%, 60%)",
    'Vampire': "hsl(30.863, 23.94%, 42%)",
    'Watcher': "hsl(21.344, 9.86%, 29%)",
    'Xandarian': "hsl(30.1282, 23.37%, 41%)",
    'Zen Whoberian': "hsl(26.0667, 18%, 40%)",
    'Zenn-Lavian': "hsl(38.985, 6.9%, 69%)",
    'Zombie': "hsl(35.9325, 27.45%, 45%)"
  }
};