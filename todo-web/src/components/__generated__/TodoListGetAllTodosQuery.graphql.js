/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoListGetAllTodosQueryVariables = {||};
export type TodoListGetAllTodosQueryResponse = {|
  +allTodos: $ReadOnlyArray<{|
    +id: string,
    +reference: string,
    +description: string,
    +status: string,
  |}>
|};
export type TodoListGetAllTodosQuery = {|
  variables: TodoListGetAllTodosQueryVariables,
  response: TodoListGetAllTodosQueryResponse,
|};
*/


/*
query TodoListGetAllTodosQuery {
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
    "name": "TodoListGetAllTodosQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListGetAllTodosQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "28e6120feef173c96e041edfd0f8f904",
    "id": null,
    "metadata": {},
    "name": "TodoListGetAllTodosQuery",
    "operationKind": "query",
    "text": "query TodoListGetAllTodosQuery {\n  allTodos {\n    id\n    reference\n    description\n    status\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'feabe5c659884872a33529fbe12a207e';

module.exports = node;
