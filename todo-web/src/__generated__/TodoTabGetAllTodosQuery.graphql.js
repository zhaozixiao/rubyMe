/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoTabGetAllTodosQueryVariables = {||};
export type TodoTabGetAllTodosQueryResponse = {|
  +allTodos: $ReadOnlyArray<{|
    +id: string,
    +reference: string,
    +description: string,
    +status: string,
  |}>
|};
export type TodoTabGetAllTodosQuery = {|
  variables: TodoTabGetAllTodosQueryVariables,
  response: TodoTabGetAllTodosQueryResponse,
|};
*/


/*
query TodoTabGetAllTodosQuery {
  allTodos {
    id
    reference
    description
    status
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "allTodos",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "reference",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "status",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoTabGetAllTodosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoTabGetAllTodosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "9118f8e4b07ddbaf3791959f08fd52df",
    "id": null,
    "metadata": {},
    "name": "TodoTabGetAllTodosQuery",
    "operationKind": "query",
    "text": "query TodoTabGetAllTodosQuery {\n  allTodos {\n    id\n    reference\n    description\n    status\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c912051cc6dc6df20bda7e78b107ea65';

module.exports = node;
