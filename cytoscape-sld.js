'use strict';
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
const nodes = [
	// transformer
	{
		group: 'nodes',
		data: {
			id: 'n1',
			name: 'transformer'
		},
		position: {
			x: 600,
			y: 100
		},
		style: {
			'shape': 'rectangle',
			'width': '72px',
			'height': '40px',
			'background-image': './icons/electric/transformer-symbol.png'
		}
	},
	{
		group: 'nodes',
		data: {
			id: 'n2',
			name: 'drawout circuit breaker'
		},
		position: {
			x: 600,
			y: 200
		},
		style: {
			'shape': 'rectangle',
			'width': '78px',
			'height': '30px',
			'background-image': './icons/electric/drawout-circuit-breaker-symbol.png'
		}
	},
	{
		group: 'nodes',
		data: {
			id: 'n3',
			name: 'drawout circuit breaker'
		},
		position: {
			x: 300,
			y: 300
		},
		style: {
			'shape': 'rectangle',
			'width': '78px',
			'height': '30px',
			'background-image': './icons/electric/drawout-circuit-breaker-symbol.png'
		}
	},
	{
		group: 'nodes',
		data: {
			id: 'n4',
			name: 'drawout circuit breaker'
		},
		position: {
			x: 900,
			y: 300
		},
		style: {
			'shape': 'rectangle',
			'width': '78px',
			'height': '30px',
			'background-image': './icons/electric/drawout-circuit-breaker-symbol.png'
		}
	},
	{
		group: 'nodes',
		data: {
			id: 'n5',
			name: 'transformer'
		},
		position: {
			x: 300,
			y: 400
		},
		style: {
			'shape': 'rectangle',
			'width': '72px',
			'height': '40px',
			'background-image': './icons/electric/transformer-symbol.png'
		}
	},
	{
		group: 'nodes',
		data: {
			id: 'n6',
			name: 'fused disconnect switch'
		},
		position: {
			x: 900,
			y: 400
		},
		style: {
			'shape': 'rectangle',
			'width': '72px',
			'height': '20px',
			'background-image': './icons/electric/fused-disconnect-switch-symbol.png'
		}
	},
	{
		group: 'nodes',
		data: {
			id: 'n7',
			name: 'disconnect switch'
		},
		position: {
			x: 300,
			y: 500
		},
		style: {
			'shape': 'rectangle',
			'width': '72px',
			'height': '30px',
			'background-image': './icons/electric/disconnect-switch-symbol.png'
		}
	},
	{
		group: 'nodes',
		data: {
			id: 'n8',
			name: 'drawout circuit breaker'
		},
		position: {
			x: 300,
			y: 600
		},
		style: {
			'shape': 'rectangle',
			'width': '78px',
			'height': '28px',
			'background-image': './icons/electric/drawout-circuit-breaker-symbol.png'
		}
	}
];
const edges = [
	{
		group: 'edges',
		data: {
			id: 'e1',
			source: 'n1',
			target: 'n2'
		},
		style: {
			'width': 5
		}
	},
	{
		group: 'edges',
		data: {
			id: 'e2',
			source: 'n2',
			target: 'n3'
		},
		style: {
			'width': 5
		}
	},
	{
		group: 'edges',
		data: {
			id: 'e3',
			source: 'n2',
			target: 'n4'
		},
		style: {
			'width': 5
		}
	},
	{
		group: 'edges',
		data: {
			id: 'e4',
			source: 'n3',
			target: 'n5'
		},
		style: {
			'width': 5
		}
	},
	{
		group: 'edges',
		data: {
			id: 'e5',
			source: 'n4',
			target: 'n6'
		},
		style: {
			'width': 5
		}
	},
	{
		group: 'edges',
		data: {
			id: 'e6',
			source: 'n5',
			target: 'n7'
		},
		style: {
			'width': 5
		}
	},
	{
		group: 'edges',
		data: {
			id: 'e7',
			source: 'n7',
			target: 'n8'
		},
		style: {
			'width': 5
		}
	},
];

const cy = window.cy = cytoscape({
	container: document.getElementById('cytoscape-sld'),
	elements: nodes.concat(edges),
	layout: {
		name: 'preset'
	}

});

window.cy.on('click', 'node', (e) => {
	let targetNode = e.target;
	alert(`Node ID: ${targetNode.id()}\nAsset: ${targetNode.data('name')}`);
});

window.cy.on('click', 'edge', (e) => {
	let targetEdge = e.target;
	targetEdge.style({
		'width': 14
	});
	alert(`Edge ID: ${targetEdge.id()}`);
		cy.edges().forEach(edge => {
			if (edge.id() !== e.target.id()) {
				edge.style({
					'width': 5
				})
			}
		})
})

// circuit breaker
// circuit breaker
// circuit breaker
