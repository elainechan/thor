'use strict';
var some_data = 
      {
        "nodes": [
          {
            "id": 1
          },
          {
            "id": 2
          },
          {
            "id": 3
          }
        ],
        "edges": [
          {
            "source": 1,
            "target": 2
          },
          {
            "source": 1,
            "target": 3,
          }
        ]
			};
			
			alchemy.begin({"dataSource": some_data})