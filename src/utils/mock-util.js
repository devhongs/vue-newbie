//import * as apiModule from '@/api/index';

const mockUtil = {
  getGridData() {
    {nm}
  },
  getTreeData() {
    return [
      {
        "id": 20,
        "text": "New Item 1...0",
        "value": "New Item 1...0",
        "icon": "",
        "opened": false,
        "selected": false,
        "disabled": false,
        "loading": false,
        "children": [
          {
            "id": 19,
            "text": "Loading...",
            "value": "Loading...",
            "icon": "",
            "opened": false,
            "selected": false,
            "disabled": true,
            "loading": true,
            "children": []
          }
        ],
        "isLeaf": false
      },
      {
        "id": 22,
        "text": "New Item 2...0",
        "value": "New Item 2...0",
        "icon": "",
        "opened": true,
        "selected": false,
        "disabled": false,
        "loading": false,
        "children": [
          {
            "id": 28,
            "text": "New Item 1...22",
            "value": "New Item 1...22",
            "icon": "",
            "opened": false,
            "selected": false,
            "disabled": false,
            "loading": false,
            "children": [
              {
                "id": 27,
                "text": "Loading...",
                "value": "Loading...",
                "icon": "",
                "opened": false,
                "selected": false,
                "disabled": true,
                "loading": true,
                "children": []
              }
            ],
            "isLeaf": false
          },
          {
            "id": 30,
            "text": "New Item 2...22",
            "value": "New Item 2...22",
            "icon": "",
            "opened": false,
            "selected": false,
            "disabled": false,
            "loading": false,
            "children": [
              {
                "id": 29,
                "text": "Loading...",
                "value": "Loading...",
                "icon": "",
                "opened": false,
                "selected": false,
                "disabled": true,
                "loading": true,
                "children": []
              }
            ],
            "isLeaf": false
          }
        ],
        "isLeaf": false
      }
    ]
  }
};

export default mockUtil;
