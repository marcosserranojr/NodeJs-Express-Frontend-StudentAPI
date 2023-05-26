/*
 * Copyright (c) 2012-2019 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

/*eslint-env node*/

const express = require('express')
const app = express()
const port = 3000

app.get((req, res) => {
  res.send('Hello World!')
});  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
app.use(express.static(__dirname +'/public')); //where your static content is located in your filesystem


