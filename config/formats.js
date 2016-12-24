'use strict';

// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.js

exports.Formats = [

	// SM Singles
	///////////////////////////////////////////////////////////////////
	{
		section: "SM Singles (beta)",
	},
	{
		name: "[Gen 7] Random Battle",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with sets that are generated to be competitively viable."],

		mod: 'gen7',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Unrated Random Battle",

		mod: 'gen7',
		team: 'random',
		challengeShow: false,
		rated: false,
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] OU",

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Baton Pass Clause'],
		banlist: ['Uber', 'Power Construct', 'Shadow Tag'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Pokebank OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587188/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587177/\">OU Banlist</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Baton Pass Clause'],
		banlist: ['Uber', 'Bank-Uber', 'Power Construct', 'Shadow Tag'],
	},
	{
		name: "[Gen 7] Pokebank UU (alpha)",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3587419/\">UU Metagame Discussion</a>"],

		mod: 'gen7',
		ruleset: ['[Gen 7] Pokebank OU'],
		banlist: [
			'Bisharp', 'Buzzwole', 'Celesteela', 'Chansey', 'Clefable', 'Dugtrio', 'Excadrill', 'Ferrothorn', 'Garchomp', 'Genesect',
			'Greninja', 'Heatran', 'Hippowdon', 'Hoopa-Unbound', 'Kartana', 'Kingdra', 'Landorus', 'Latios', 'Magearna', 'Magnezone',
			'Manaphy', 'Mandibuzz', 'Mantine', 'Marowak-Alola', 'Mimikyu', 'Nihilego', 'Pelipper', 'Pheromosa', 'Porygon-Z', 'Rotom-Wash',
			'Skarmory', 'Tapu Bulu', 'Tapu Fini', 'Tapu Koko', 'Tapu Lele', 'Toxapex', 'Tyranitar', 'Xurkitree', 'Zapdos', 'Zygarde-Base',
			'Zygarde-Complete', 'Alakazite', 'Charizardite X', 'Gyaradosite', 'Metagrossite', 'Pinsirite', 'Sablenite', 'Scizorite', 'Venusaurite',
		],
	},
	{
		name: "[Gen 7] Pokebank Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3587184/\">Ubers Metagame Discussion</a>"],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] Pokebank LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587196/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/sm/formats/lc/\">LC Banlist</a>",
		],

		mod: 'gen7',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Little Cup'],
		banlist: ['Cutiefly', 'Gligar', 'Meditite', 'Misdreavus', 'Murkrow', 'Porygon', 'Scyther', 'Sneasel', 'Swirlix', 'Tangela', 'Yanma', 'Eevium Z', 'Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 7] Pokebank Anything Goes",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3587441/\">Anything Goes</a>"],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "[Gen 7] CAP",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587865/\">CAP Metagame Discussion</a>",
		],

		mod: 'gen7',
		ruleset: ['[Gen 7] Pokebank OU'],
		banlist: ['Allow CAP'],
	},
	{
		name: "[Gen 7] Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587473/\">Battle Spot Singles Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587201/\">Battle Spot Singles Viability Ranking</a>",
		],

		mod: 'gen7',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Memento', 'Parting Shot'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Battle Spot Special 1",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3587169/\">Battle Spot Special</a>"],

		mod: 'gen7',
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Team Preview', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased', 'Memento', 'Parting Shot'],
		requirePentagon: true,
		onValidateSet: function (set) {
			if (set.item) return ["Items are not permitted in Battle Spot Special."];
		},
	},
	{
		name: "[Gen 7] Custom Game",

		mod: 'gen7',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// SM Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "SM Doubles (beta)",
	},
	{
		name: "[Gen 7] Random Doubles Battle",

		mod: 'gen7',
		gameType: 'doubles',
		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Pokebank Doubles OU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3586596/\">Doubles OU Metagame Discussion</a>"],

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Team Preview'],
		banlist: ['Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia',
			'Lunala', 'Magearna', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Eevium Z', 'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder',
		],
	},
	{
		name: "[Gen 7] Pokebank Doubles Ubers",

		mod: 'gen7',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "[Gen 7] VGC 2017",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3586596/\">VGC 2017 Discussion</a>"],

		mod: 'gen7',
		gameType: 'doubles',
		forcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod', 'Alola Pokedex'],
		banlist: ['Illegal', 'Unreleased', 'Solgaleo', 'Lunala', 'Necrozma', 'Magearna', 'Marshadow', 'Zygarde', 'Mega'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Battle Spot Doubles",

		mod: 'gen7',
		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Memento', 'Parting Shot'],
		requirePentagon: true,
	},
	{
		name: "[Gen 7] Doubles Custom Game",

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Other Metagames
	///////////////////////////////////////////////////////////////////

	{
		section: "OM of the Month",
		column: 2,
	},
	{
		name: "[Gen 7] STABmons",
		desc: [
			"Pok&eacute;mon can use any move of their typing, in addition to the moves they can normally learn.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587949/\">STABmons</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Baton Pass Clause'],
		banlist: ['Ignore STAB Moves',
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Landorus-Base', 'Lugia', 'Lunala', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Shadow Tag', 'Gengarite', 'Kangaskhanite', "King's Rock", 'Lucarionite', 'Metagrossite', 'Razor Fang', 'Salamencite',
		],
	},
	{
		name: "[Gen 7] Middle Cup",
		desc: [
			"Only middle evolutions are allowed.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3588047/\">Middle Cup</a>",
		],

		mod: 'gen7',
		searchShow: false,
		maxLevel: 50,
		defaultLevel: 50,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Eviolite', 'Light Ball', 'Baton Pass'],
		onValidateSet: function (set) {
			let template = this.getTemplate(set.species || set.name);
			if (!template.prevo || !template.nfe) {
				return [set.species + " is not the middle Pokémon in an evolution chain."];
			}
		},
	},
	{
		section: "Other Metagames",
		column: 2,
	},
	{
		name: "[Gen 7] Balanced Hackmons",
		desc: [
			"Anything that can be hacked in-game and is usable in local battles is allowed.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587475/\">Balanced Hackmons</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3588586/\">BH Suspects and Bans Discussion</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Ability Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Arena Trap', 'Huge Power', 'Moody', 'Parental Bond', 'Protean', 'Pure Power', 'Shadow Tag', 'Wonder Guard', 'Chatter', 'Extreme Evoboost'],
	},
	{
		name: "[Gen 7] 1v1",
		desc: [
			"Bring three Pok&eacute;mon to Team Preview and choose one to battle.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587523/\">1v1</a>",
		],

		mod: 'gen7',
		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: [
			'Illegal', 'Unreleased', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre',
			'Kyurem-White', 'Lugia', 'Lunala', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Perish Song', 'Focus Sash', 'Kangaskhanite', 'Salamencite', 'Chansey + Charm + Seismic Toss',
		],
	},
	{
		name: "[Gen 7] Monotype",
		desc: [
			"All the Pok&eacute;mon on a team must share a type.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587204/\">Monotype</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Type Clause', 'Team Preview'],
		banlist: [
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys-Base', 'Deoxys-Attack', 'Dialga', 'Genesect', 'Giratina', 'Groudon', 'Ho-Oh', 'Kartana', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Lunala', 'Mewtwo', 'Palkia', 'Pheromosa', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Tapu Lele', 'Xerneas', 'Yveltal', 'Zekrom', 'Zygarde',
			'Damp Rock', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Salamencite', 'Smooth Rock', 'Terrain Extender',
		],
	},
	{
		name: "[Gen 7] Mix and Mega (suspect test)",
		desc: [
			"Mega Stones and Primal Orbs can be used on almost any fully evolved Pok&eacute;mon with no Mega Evolution limit.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587740/\">Mix and Mega</a>",
		],

		mod: 'mixandmega',
		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Mega Rayquaza Clause', 'Team Preview'],
		banlist: ['Baton Pass'],
		onValidateTeam: function (team) {
			let itemTable = {};
			for (let i = 0; i < team.length; i++) {
				let item = this.getItem(team[i].item);
				if (!item) continue;
				if (item in itemTable && itemTable[item] >= 2) {
					if (item.megaStone) return ["You are limited to two of each Mega Stone.", "(You have more than two " + this.getItem(item).name + ")"];
					if (item.id === 'blueorb' || item.id === 'redorb') return ["You are limited to two of each Primal Orb.", "(You have more than two " + this.getItem(item).name + ")"];
					itemTable[item]++;
				} else {
					itemTable[item] = 1;
				}
			}
		},
		onValidateSet: function (set) {
			let template = this.getTemplate(set.species || set.name);
			let item = this.getItem(set.item);
			if (!item.megaEvolves && item.id !== 'blueorb' && item.id !== 'redorb') return;
			if (template.baseSpecies === item.megaEvolves || (template.baseSpecies === 'Groudon' && item.id === 'redorb') || (template.baseSpecies === 'Kyogre' && item.id === 'blueorb')) return;
			if (template.evos.length) return ["" + template.species + " is not allowed to hold " + item.name + " because it's not fully evolved."];
			let uberStones = ['beedrillite', 'gengarite', 'kangaskhanite', 'mawilite', 'medichamite'];
			if (template.tier === 'Uber' || template.tier === 'Bank-Uber' || set.ability === 'Power Construct' || uberStones.includes(item.id)) return ["" + template.species + " is not allowed to hold " + item.name + "."];
		},
		onBegin: function () {
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				pokemon.originalSpecies = pokemon.baseTemplate.species;
			}
		},
		onSwitchIn: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				// Place volatiles on the Pokémon to show its mega-evolved condition and details
				this.add('-start', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
				let oTemplate = this.getTemplate(pokemon.originalSpecies);
				if (oTemplate.types.length !== pokemon.template.types.length || oTemplate.types[1] !== pokemon.template.types[1]) {
					this.add('-start', pokemon, 'typechange', pokemon.template.types.join('/'), '[silent]');
				}
			}
		},
		onSwitchOut: function (pokemon) {
			let oMegaTemplate = this.getTemplate(pokemon.template.originalMega);
			if (oMegaTemplate.exists && pokemon.originalSpecies !== oMegaTemplate.baseSpecies) {
				this.add('-end', pokemon, oMegaTemplate.requiredItem || oMegaTemplate.requiredMove, '[silent]');
			}
		},
	},
	{
		name: "[Gen 7] Almost Any Ability",
		desc: [
			"Pok&eacute;mon can use any ability, barring the few that are banned.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587901/\">Almost Any Ability</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Ability Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Ignore Illegal Abilities',
			'Aegislash', 'Arceus', 'Archeops', 'Blaziken', 'Darkrai', 'Deoxys', 'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Lunala',
			'Mewtwo', 'Palkia', 'Pheromosa', 'Rayquaza', 'Regigigas', 'Reshiram', 'Shaymin-Sky', 'Shedinja', 'Slaking', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Shadow Tag', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Salamencite',
		],
		onValidateSet: function (set) {
			let bannedAbilities = {'Arena Trap': 1, 'Comatose': 1, 'Contrary': 1, 'Fur Coat': 1, 'Huge Power': 1, 'Imposter': 1, 'Parental Bond': 1, 'Pure Power': 1, 'Simple':1, 'Speed Boost': 1, 'Water Bubble': 1, 'Wonder Guard': 1};
			if (set.ability in bannedAbilities) {
				let template = this.getTemplate(set.species || set.name);
				let legalAbility = false;
				for (let i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility) return ['The ability ' + set.ability + ' is banned on Pok\u00e9mon that do not naturally have it.'];
			}
		},
	},
	{
		name: "[Gen 7] Sketchmons",
		desc: [
			"Pok&eacute;mon gain access to one Sketched move.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3587743/\">Sketchmons</a>",
		],

		mod: 'gen7',
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Baton Pass Clause'],
		banlist: ['Allow One Sketch',
			'Aegislash', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Dialga', 'Giratina', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White',
			'Lugia', 'Lunala', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Solgaleo', 'Xerneas', 'Yveltal', 'Zekrom',
			'Power Construct', 'Shadow Tag', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Salamencite',
			'Arena Trap + Dark Void', 'Arena Trap + Grass Whistle', 'Arena Trap + Hypnosis', 'Arena Trap + Relic Song', 'Arena Trap + Sing', 'Arena Trap + Sleep Powder',
		],
		noSketch: ['Geomancy', 'Lovely Kiss', 'Shell Smash', 'Spore'],
		onValidateTeam: function (team) {
			let sketchedMoves = {};
			for (let i = 0; i < team.length; i++) {
				let move = team[i].sketchmonsMove;
				if (!move) continue;
				if (move in sketchedMoves) {
					return ["You are limited to sketching one of each move by Move Clause.", "(You have sketched " + this.getMove(move).name + " more than once)"];
				}
				sketchedMoves[move] = (team[i].name || team[i].species);
			}
		},
	},
	{
		name: "[Gen 7] Hidden Type",
		desc: [
			"Pok&eacute;mon have an added type determined by their IVs. Same as the Hidden Power type.",
			// "&bullet; <a href=\"https://www.smogon.com/forums/threads/3516349/\">Hidden Type</a>",
		],

		searchShow: false,
		mod: 'hiddentype',
		ruleset: ['[Gen 7] Pokebank OU'],
	},
	{
		name: "[Gen 7] 2v2 Doubles",
		desc: ["Doubles battle where you bring four Pok&eacute;mon to Team Preview and choose only two."],

		mod: 'gen7',
		gameType: 'doubles',
		searchShow: false,
		teamLength: {
			validate: [2, 4],
			battle: 2,
		},
		ruleset: ['[Gen 7] Pokebank Doubles OU'],
		banlist: [],
	},
	{
		name: "OU Theorymon",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3559611/\">OU Theorymon</a>"],

		mod: 'theorymon',
		searchShow: false,
		ruleset: ['OU'],
	},
	{
		name: "Gen-NEXT OU",

		mod: 'gennext',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard NEXT', 'Team Preview'],
		banlist: ['Uber'],
	},

	// Randomized Metas
	///////////////////////////////////////////////////////////////////

	{
		section: "Randomized Metas",
		column: 2,
	},
	{
		name: "Battle Factory",

		team: 'randomFactory',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod', 'Mega Rayquaza Clause'],
	},
	{
		name: "[Gen 7] Challenge Cup 1v1",

		mod: 'gen7',
		team: 'randomCC',
		teamLength: {
			battle: 1,
		},
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: "[Gen 7] Monotype Random Battle",

		mod: 'gen7',
		team: 'random',
		searchShow: false,
		ruleset: ['Pokemon', 'Same Type Clause', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Hackmons Cup",
		desc: ["Randomized teams of level-balanced Pok&eacute;mon with absolutely any ability, moves, and item."],

		mod: 'gen7',
		team: 'randomHC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 7] Doubles Hackmons Cup",

		mod: 'gen7',
		gameType: 'doubles',
		team: 'randomHC',
		searchShow: false,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},

	// RoA Spotlight
	///////////////////////////////////////////////////////////////////

	{
		section: "RoA Spotlight",
		column: 3,
	},
	{
		name: "[Gen 5] Anything Goes",

		mod: 'gen5',
		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},

	// ORAS Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "ORAS Singles",
		column: 3,
	},
	{
		name: "OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3573990/\">OU Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ou/\">OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3571990/\">OU Viability Ranking</a>",
		],

		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Shadow Tag', 'Soul Dew'],
	},
	{
		name: "Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3522911/\">Ubers Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535106/\">Ubers Viability Ranking</a>",
		],

		ruleset: ['Pokemon', 'Standard', 'Swagger Clause', 'Team Preview', 'Mega Rayquaza Clause'],
	},
	{
		name: "UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3582473/\">np: UU Stage 7.3</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/uu/\">UU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3555277/\">UU Viability Ranking</a>",
		],

		ruleset: ['OU'],
		banlist: ['OU', 'BL', 'Drizzle', 'Drought', 'Baton Pass'],
	},
	{
		name: "RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3583022/\">np: RU Stage 19</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/ru/\">RU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558546/\">RU Viability Ranking</a>",
		],

		ruleset: ['UU'],
		banlist: ['UU', 'BL2'],
	},
	{
		name: "NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3576747/\">np: NU Stage 15</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/tags/nu/\">NU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3555650/\">NU Viability Ranking</a>",
		],

		ruleset: ['RU'],
		banlist: ['RU', 'BL3'],
	},
	{
		name: "PU (suspect test)",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3586575/\">np: PU Stage 10</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3528743/\">PU Viability Ranking</a>",
		],

		ruleset: ['NU'],
		banlist: ['NU', 'BL4', 'Chatter'],
		unbanlist: ['Baton Pass'],
	},
	{
		name: "LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505710/\">LC Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/dex/xy/formats/lc/\">LC Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3547566/\">LC Viability Ranking</a>",
		],

		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['LC Uber', 'Gligar', 'Misdreavus', 'Scyther', 'Sneasel', 'Tangela', 'Dragon Rage', 'Sonic Boom', 'Swagger'],
	},
	{
		name: "Anything Goes",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3523229/\">Anything Goes Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3548945/\">Anything Goes Resources</a>",
		],

		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
	},
	{
		name: "CAP",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3537407/\">CAP Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3545628/\">CAP Viability Ranking</a>",
		],

		searchShow: false,
		ruleset: ['OU'],
		banlist: ['Allow CAP'],
	},
	{
		name: "Battle Spot Singles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3527960/\">Battle Spot Singles Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554616/\">Battle Spot Singles Viability Ranking</a>",
		],

		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Inverse Battle",

		searchShow: false,
		ruleset: ['Pokemon', 'Endless Battle Clause', 'Team Preview', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Illegal', 'Unreleased'],
		onNegateImmunity: false,
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},
	{
		name: "[Gen 6] Random Battle",

		team: 'random',
		ruleset: ['PotD', 'Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Custom Game",

		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// ORAS Doubles/Triples
	///////////////////////////////////////////////////////////////////

	{
		section: "ORAS Doubles/Triples",
	},
	{
		name: "Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3580680/\">np: Doubles OU Stage 5</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3498688/\">Doubles OU Banlist</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3535930/\">Doubles OU Viability Ranking</a>",
		],

		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard Doubles', 'Swagger Clause', 'Team Preview'],
		banlist: [
			'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
			'Palkia', 'Rayquaza', 'Reshiram', 'Salamence-Mega', 'Salamencite', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom', 'Soul Dew',
			'Dark Void', 'Gravity ++ Grass Whistle', 'Gravity ++ Hypnosis', 'Gravity ++ Lovely Kiss', 'Gravity ++ Sing', 'Gravity ++ Sleep Powder',
		],
	},
	{
		name: "Doubles Ubers",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542746/\">Doubles Ubers</a>"],

		gameType: 'doubles',
		searchShow: false,
		ruleset: ['Pokemon', 'Species Clause', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Evasion Abilities Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Dark Void'],
	},
	{
		name: "Doubles UU",
		desc: ["&bullet; <a href=\"https://www.smogon.com/forums/threads/3542755/\">Doubles UU</a>"],

		gameType: 'doubles',
		ruleset: ['Doubles OU'],
		banlist: [
			'Aegislash', 'Amoonguss', 'Arcanine', 'Azumarill', 'Bisharp', 'Breloom', 'Charizard-Mega-Y', 'Charizardite Y',
			'Conkeldurr', 'Cresselia', 'Diancie-Mega', 'Diancite', 'Ferrothorn', 'Garchomp', 'Gardevoir-Mega', 'Gardevoirite',
			'Gastrodon', 'Gengar', 'Greninja', 'Heatran', 'Hitmontop', 'Hoopa-Unbound', 'Hydreigon', 'Jirachi',
			'Kangaskhan-Mega', 'Kangaskhanite', 'Keldeo', 'Kyurem-Black', 'Landorus-Therian', 'Latios', 'Ludicolo', 'Milotic',
			'Politoed', 'Raichu', 'Rotom-Wash', 'Scizor', 'Scrafty', 'Shaymin-Sky', 'Suicune', 'Sylveon', 'Talonflame',
			'Terrakion', 'Thundurus', 'Togekiss', 'Tyranitar', 'Venusaur', 'Volcanion', 'Weavile', 'Whimsicott', 'Zapdos',
		],
	},
	{
		name: "VGC 2016",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3558332/\">VGC 2016 Rules</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3580592/\">VGC 2016 Viability Ranking</a>",
		],

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Species Clause', 'Nickname Clause', 'Item Clause', 'Team Preview', 'Cancel Mod'],
		banlist: [
			'Illegal', 'Unreleased', 'Mew', 'Celebi', 'Jirachi', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed', 'Phione', 'Manaphy', 'Darkrai',
			'Shaymin', 'Shaymin-Sky', 'Arceus', 'Victini', 'Keldeo', 'Meloetta', 'Genesect', 'Diancie', 'Hoopa', 'Hoopa-Unbound', 'Volcanion', 'Soul Dew',
		],
		requirePentagon: true,
		onValidateTeam: function (team) {
			const legends = {'Mewtwo':1, 'Lugia':1, 'Ho-Oh':1, 'Kyogre':1, 'Groudon':1, 'Rayquaza':1, 'Dialga':1, 'Palkia':1, 'Giratina':1, 'Reshiram':1, 'Zekrom':1, 'Kyurem':1, 'Xerneas':1, 'Yveltal':1, 'Zygarde':1};
			let n = 0;
			for (let i = 0; i < team.length; i++) {
				let template = this.getTemplate(team[i].species).baseSpecies;
				if (template in legends) n++;
				if (n > 2) return ["You can only use up to two legendary Pok\u00E9mon."];
			}
		},
	},
	{
		name: "Battle Spot Doubles",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3560820/\">Battle Spot Doubles Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3560824/\">Battle Spot Doubles Viability Ranking</a>",
		],

		gameType: 'doubles',
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "[Gen 6] Random Doubles Battle",

		gameType: 'doubles',
		team: 'random',
		searchShow: false,
		ruleset: ['PotD', 'Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "Doubles Custom Game",

		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},
	{
		name: "Battle Spot Triples",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533914/\">Battle Spot Triples Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3549201/\">Battle Spot Triples Viability Ranking</a>",
		],

		gameType: 'triples',
		maxForcedLevel: 50,
		teamLength: {
			validate: [6, 6],
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		requirePentagon: true,
	},
	{
		name: "Triples Custom Game",

		gameType: 'triples',
		searchShow: false,
		canUseRandomTeam: true,
		maxLevel: 9999,
		defaultLevel: 100,
		debug: true,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// BW2 Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "BW2 Singles",
		column: 4,
	},
	{
		name: "[Gen 5] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551993/\">BW2 OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Baton Pass Clause', 'Swagger Clause', 'Team Preview'],
		banlist: ['Uber', 'Drizzle ++ Swift Swim', 'Drought ++ Chlorophyll', 'Sand Stream ++ Sand Rush', 'Soul Dew'],
	},
	{
		name: "[Gen 5] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3550881/\">BW2 Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446463/\">BW2 Ubers Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['Pokemon', 'Team Preview', 'Standard Ubers'],
	},
	{
		name: "[Gen 5] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3474024/\">BW2 UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['[Gen 5] OU'],
		banlist: ['OU', 'BL', 'Drought', 'Sand Stream', 'Snow Warning'],
	},
	{
		name: "[Gen 5] RU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3473124/\">BW2 RU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['[Gen 5] UU'],
		banlist: ['UU', 'BL2', 'Shell Smash + Baton Pass', 'Snow Warning'],
	},
	{
		name: "[Gen 5] NU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3484121/\">BW2 NU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		ruleset: ['[Gen 5] RU'],
		banlist: ['RU', 'BL3', 'Prankster + Assist'],
	},
	{
		name: "[Gen 5] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3485860/\">BW2 LC Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431094/\">BW2 Sample Teams</a>",
		],

		mod: 'gen5',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Little Cup'],
		banlist: ['Berry Juice', 'Soul Dew', 'Dragon Rage', 'Sonic Boom', 'LC Uber', 'Gligar', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela'],
	},
	{
		name: "[Gen 5] GBU Singles",

		mod: 'gen5',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [3, 6],
			battle: 3,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Random Battle",

		mod: 'gen5',
		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 5] Custom Game",

		mod: 'gen5',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// BW2 Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: 'BW2 Doubles',
		column: 4,
	},
	{
		name: "[Gen 5] Doubles OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533424/\">BW2 Doubles Metagame Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3533421/\">BW2 Doubles Viability Ranking</a>",
		],

		mod: 'gen5',
		gameType: 'doubles',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause', 'Team Preview'],
		banlist: [
			'Arceus', 'Dialga', 'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Jirachi',
			'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Zekrom', 'Soul Dew', 'Dark Void', 'Sky Drop',
		],
	},
	{
		name: "[Gen 5] GBU Doubles",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		maxForcedLevel: 50,
		teamLength: {
			validate: [4, 6],
			battle: 4,
		},
		ruleset: ['Pokemon', 'Standard GBU', 'Team Preview'],
		banlist: ['Dark Void', 'Sky Drop'],
	},
	{
		name: "[Gen 5] Doubles Custom Game",

		mod: 'gen5',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions, for serious (other than team preview)
		ruleset: ['Team Preview', 'Cancel Mod'],
	},

	// Past Generations
	///////////////////////////////////////////////////////////////////

	{
		section: "Past Generations",
		column: 4,
	},
	{
		name: "[Gen 4] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3551992/\">DPP OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard', 'Evasion Abilities Clause'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 4] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3505128/\">DPP Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446464/\">DPP Ubers Sample Teams</a>",
		],

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Arceus'],
	},
	{
		name: "[Gen 4] UU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503638/\">DPP UU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],

		mod: 'gen4',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'OU', 'BL'],
	},
	{
		name: "[Gen 4] LC",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/dp/articles/little_cup_guide\">DPP LC Guide</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431088/\">DPP Sample Teams</a>",
		],

		mod: 'gen4',
		maxLevel: 5,
		ruleset: ['Pokemon', 'Standard', 'Little Cup'],
		banlist: ['LC Uber', 'Misdreavus', 'Murkrow', 'Scyther', 'Sneasel', 'Tangela', 'Yanma', 'Berry Juice', 'DeepSeaTooth', 'Dragon Rage', 'Sonic Boom'],
	},
	{
		name: "[Gen 4] Custom Game",

		mod: 'gen4',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},
	{
		name: "[Gen 4] Doubles Custom Game",

		mod: 'gen4',
		gameType: 'doubles',
		searchShow: false,
		canUseRandomTeam: true,
		debug: true,
		maxLevel: 9999,
		defaultLevel: 100,
		// no restrictions
		ruleset: ['Cancel Mod'],
	},
	{
		name: "[Gen 3] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503019/\">ADV OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431087/\">ADV Sample Teams</a>",
		],

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber', 'Smeargle + Ingrain'],
	},
	{
		name: "[Gen 3] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3536426/\">ADV Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6446466/\">ADV Ubers Sample Teams</a>",
		],

		mod: 'gen3',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Wobbuffet + Leftovers'],
	},
	{
		name: "[Gen 3] Custom Game",

		mod: 'gen3',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 2] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3503082/\">GSC OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],

		mod: 'gen2',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 2] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3507552/\">GSC Ubers Discussion</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431086/\">GSC Sample Teams</a>",
		],

		mod: 'gen2',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Random Battle",

		mod: 'gen2',
		searchShow: false,
		team: 'random',
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 2] Custom Game",

		mod: 'gen2',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] OU",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3486845/\">RBY OU Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],

		mod: 'gen1',
		ruleset: ['Pokemon', 'Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Ubers",
		desc: [
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3541329/\">RBY Ubers Viability Ranking</a>",
			"&bullet; <a href=\"https://www.smogon.com/forums/posts/6431045/\">RBY Sample Teams</a>",
		],

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard'],
	},
	{
		name: "[Gen 1] OU (tradeback)",

		mod: 'gen1',
		searchShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Species Clause', 'OHKO Clause', 'Evasion Moves Clause', 'HP Percentage Mod', 'Cancel Mod'],
		banlist: ['Allow Tradeback', 'Uber', 'Unreleased', 'Illegal',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Random Battle",

		mod: 'gen1',
		team: 'random',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Challenge Cup",

		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'Freeze Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
	},
	{
		name: "[Gen 1] Stadium",

		mod: 'stadium',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Custom Game",

		mod: 'gen1',
		searchShow: false,
		debug: true,
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod'],
	},

	/*
	* Custom Formats
	*/

	{
		section: "Custom Tiers",
		column: 4,
	},

	{
		name: "ZU",
		section: "ORAS Singles",

		ruleset: ['PU'],
		banlist: ['Altaria', 'Arbok', 'Armaldo', 'Armaldo', 'Articuno', 'Avalugg', 'Basculin', 'Basculin-Blue-Striped', 'Beheeyem', 'Bouffalant', 'Chatot', 'Clefairy', 'Crustle',
			'Dodrio', 'Drifblim', 'Dusknoir', 'Electrode', 'Exeggutor', 'Flareon', 'Floatzel', 'Fraxure', 'Gabite', 'Golem', 'Gorebyss', 'Gourgeist-Super', 'Grumpig', 'Heat Rock',
			'Jumpluff', 'Kadabra', 'Kingler', 'Lapras', 'Leafeon', 'Leavanny', 'Lickilicky', 'Lumineon', 'Machoke', 'Marowak', 'Metang', 'Misdreavus', 'Monferno', 'Mr. Mime',
			'Ninetales', 'Ninjask', 'Pawniard', 'Pelipper', 'Politoed', 'Probopass', 'Purugly', 'Raichu', 'Rampardos', 'Rapidash', 'Regice', 'Relicanth', 'Roselia', 'Rotom-Frost',
			'Simisear', 'Sticky Web', 'Stoutland', 'Stunfisk', 'Swanna', 'Tangela', 'Torkoal', 'Ursaring', 'Vigoroth', 'Vullaby', 'Zebstrika',
		],
	},
	{
		name: "C&E",
		section: "Other Metagames",

		searchShow: false,
		maxLevel: 100,
		ruleset: ['Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
	},
	{
		name: "Tier Shift",
		desc: [
			"Pok&eacute;mon below OU/BL get all their stats boosted. UU/BL2 get +5, RU/BL3 get +10, NU/BL4 get +15, and PU or lower get +20.",
			"&bullet; <a href=\"https://www.smogon.com/forums/threads/3554765/\">Tier Shift</a>",
		],
		section: "Other Metagames",

		mod: 'tiershift',
		ruleset: ['OU'],
		banlist: ['Damp Rock'],
	},
	{
		name: "Inverse 1v1",
		section: "Other Metagames",

		teamLength: {
			validate: [1, 3],
			battle: 1,
		},
		ruleset: ['Pokemon', 'Moody Clause', 'OHKO Clause', 'Evasion Moves Clause', 'Swagger Clause', 'Endless Battle Clause', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
		banlist: ['Illegal', 'Unreleased', 'Arceus', 'Blaziken', 'Darkrai', 'Deoxys', 'Deoxys-Attack', 'Dialga',
				'Giratina', 'Giratina-Origin', 'Groudon', 'Ho-Oh', 'Kyogre', 'Kyurem-White', 'Lugia', 'Mewtwo',
				'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
				'Focus Sash', 'Kangaskhanite', 'Salamencite', 'Soul Dew', 'Perish Song',
		],
		onNegateImmunity: false,
		onEffectiveness: function (typeMod, target, type, move) {
			// The effectiveness of Freeze Dry on Water isn't reverted
			if (move && move.id === 'freezedry' && type === 'Water') return;
			if (move && !this.getImmunity(move, type)) return 1;
			return -typeMod;
		},
	},
	{
		name: "Metronomes",
		section: "Other Metagames",

		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview', 'Recovery Clause', 'Metronome Clause', 'Moody Clause'],
		banlist: ['Cursed Body', 'Presure', 'Pure Power', 'Huge Power',
			'Wonder Guard', 'Parental Bond', 'Effect Spore', 'Cute Charm', 'Prankster', 'Sand Stream', 'Rough Skin', 'Protean',
			'Snow Warning', 'Harvest', 'Flame Body', 'Poison Point', 'Poison Touch', 'Magic Bounce', 'Magic Guard', 'Iron Barbs'],
	},
	{
		name: "Metronome Challenge Cup",
		section: "Randomized Metas",

		team: 'randomCC',
		ruleset: ['Pokemon', 'HP Percentage Mod', 'Cancel Mod', 'Team Preview'],
	},
	{
		name: 'Monocolor',
		desc: [
			"All Pok&eacute;mon on a team must share a color.",
			"&bullet; /ds [color],all - Returns all the pok&eacute;mon with that color, helpful for team making.",
			"&bullet; Valid colors are Black, White, Gray, Green, Blue, Red, Yellow, Brown, Pink, Purple.",
			"&bullet; <a href=\"http://pastebin.com/raw/wS9dK5mB\">Monocolor Banlist</a>",
			"&bullet; Viability Rankings coming soon.",
		],
		section: "Other Metagames",

		mod: 'monocolor',
		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Color Clause', 'Team Preview'],
		banlist: ['Arceus', 'Deoxys', 'Deoxys-Attack', 'Deoxys-Speed', 'Darkrai', 'Dialga', 'Genesect', 'Giratina', 'Giratina-Origin', 'Groudon', 'Hoopa-Unbound', 'Ho-Oh',
				'Kyogre', 'Kyurem-White', 'Landorus', 'Lugia', 'Mewtwo', 'Palkia', 'Rayquaza', 'Reshiram', 'Shaymin-Sky', 'Xerneas', 'Yveltal', 'Zekrom',
				'Blazikenite', 'Damp Rock', 'Gengarite', 'Kanghaskhanite', 'Lucarionite', 'Metagrossite', 'Salamencite', 'Soul Dew',
			],
	},
	{
		name: 'Random Monocolor',
		section: "Other Metagames",

		mod: 'monocolor',
		team: 'randomMonocolor',
		searchShow: false,
		ruleset: ['Pokemon', 'Standard', 'Baton Pass Clause', 'Swagger Clause', 'Same Color Clause'],
	},

	{
		name: "Wisp Super Staff Bros.",
		section: "Other Metagames",
		mod: 'wssb',
		team: 'randomWispStaffBros',
		ruleset: ['Pokemon', 'Sleep Clause Mod', 'HP Percentage Mod', 'Cancel Mod'],
		onBegin: function () {
			// This seasonal gets a bit from Super Smash Bros., that's where the initial message comes from.
			this.add('message', "3");
			this.add('message', "2");
			this.add('message', "1");
			this.add('message', "GET READY!");
			this.add('message', "GOOOO!!!");
			// this.add('raw|<div class="infobox"><center><b>Wisp Super Staff Bros Credits:</b></center><b>%Emg TechP Volco</b> - Programming, Organization, Testing<br /><b>@LotusChamp Torpid</b> - Programming, Organization, Testing<br /><b>Wisp Staff Members</b> - Cooperation and understanding about the project (and some provided aid)');
			this.add('raw|<br />');
			// This variable saves the status of a spammy conversation to be played, so it's only played once.
			this.convoPlayed = false;
			// This code here is used for the renaming of moves showing properly on client.
			let globalRenamedMoves = {
				'defog': "Defrog",
			};
			/*let customRenamedMoves = {
				"silveee": {
					'megahorn': "Megahorny",
					'boomburst': "ALLAHU AKBAR",
					'vcreate': "D-Create",
				},
			}; */
			let allPokemon = this.p1.pokemon.concat(this.p2.pokemon);
			for (let i = 0, len = allPokemon.length; i < len; i++) {
				let pokemon = allPokemon[i];
				let last = pokemon.moves.length - 1;
				if (pokemon.moves[last]) {
					pokemon.moves[last] = toId(pokemon.set.signatureMove);
					pokemon.moveset[last].move = pokemon.set.signatureMove;
					pokemon.baseMoveset[last].move = pokemon.set.signatureMove;
				}
				for (let j = 0; j < pokemon.moveset.length; j++) {
					let moveData = pokemon.moveset[j];
					if (globalRenamedMoves[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = globalRenamedMoves[moveData.id];
						pokemon.baseMoveset[j].move = globalRenamedMoves[moveData.id];
					}
				/*	let customRenamedSet = customRenamedMoves[toId(pokemon.name)];
					if (customRenamedSet && customRenamedSet[moveData.id]) {
						pokemon.moves[j] = toId(pokemon.set.signatureMove);
						moveData.move = customRenamedSet[moveData.id];
						pokemon.baseMoveset[j].move = customRenamedSet[moveData.id];
					} */
				}
			}
		},
		// Hacks for megas changed abilities. This allow for their changed abilities.
		// IMPORTANT IMPORTANT IMPORTANT IMPORTANT
	/*	onUpdate: function (pokemon) {
			let name = toId(pokemon.name);
			if (pokemon.template.isMega) {
				if (name === '' && pokemon.getAbility().id === '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id === '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id === '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id === '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id === '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id === '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id === '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id === '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
			}
		}, */
		// IMPORTANT END IMPORTANT END
		// Here we treat many things, read comments inside for information.
		onSwitchInPriority: 1,
		onSwitchIn: function (pokemon) {
			let name = toId(pokemon.illusion ? pokemon.illusion.name : pokemon.name);
			// No OP pls. Balance stuff, changing them upon switch in. Wonder Guard gets curse to minimise their turns out.
			if (pokemon.getAbility().id === 'wonderguard') {
				pokemon.addVolatile('curse', pokemon);
				this.add('-message', pokemon.name + "'s Wonder Guard has cursed it!");
			}
			// Add here more hacky stuff for mega abilities.
			// This happens when the mega switches in, as opposed to mega-evolving on the turn.
			// IMPORTANT
			// let oldAbility = pokemon.ability;
			/*	if (pokemon.template.isMega) {
				if (name === '' && pokemon.getAbility().id !== '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id !== '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id !== '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id !== '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id !== '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id !== '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id !== '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
				if (name === '' && pokemon.getAbility().id !== '') {
					pokemon.setAbility('');
					this.add('-ability', pokemon, pokemon.ability);
				}
			} else {
				pokemon.canMegaEvo = this.canMegaEvo(pokemon); // Bypass one mega limit.
			} */
			// Add here special typings, done for flavour mainly.
			// IMPORTANT
			if (name === 'viktria' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Normal/Ghost');
				pokemon.types = ["Normal", "Ghost"];
			}
			if (name === 'alankh' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Poison/Steel');
				pokemon.types = ["Poison", "Steel"];
			}
			if (name === 'arkenciel' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Fighting/Ghost/Dark');
				pokemon.types = ["Fighting", "Ghost", "Dark"];
			}
			if (name === 'rabinov' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Bug/Electric');
				pokemon.types = ["Bug", "Electric"];
			}
			if (name === 'silveee' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Dark/Fairy');
				pokemon.types = ["Dark", "Fairy"];
			}
			if (name === 'allianceaegis' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Grass/Fire');
				pokemon.types = ["Grass", "Fire"];
			}
			if (name === 'pegasusjane' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Water/Fairy');
				pokemon.types = ["Water", "Fairy"];
			}
			if (name === 'skylafull' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Fairy/Fighting');
				pokemon.types = ["Fairy", "Fighting"];
			}
			if (name === 'AB Dominicarus' && !pokemon.illusion) {
				this.add('-start', pokemon, 'typechange', 'Flying/Grass');
				pokemon.types = ["Flying", "Grass"];
			}
			// Edgy switch-in sentences go here.
			// Sentences vary in style and how they are presented, so each Pokémon has its own way of sending them.
			// Admins + jd
			/*if (name === 'jd') {
				this.add('c|jd|I\'m Not staff');
			}*/
			if (name === 'kanabae') {
				this.add('c|~Kanabae|/html Guard Skill: Overdrive <em class="mine"><img src="http://kingyugi.fr/forums/img/avatars/165996.jpg" title="feelskana" height="30" width="30" /></em>');
			}
			if (name === 'tailz') {
				this.add('c|~Tailz|HELLO');
			}
			// Leaders.
			if (name === 'flicette') {
				this.add('c|&Fеlicette|:D');
			}
			if (name === 'niisama') {
				this.add('c|&Nii Sama|Stars, hide your fires; Let not light see my black and deep desires.');
			}
			//mods
			if (name === '13490ufd') {
				this.add('c|@13490ufd|HELLO hf (don\'t need to wish you luck cause mine is so bad)');
			}
			if (name === 'alphaninja') {
				this.add('c|@Alpha Ninja|First for sweeping');
			}
			if (name === 'doctorcharizard') {
				this.add('c|@Doctor Charizard|Hello fellow opponent, I am here to protect whoever has summoned me.');
			}
			if (name === 'lotuschamptorpid') {
				this.add('c|@LotusChamp Torpid|My my, you\'re looking mighty set up today');
			}
			if (name === 'rabinov') {
				this.add('c|@Rabinov|My touch will be fatal;, hope you can avoid it!');
			}
			if (name === 'wispbot') {
				this.add('c|@Wisp Bot|/html Fear my moderation, hotter than fire <em class="mine"><img src="http://i.imgur.com/wp51rIg.png" title="feelsbn" height="30" width="30" /></em>');
			}
			// Drivers.
			if (name === 'alankh') {
				this.add('c|%Alan KH|FOIT ME YOU PUNK BITCH');
			}
			if (name === 'alliancechime') {
				this.add('c|%Alliance Chime|I-Is it safe here?|');
			}
			if (name === 'chiefsokka') {
				this.add('c|%Chief Sokka|/html I never passed medical school<em class="mine"><img src="http://i.imgur.com/hSzqy5z.png?1" title="feelsjig" height="30" width="30" /></em>');
			}
			if (name === 'combobreaker') {
				this.add('c|%Combo Breaker|Time to break some combos.');
			}
			if (name === 'emgtechpvolco') {
				this.add('c|%Emg TechP Volco|How in the hell am i driver?');
				this.add('c|%Emg TechP Volco|So... I got a question for you... do you think the worse person... can change? that everyone can be a good person if they just try?... heh alright... do you wanna have a bad time?');
				this.add('c|%Emg TechP Volco|/html It\'s a beautiful day outside.. birds are singing... flowers are blooming... on days like these... kids like YOU... SHOULD BE BURNING IN HELL!<em class="mine"><img src="http://i.imgur.com/DPr9ifK.gif" title="feelssans" height="30" width="30" /></em></div>');
			}
			if (name === 'isandman') {
				this.add('c|%ST. Sandman|Enter Sandman');
			}
			if (name === 'masterfloat') {
				this.add('c|%Master Float|/me flops in');
			}
			if (name === 'snow') {
				this.add('c|+snow|How lucky do you think you are? :o');
			}
			if (name === 'superjeenius') {
				this.add('c|%SuperJeenius|Hello gentle and ladysman!');
			}
			if (name === 'viktria') {
				this.add('c|%Viktria|You\'re not... him. I have no use for you. Be banished! (•‾̑⌣‾̑•)');
			}
			// Voices.
			if (name === 'abdominicarus') {
				this.add('c|+Ab Dominicarus|Bout\' frackin time #WeInDis');
			}
			if (name === 'allianceaegis') {
				this.add('c|+Alliance Aegis|Im sorry, did you expect Aegislash instead of Serperior? -_-');
			}
			if (name === 'arkenciel') {
				this.add('c|+ArkenCiel|What can you even do against me?');
			}
			if (name === 'crystalxman') {
				this.add('c|+Crystal Xman|/html hf but this time victory is mine. There is no way I can lose <em class="mine"><img src="https://cdn.betterttv.net/emote/562b9101a6646e202bcc5447/2x" title="rarechar" height="30" width="30" /></em>');
			}
			if (name === 'escoffier') {
				this.add('c|+Escoffier|/html Imma steal yo gurl w/ my mad skillz<em class="mine"><img src="http://i.imgur.com/21XafLU.png" title="feelshaft" height="30" width="30" /></em></div>');
			}
			if (name === 'kre8noyz') {
				this.add('c|+Kre8noyz|Someone called my house and told my wife some things about fuckn, and I don\'t like that....');
			}
			/*if (name === 'mdnightprf') { // no longer staff
				this.add('raw|<div class="chat"><small>+</small><button name="parseCommand" value="/user Midnight Prof Exo" style="background:none;border:0;padding:0 5px 0 0;font-family:Verdana,Helvetica,Arial,sans-serif;font-size:9pt;cursor:pointer"><b><font color="#ED3F68">Midnight Prof Exo: </font></b></button>Here I come little boys<em class="mine"><img src="http://i.imgur.com/hSzqy5z.png?1" title="feelsjig" height="30" width="30" /></em></div>');
			}*/
			if (name === 'phoenixtana') {
				this.add('c|+Phoenix Tana|You have been blessed by her rain.');
			}
			if (name === 'samcrowe') {
				this.add('c|+Sam Crowe|Hi, wait are you a girl, marry me?');
			}
			if (name === 'silveee') {
				this.add('c|+Silveee|KONICHIWA MINNA I HERD U LIEK CANCER');
			}
			/*if (name === 'skymightfall') {
				this.add('c|+Sky Might Fall|');
			} */
			// honorary mentions
			/*if (name === 'wаndo') { // no longer staff
				this.add('c|Wаndo|;3; </3');
			}*/
		},
		/*
		// Here we deal with some special mechanics due to custom sets and moves.
		onBeforeMove: function (pokemon, target, move) {
			var name = toId(pokemon.name);
			// Special Shaymin forme change.
			if (name === 'shaymin' && !pokemon.illusion) {
				var targetSpecies = (move.category === 'Status') ? 'Shaymin' : 'Shaymin-Sky';

				if (targetSpecies !== pokemon.template.species) {
					this.add('message', pokemon.name + ((move.category === 'Status') ? ' has reverted to Land Forme!' : ' took to the sky once again!'));
					var template = this.getTemplate(targetSpecies);
					pokemon.formeChange(targetSpecies);
					pokemon.baseTemplate = template;
					pokemon.setAbility(template.abilities['0']);
					pokemon.baseAbility = template.ability;
					pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
					this.add('detailschange', pokemon, pokemon.details);
				}
			}

			// Break the secondary of Dell's sig if an attack is attempted.
			if (target.volatiles['parry'] && move.category !== 'Status') {
				target.removeVolatile('parry');
			}

			if (pokemon.volatiles['needles']) {
				var dice = this.random(3);
				pokemon.removeVolatile('needles');
				if (dice === 2) {
					this.boost({atk:1, spe:1, def:-1}, pokemon, pokemon, 'used needles');
				} else if (dice === 1) {
					this.boost({def:1, spd:1, spe:-1}, pokemon, pokemon, 'used needles');
				} else {
					this.boost({atk:1, def:1, spe:-1}, pokemon, pokemon, 'used needles');
				}
			}
		},
		*/
		// Add here salty tears, that is, custom faint phrases.
		onFaint: function (pokemon) {
			let name = toId(pokemon.name);
			// Admins + jd
			/*if (name === 'jd') {
				this.add('c|jd|Nice meme');
			}*/
			if (name === 'tailz') {
				this.add('c|~Tailz|cmon dude...');
			}
			if (name === 'kanabae') {
				this.add('c|&Kanabae|I was able to stay alive because of your heart. Truly and deeply, thank you for giving my life to me.');
			}
			// Leaders
			if (name === 'flicette') {
				this.add('c|&Fеlicette|toodles :c');
			}
			if (name === 'niisama') {
				this.add('c|&Nii Sama|Normal people have no idea how beautiful the darkness is...');
			}
			// Moderators
			if (name === '13490ufd') {
				this.add('c|@13490ufd|Never wanted to battle, now i can go back to farming credits :]');
			}
			if (name === 'alphaninja') {
				this.add('c|@Alpha Ninja|You can\'t see me'); //hes john cena Kappa
			}
			if (name === 'doctorcharizard') {
				this.add('c|@Doctor Charizard|My time here is up, and I\'m no longer alive, I wish you luck fellow passenger.');
			}
			if (name === 'lotuschamptorpid') {
				this.add('c|@LotusChamp Torpid|Change my name back to blue feelsmd');
			}
			if (name === 'rabinov') {
				this.add('c|@Rabinov|My work here is done');
			}
			if (name === 'wispbot') {
				this.add('c|@Wisp Bot|My flames will never burn out!');
			}
			// Drivers
			if (name === 'alankh') {
				this.add('c|%Alan KH|I blame the little garden gnome who keeps cutting me in the nipple.');
			}
			if (name === 'alliancechime') {
				this.add('c|%Alliance Chime|I-I\'m scared...');
			}
			if (name === 'chiefsokka') {
				this.add('c|%Chief Sokka|Well shit...');
			}
			if (name === 'combobreaker') {
				this.add('c|%Combo Breaker|Done with this game. Sick of hackers. fk this. >:/');
			}
			if (name === 'emgtechpvolco') {
				this.add('c|%Emg TechP Volco|I\'ll see you in hell for this...');
				this.add('c|%Emg TechP Volco|/me fades away');
			}
			if (name === 'isandman') {
				this.add('c|%ST. Sandman|Exit light , enter night , take my hand - off to never never land');
			}
			if (name === 'masterfloat') {
				this.add('c|%Master Float|/me stopped flopping ;-;');
			}
			if (name === 'snow') {
				this.add('c|+snow|Aw man,  I guess I wasn\'t lucky enough! D:');
			}
			if (name === 'superjeenius') {
				this.add('c|%SuperJeenius|"PSHSHSHSHSSHSHSS" - Krabby');
			}
			if (name === 'viktria') {
				this.add('c|%Viktria|Can\'t stand haxers, to be honest  ❤ . What... why\'re you looking at me? I\'m leaving.');
			}
			// Voices
			if (name === 'abdominicarus') {
				this.add('c|+Ab Dominicarus|BLAST... THOU HATH VANQUISHED ME!!!');
			}
			if (name === "allianceaegis") {
				this.add('c|+Alliance Aegis|I was just kidding about destroying your team :( Why did you have to do that D:');
			}
			if (name === 'arkenciel') {
				this.add('c|+ArkenCiel|Heh, not bad.');
			}
			if (name === 'crystalxman') {
				this.add('c|+Crystal Xman|/html THESE LUCKY ASS PLAYERS AND THEIR HAX<em class="mine"><img src="http://img06.deviantart.net/b308/i/2015/136/c/c/pjsalt_by_meowwwwwww-d8tnfun.png" title="PJSalt" height="30" width="30" /><img src="http://img06.deviantart.net/b308/i/2015/136/c/c/pjsalt_by_meowwwwwww-d8tnfun.png" title="PJSalt" height="30" width="30" /><img src="http://img06.deviantart.net/b308/i/2015/136/c/c/pjsalt_by_meowwwwwww-d8tnfun.png" title="PJSalt" height="30" width="30" /></em>');
			}
			if (name === 'escoffier') {
				this.add('c|+Escoffier|#MakeMonoGr8Again #Trump2016 #BuildThatWall');
			}
			if (name === 'kre8noyz') {
				this.add('c|+Kre8noyz|I blame Wolfy for this PUTO winning');
			}
			/*if (name === 'mdnightprf') { // no longer staff
				this.add('c|+Midnight Prof Exo|H-How could you do this to your Senpai ;~;');
			}*/
			if (name === 'pegasusjane') {
				this.add('c|+Pegasus Jane|/html Wow, you\'re rude.<em class="mine"><img src="http://i.imgur.com/RIOKSJ3.gif" title="feelsspl" height="30" width="30" /></em>');
			}
			if (name === 'samcrowe') {
				this.add('c|+Sam Crowe|I cant compete with cancer');
			}
			if (name === 'silveee') {
				this.add('c|+Silveee|SAYONARA BASTARDS');
			}
			if (name === 'stskymfall') {
				this.add('c|+ST. SkyMFall|The Sky Might Fall');
			}
		},
		onSwitchOut: function (pokemon) {
			// Transform
			if (pokemon.originalName) pokemon.name = pokemon.originalName;
			// Switch Out Messages
			let name = toId(pokemon.name);
			// Admins + jd
			/*if (name === 'jd') {
				this.add('c|jd|cmon...');
			}*/
			if (name === 'kanabae') {
				this.add('c|~Kanabae|Let me believe what you\'ve always believed');
			}
			if (name === 'tailz') {
				this.add('c|~Tailz|It\'s just a prank bro');
			}
			// Leaders
			if (name === 'flicette') {
				this.add('c|&Fеlicette|:(');
			}
			if (name === 'niisama') {
				this.add('c|&Nii Sama|Without darkness one cannot know light.');
			}
			// Moderators
			if (name === '13490ufd') {
				this.add('c|@13490ufd|/html See you soon <em class="mine"><img src="http://imgur.com/YCCDZWq.png" title="feelsarken" height="30" width="30" /></em>');
			}
			if (name === 'alphaninja') {
				this.add('c|@Alpha Ninja|PREDONK');
			}
			if (name === 'doctorcharizard') {
				this.add('c|@Doctor Charizard|I must take my leave. I will return for revenge later on, so be aware of that.');
			}
			if (name === 'lotuschamptorpid') {
				this.add('c|@LotusChamp Torpid|');
			}
			if (name === 'rabinov') {
				this.add('c|@Rabinov|That will do for now!');
			}
			if (name === 'wispbot') {
				this.add('c|@Wisp Bot|You cannot handle this heat');
			}
			// Drivers
			if (name === 'alankh') {
				this.add('c|%Alan KH|Y u no die to me ;w;');
			}
			if (name === 'alliancechime') {
				this.add('c|%Alliance Chime|It\'s too late now... I\'m just too weak...');
			}
			if (name === 'chiefsokka') {
				this.add('c|%Chief Sokka|I\'ll be back with the right tools!');
			}
			if (name === 'combobreaker') {
				this.add('c|%Combo Breaker|/html Time to bail? I\'ll be back later.<em class="mine"><img src="http://quizup-players.imgix.net/players/256149516142337468/pictures/sqxkbnx18h/original.jpg" title="feelsgn" height="30" width="30" /></em>');
			}
			if (name === 'emgtechpvolco') {
				this.add('c|%Emg TechP Volco|I\'ll return to send you the hell');
			}
			if (name === 'isandman') {
				this.add('c|%ST. Sandman|Joy bangla , Joy bongobondhu ');
			}
			if (name === 'masterfloat') {
				this.add('c|%Master Float|/me flops out');
			}
			if (name === 'snow') {
				this.add('c|+snow|Luck is just not on my side today, isn\'t it?');
			}
			if (name === 'superjeenius') {
				this.add('c|%SuperJeenius|I\'ll play with you some other day.');
			}
			if (name === 'viktria') {
				this.add('c|%Viktria|Hey... this isn\'t over. There will be others... I won\'t ever forget you.');
			}
			// Voices
			if (name === 'abdominicarus') {
				this.add('c|+Ab Dominicarus|NO FLEX... ZONE');
			}
			if (name === 'allianceaegis') {
				this.add('c|+Alliance Aegis|/html I\'ll go easy by switching out now <em class="mine"><img src="http://i.imgur.com/V728AvL.png" title="xaa" height="30" width="30" /></em>');
			}
			if (name === 'arkenciel') {
				this.add('c|+ArkenCiel|Hmm.. That could be a problem.');
			}
			if (name === 'crystalxman') {
				this.add('c|+Crystal Xman|No matter what, you keep finding something to fight for!');
			}
			if (name === 'escoffier') {
				this.add('c|+Escoffier|Gotta Go Fast Fam ಠ益ಠ');
			}
			if (name === 'kre8noyz') {
				this.add('c|+Kre8noyz|QUE PUTO ERES!!!');
			}
			/*if (name === 'mdnightprf') { // no longer staff
				this.add('c|+Midnight Prof Exo|I\'ll be back for you my pretties.');
			}*/
			if (name === 'pegasusjane') {
				this.add('c|+Pegasus Jane|Return to the ocean and heal!');
			}
			if (name === 'samcrowe') {
				this.add('c|+Sam Crowe|Imma go....in your mom');
			}
			if (name === 'silveee') {
				this.add('c|+Silveee|( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)( ͡° ͜ʖ ͡°)');
			}
			/*if (name === 'skymightfall') {
				this.add('c|+Sky Might Fall|');
			}*/
		},
		/*
		onDragOut: function (pokemon) {
			// Prevents qtrx from being red carded by chaos while in the middle of using sig move, which causes a visual glitch.
			if (pokemon.isDuringAttack) {
				this.add('-message', "But the Unown Aura absorbed the effect!");
				return null;
			}
			if (pokemon.kupoTransformed) {
				pokemon.name = '@kupo';
				pokemon.kupoTransformed = false;
			}
		},
		onAfterMoveSelf: function (source, target, move) {
			// Make haunter not immune to Life Orb as a means to balance.
			if (toId(source.name) === 'haunter') {
				this.damage(source.maxhp / 10, source, source, this.getItem('lifeorb'));
			}
		},*/
		onModifyPokemon: function (pokemon) {
			/*
			let name = toId(pokemon.name);
			// Enforce choice item locking on custom moves.
			// qtrx only has one move anyway. This isn't implemented for Cathy since her moves are all custom. Don't trick her a Scarf!
			if (name !== 'qtrx' && name !== 'Cathy') {
				var moves = pokemon.moveset;
				if (pokemon.getItem().isChoice && pokemon.lastMove === moves[3].id) {
					for (var i = 0; i < 3; i++) {
						if (!moves[i].disabled) {
							pokemon.disableMove(moves[i].id, false);
							moves[i].disabled = true;
						}
					}
				}
			}
			*/
			// Enforce taunt disabling custom moves.
			if (pokemon.volatiles['taunt']) {
				let moves = pokemon.moveset;
				for (let i = 0; i < moves.length; i++) {
					if (this.getMove(moves[i].id).category === 'Status' && !moves[i].disabled) {
						pokemon.disableMove(moves[i].id, false);
						moves[i].disabled = true;
					}
				}
			}
		},
		// Specific residual events for custom moves.
		// This allows the format to have kind of custom side effects and volatiles.
		/*
		onResidual: function (battle) {
			for (let s in battle.sides) {
				let thisSide = battle.sides[s];
				if (thisSide.premonTimer > 4) {
					thisSide.premonTimer = 0;
					thisSide.premonEffect = true;
				} else if (thisSide.premonTimer > 0) {
					if (thisSide.premonTimer === 4) thisSide.addSideCondition('safeguard');
					thisSide.premonTimer++;
				}
				for (let p in thisSide.active) {
					let pokemon = thisSide.active[p];
					let name = toId(pokemon.name);
					if (pokemon.side.premonEffect) {
						pokemon.side.premonEffect = false;
						this.add('c|@zdrup|...dary! __**LEGENDARY!**__');
						this.boost({atk:1, def:1, spa:1, spd:1, spe:1, accuracy:1}, pokemon, pokemon, 'legendary premonition');
						pokemon.addVolatile('aquaring');
						pokemon.addVolatile('focusenergy');
					}
					if (pokemon.volatiles['resilience'] && !pokemon.fainted) {
						this.heal(pokemon.maxhp / 16, pokemon, pokemon);
						this.add('-message', pokemon.name + "'s resilience healed itself!");
					}
					if (pokemon.volatiles['unownaura'] && !pokemon.fainted && !pokemon.illusion) {
						this.add('-message', "Your keyboard is reacting to " + pokemon.name + "'s Unown aura!");
						if (this.random(2) === 1) {
							this.useMove('trickroom', pokemon);
						} else {
							this.useMove('wonderroom', pokemon);
						}
					}
				}
			}
		},
		*/
		// This is where the signature moves are actually done.
		onModifyMove: function (move, pokemon) {
			// This is to make signature moves work when transformed.
			if (move.id === 'transform') {
				move.onHit = function (target, pokemon) {
					if (!pokemon.transformInto(target, pokemon)) return false;
					pokemon.originalName = pokemon.name;
					pokemon.name = target.name;
				};
			}
			/*
			let name = toId(pokemon.illusion && move.sourceEffect === 'allyswitch' ? pokemon.illusion.name : pokemon.name);
			// Prevent visual glitch with Spell Steal.
			move.effectType = 'Move';
			*/
		},
	},
];
