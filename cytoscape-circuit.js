const assets = [
	'ammeter',
	'battery',
	'bus duct',
	'capacitor',
	'current transformer',
	'disconnect switch',
	'drawout circuit breaker',
	'emergency generator',
	'fuse',
	'fused disconnect switch',
	'future drawout circuit breaker',
	'ground earth',
	'inidicating light',
	'instantaneous overcurrent protective relay',
	'load center panelboard',
	'low voltage motor control',
	'medium voltage motor starter',
	'meter center',
	'motor',
	'non drawout circuit breaker',
	'normally closed contact',
	'normally open contact',
	'overload relay',
	'potential voltage transformer',
	'protective relay connected to current transformer',
	'removable drawout circuit breaker',
	'transfer switch',
	'transformer'
];

const assetsFile = './data/assets.csv';
const nodes = [];
const getAssets = d3.csv(assetsFile)
	.then(data => {
		data.map((val, i) => {
			let id = val.station_id;
			let idstring = id.toString();
			let entry = {
				group: 'nodes',
				data: {
					id: 'n' + val.station_id,
					name: val.station_name,
					asset: val.asset,
					company: val.company
				},
				position: {
					x: (Number(val.station_lon))*10000,
					y: -(Number(val.station_lat))*10000
				},
				selected: false,
				selectable: true
			};
			nodes.push(entry);
		});
		console.log(nodes);
		return nodes;
	});

Promise.all([getAssets]).then(initCy);

function initCy(then) {
	let nodes = then[0];
	const cy = window.cy = cytoscape({
		container: document.getElementById('cytoscape-circuit'),
		elements: nodes,
		layout: {
			name: 'preset'
		},
		style: [
			{
				selector: 'node',
				style: {
					'content': 'data(asset)'
				}
			}
		]
	});

	// Adds icons to nodes
	cy.nodes().forEach(node => {
		let asset = node.data('asset');
		let name = asset.replace(' ', '-') + '-symbol'
		console.log(name);
		node.style({
			'background-image': `./icons/electric/${name}.png`
		});
	})
}