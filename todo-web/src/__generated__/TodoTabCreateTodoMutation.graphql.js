/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTodoInput = {|
  clientMutationId?: ?string,
  description: string,
  reference: string,
|};
export type TodoTabCreateTodoMutationVariables = {|
  input: CreateTodoInput
|};
export type TodoTabCreateTodoMutationResponse = {|
  +createTodo: ?{|
    +id: string,
    +description: string,
    +reference: string,
  |}
|};
export type TodoTabCreateTodoMutation = {|
  variables: TodoTabCreateTodoMutationVariables,
  response: TodoTabCreateTodoMutationResponse,
|};
*/


/*
mutation TodoTabCreateTodoMutation(
  $input: CreateTodoInput!
) {
  createTodo(input: $input) {
    id
    description
    reference
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "createTodo",
    "plural": false,
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
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "reference",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoTabCreateTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoTabCreateTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "08f3046173c9cb950cabcedb0ab392fa",
    "id": null,
    "metadata": {},
    "name": "TodoTabCreateTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoTabCreateTodoMutation(\n  $input: CreateTodoInput!\n) {\n  createTodo(input: $input) {\n    id\n    description\n    reference\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '3ea3acf3e3443bf474cb8ec3b7c06958';

module.exports = node;
