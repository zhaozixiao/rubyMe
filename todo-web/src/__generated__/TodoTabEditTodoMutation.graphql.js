/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateTodoInput = {|
  clientMutationId?: ?string,
  user: string,
  id: string,
  description?: ?string,
  status?: ?string,
|};
export type TodoTabEditTodoMutationVariables = {|
  input: UpdateTodoInput
|};
export type TodoTabEditTodoMutationResponse = {|
  +updateTodo: ?{|
    +id: string,
    +description: string,
    +reference: string,
    +status: string,
  |}
|};
export type TodoTabEditTodoMutation = {|
  variables: TodoTabEditTodoMutationVariables,
  response: TodoTabEditTodoMutationResponse,
|};
*/


/*
mutation TodoTabEditTodoMutation(
  $input: UpdateTodoInput!
) {
  updateTodo(input: $input) {
    id
    description
    reference
    status
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
    "name": "updateTodo",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoTabEditTodoMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoTabEditTodoMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bb18d2220fb3ae735f75adf010db4e3c",
    "id": null,
    "metadata": {},
    "name": "TodoTabEditTodoMutation",
    "operationKind": "mutation",
    "text": "mutation TodoTabEditTodoMutation(\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input) {\n    id\n    description\n    reference\n    status\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5c3ff11c59d5a30d0ea78b9e431fd113';

module.exports = node;
